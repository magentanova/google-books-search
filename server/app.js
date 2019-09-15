const url = require('url');

const bookSearchProxy = require('./middleware/bookSearchProxy');
const staticFileHandler = require('./middleware/staticFileHandler');

const app = function (request, response) {
    request.parsedPath = url.parse(request.url);

    response.sendJSON = (data) => {
        response.setHeader('content-type', 'application/json');
        response.writeHead(200);
        response.end(JSON.stringify(data));
    };
    response.sendError = (message = 'an unknown error ocurred', code = 500) => {
        response.setHeader('content-type', 'application/json');
        response.writeHead(code);
        response.end(JSON.stringify({
            message
        }));
    };

    let match = false;
    let handler;
    app.middleware.forEach(routeOptions => {
        const routePatterns = routeOptions.pat instanceof Array
            ? routeOptions.pat
            : [routeOptions.pat];

        routePatterns.forEach(pat => {
            if (request.parsedPath.pathname.match(pat)) {
                // no method will be interpreted as 'any method'
                if (!routeOptions.method || routeOptions.method === request.method) {
                    handler = routeOptions.callback;
                    match = true;
                }
            };
        });
    });

    if (!match) {
        response.sendError('no such page exists', 400);
    }
    else {
        handler(request, response);
    }
};

app.middleware = [];

app.use = function (callback, pat, method) {
    app.middleware.push({
        callback,
        method: method && method.toUpperCase(),
        pat: pat || '*'
    });
};

app.use(staticFileHandler,
    ['^/$', '^/dist', '^/static', '/*.js', '/*.css'],
    'GET');
app.use(bookSearchProxy, '^/book-search$', 'GET');

module.exports = app;
