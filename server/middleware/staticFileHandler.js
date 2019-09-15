const url = require('url');
const fs = require('fs');
const path = require('path');

module.exports = (request, response) => {
    // inspired in part by
        // https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http

    const parsedUrl = url.parse(request.url);
    let pathname = `client${parsedUrl.pathname}`;
    let ext = path.parse(pathname).ext;
    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
    };

    fs.exists(pathname, function (exist) {
        if (!exist) {
            console.log('sending here');
            response.statusCode = 404;
            response.end(`File ${pathname} not found!`);
            return;
        }

        if (fs.statSync(pathname).isDirectory()) {
            ext = '.html';
            if (pathname[pathname.length - 1] !== '/') {
                pathname += '/';
            }
            pathname += `index${ext}`;
        }

        fs.readFile(pathname, function (err, data) {
            if (err) {
                response.statusCode = 500;
                response.end(`Error getting the file: ${err}.`);
            }
            else {
                response.setHeader('Content-type', map[ext] || 'text/plain');
                response.end(data);
            }
        });
    });
};
