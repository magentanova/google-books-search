const http = require("http");
const url = require('url');

const bookSearchProxy = require("./middleware/bookSearchProxy");
const staticFileHandler = require("./middleware/staticFileHandler");

const port = process.env.PORT || 3000;

// set up bad-express
const app = function(request, response) {
    // supe up request obj
    request.parsedPath = url.parse(request.url);

    // supe up response obj
    response.sendJSON = (data) => {
        response.setHeader("content-type", "application/json");
        response.writeHead(200);
        response.end(JSON.stringify(data));
    }
    response.sendError = (code=500, message="an unknown error ocurred") => {
        response.writeHead(code);
        response.end(JSON.stringify({
            message
        }));
    }

    app.middleware.forEach(obj => {
        // if a response has already been sent, don't invoke the next middleware
        if (response.finished) {
            return
        }
        // otherwise, if we match the middleware's corresponding method and 
            // route pattern, invoke the callback
        if (request.parsedPath.pathname.match(obj.pat)) {
            // no method will be interpreted as "any method"
            if (!obj.method || obj.method === request.method) {
                obj.callback(request, response)
            }            
        }
    })
}

app.middleware = []

app.use = function(callback, pat, method) {
    app.middleware.push({
        callback,
        method: method && method.toUpperCase(),
        pat: pat || "*"
    })
}

app.use(staticFileHandler, "^/$", "GET");
app.use(staticFileHandler, "^/src", "GET");
app.use(bookSearchProxy, "^/book-search$", "GET");

http.createServer({}, app).listen(port, () => {
    console.log(`listening for requests on port ${port}...`);
})