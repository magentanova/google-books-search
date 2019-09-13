import Component from '../lib/Component';

// import BookItem from './BookItem';
import store from '../store';

export default Component({
    template () {
        return (
            `<div class="results-area">
                <p class="results-message"></p>
                <ul class="book-list"></ul>
            </div>`
        );
    },
    postRender () {
        // store.get('books').forEach(() => {
        //     this.tree.querySelector('.book-list').appendChild(new BookItem().render());
        // });
        // console.log(BookItem)
    }
});
