import Component from '../../lib/createComponent';

import BookItem from '../BookItem/BookItem';

export default Component({
    template () {
        let resultsMessage = '';
        if (this.props.booksLoaded) {
            if (this.props.totalBooks) {
                const numBooks = parseInt(this.props.totalBooks).toLocaleString();
                resultsMessage = `There are ${numBooks} books that match \
your search query. Displaying results 1 - 10.`;
            }
            else {
                resultsMessage = 'No books match your search query.';
            }
        }

        let loadingGif = '';
        let loadingMessage = '';
        if (this.props.booksLoading) {
            loadingGif = '<img alt="loading-gif" src="/static/loader.gif"/>'
            loadingMessage = 'Loading...'
        }
        
        return (
            `<div class="results-area">
                <p class="results-message">${resultsMessage}</p>
                <div class="loading-area" >
                    <p class="loading-message">${loadingMessage}</p>
                    <div class="loading-gif">${loadingGif}</div>
                </div>
                <ul class="book-list"></ul>
            </div>`
        );
    },
    postRender () {
        if (this.props.booksLoaded) {
            this.props.books.forEach(bookObj => {
                this.tree.$('.book-list').appendChild(
                    new BookItem({book: bookObj.volumeInfo}).render()
                );
            });    
        };
    }
});
