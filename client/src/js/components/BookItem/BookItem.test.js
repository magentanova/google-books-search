import BookItem from './BookItem';

describe('The BookItem component', () => {
    it('should correctly render the title, authors, publishing company, \
thumbnail image, and external link for a book.', () => {
        // arrange
        const testBook = {
            title: 'test title',
            authors: ['author 1', 'author 2'],
            publisher: 'test publisher',
            imageLinks: {
                smallThumbnail: 'https://test.com/path/to/img.jpg'
            },
            infoLink: 'https://test.com/book-info/bookid1'
        }
        const tree = new BookItem({ book: testBook }).render();

        // assert
        expect(tree.$('.book-title').textContent).toEqual(testBook.title);
        expect(tree.$('.book-authors').textContent).toEqual(
            'Authors: ' + testBook.authors.join(', ')
        );
        expect(tree.$('.publishing-company').textContent).toEqual(
            'Publisher: ' + testBook.publisher
        );
        expect(tree.$('.thumbnail img').src).toEqual(
            testBook.imageLinks.smallThumbnail
        );        
        expect(tree.$('.learn-more').href).toEqual(testBook.infoLink);
    });

    it('should render appropriate null values for any missing book props.', () => {
        // arrange
        const testBook = {
            title: 'test title'
        };
        const tree = new BookItem({ book: testBook }).render();

        // assert
        expect(tree.$('.book-authors').textContent).toEqual('Authors: N/A');
        expect(tree.$('.publishing-company').textContent).toEqual('Publisher: Not listed');
        expect(tree.$('.thumbnail img').src).toEqual(
            'https://via.placeholder.com/133x205.png?text=No%20Image'
            );
        expect(tree.$('.learn-more')).toBeNull();
    });
});
