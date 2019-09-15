import createComponent from '../../lib/createComponent';

import BookList from '../BookList/BookList';
import SearchForm from '../SearchForm/SearchForm';
import store from '../../store';

export default createComponent({
    template () {
        return (
            `<div class="home-page">
                <div class="header">
                    <h1>Welcome to The Library</h1>
                    <i>Shhh!</i>
                </div>
                <div class="page-body">
                </div>
            </div>`
        );
    },
    postRender () {
        const appState = store.getState();

        this.tree.querySelector('.page-body')
            .appendChild(
                new SearchForm().render()
            ).parentNode
            .appendChild(
                new BookList().render()
            );
    }
});
