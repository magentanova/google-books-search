const https = require('https');

const BOOKS_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

module.exports = (request, response) => {
    https.get(BOOKS_ENDPOINT + request.parsedPath.search, booksResponse => {
        let finalData = '';
        booksResponse.on('data', data => {
            finalData += data;
        })
        .on('end', () => {
            response.sendJSON(JSON.parse(finalData));
        })
        .on('error', err => {
            response.sendError(500, err);
        });
    });
};