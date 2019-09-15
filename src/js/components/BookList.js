import Component from '../lib/createComponent';

import BookItem from './BookItem';
import store from '../store';

export default Component({
    template () {
        return (
            `<div class="results-area">
                <p class="results-message"></p>
                <div class="loading-area" >
                    <p class="loading-message"></p>
                    <div class="loading-gif"></div>
                </div>
                <ul class="book-list"></ul>
            </div>`
        );
    },
    postRender () {
        const booksUl = this.tree.querySelector('.book-list');
        store.get('books').forEach((bookObj) => {
            booksUl.appendChild(new BookItem(bookObj).render());
        });
    }
});
