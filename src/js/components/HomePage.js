import createComponent from '../lib/createComponent';

import BookList from './BookList';
import SearchForm from './SearchForm';

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
        const pageBody = this.tree.querySelector('.page-body');
        pageBody
            .appendChild(
                new SearchForm().render()
            ).parentNode
            .appendChild(
                new BookList().render()
            );
    }
});
