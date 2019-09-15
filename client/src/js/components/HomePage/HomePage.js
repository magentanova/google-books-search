import createComponent from '../../lib/createComponent';

import BookList from '../BookList/BookList';
import SearchForm from '../SearchForm/SearchForm';
import fetchBooks from '../../actions/fetchBooks';
import { updateStore } from '../../store';

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
        const searchFormProps = {
            error: this.props.formInvalid,
            focus: this.props.searchFocus,
            onFocus: () => {
                if (this.props.formInvalid) {
                    updateStore({
                        formInvalid: false,
                        searchFocus: true
                    })    
                }
            },
            onInvalidSubmission: () => {
                updateStore({
                    formInvalid: true,
                    searchFocus: false
                })
            },
            onSubmit: (query) => {
                updateStore({
                    booksLoading: true,
                    booksLoaded: false
                })
                fetchBooks(query)
                    .then(
                        response => {
                            updateStore({
                                books: response.items || [],
                                booksLoaded: true,
                                booksLoading: false,
                                totalBooks: response.totalItems
                            })
                        }
                    )
            }
        }

        const bookListProps = {
            books: this.props.books,
            totalBooks: this.props.totalBooks,
            booksLoaded: this.props.booksLoaded,
            booksLoading: this.props.booksLoading
        }

        this.tree.querySelector('.page-body')
            .appendChild(
                new SearchForm(searchFormProps).render()
            ).parentNode
            .appendChild(
                new BookList(bookListProps).render()
            );
    }
});
