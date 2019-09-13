const url = require('url');

const bookSearchProxy = require('./middleware/bookSearchProxy');
const staticFileHandler = require('./middleware/staticFileHandler');

// set up bad-express
const app = function (request, response) {
    // supercharge request obj
    request.parsedPath = url.parse(request.url);

    // supercharge response obj
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
    app.middleware.forEach(obj => {
        // if a response has already been sent, don't invoke the next middleware
        if (match) {
            return;
        }

        obj.pat = obj.pat instanceof Array ? obj.pat : [obj.pat];

        obj.pat.forEach(pat => {
            // otherwise, if we match the middleware's corresponding method and
                // route pattern, invoke the callback
            if (request.parsedPath.pathname.match(pat)) {
                // no method will be interpreted as 'any method'
                if (!obj.method || obj.method === request.method) {
                    obj.callback(request, response);
                    match = true;
                }
            }
        });
    });

    // if the path didn't match anything, send a 400
    if (!match) {
        response.sendError('no such page exists', 400);
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
