import createComponent from '../lib/createComponent';

export default createComponent({
    template () {
        return (
            `<li class="book-item">
                <h4 class="book-title">${this.props.book.volumeInfo.title}</h4>
                <div class="details">
                    <div class="thumbnail">
                        <img src="
                        ${
                            this.props.book.volumeInfo.imageLinks
                            ? this.props.book.volumeInfo.imageLinks.smallThumbnail
                            : 'https://via.placeholder.com/133x205.png?text=No%20Image'
                        }
                        " />
                    </div>
                    <div class="metadata">
                        <p class="book-authors">Authors: ${
                            this.props.book.volumeInfo.authors
                            ? this.props.book.volumeInfo.authors.join(', ')
                            : 'N/A'
                        }
                        </p>
                        <p class="publishing company">Publisher: ${this.props.book.volumeInfo.publisher || 'Not listed'}</p>
                        <a class="learn-more" href="${this.props.book.volumeInfo.infoLink}" target="_blank">Learn more</a>
                    </div>
                </div>
            </li>`
        );
    }
});
