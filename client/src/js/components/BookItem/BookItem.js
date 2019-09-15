import createComponent from '../../lib/createComponent';

export default createComponent({
    propTypes: {
        book: 'object'
    },

    template () {
        return (
            `<li class="book-item">
                <h4 class="book-title">${this.props.book.title}</h4>
                <div class="details">
                    <div class="thumbnail">
                        <img src="
                        ${
                            this.props.book.imageLinks
                            ? this.props.book.imageLinks.smallThumbnail
                            : 'https://via.placeholder.com/133x205.png?text=No%20Image'
                        }
                        " />
                    </div>
                    <div class="metadata">
                        <p class="book-authors">Authors: ${
                            this.props.book.authors
                            ? this.props.book.authors.join(', ')
                            : 'N/A'
                        }</p>
                        <p class="publishing-company">Publisher: ${this.props.book.publisher || 'Not listed'}</p>
                        ${this.props.book.infoLink
                            ? `<a class="learn-more" href="${this.props.book.infoLink}" target="_blank">Learn more</a>`
                            : ''
                        }
                    </div>
                </div>
            </li>`
        );
    }
});
