import BookList from './BookList';

describe('The BookList component', () => {
    it(', given a non-empty `books` prop and a truthy `booksLoaded` prop, \
should render a BookItem component (<li> element) for each book, \
as well as a results message announcing how many books in the archive \
met the search criteria.', () => {
        // arrange
        const mockResponse = {
            totalItems: 432,
            items: [
                {
                    title: 'test-title 1'
                },
                {
                    title: 'test-title 2'
                },
                {
                    title: 'test-title 3'
                }
            ]
        };
        const props = {
            booksLoaded: true,
            books: mockResponse.items,
            totalBooks: mockResponse.totalItems
        }
        const tree = new BookList(props).render();

        // assert
        expect(tree.$$('li').length).toEqual(mockResponse.items.length);
        expect(tree.$('.results-message').textContent).toEqual(
            `There are ${mockResponse.totalItems} books that match your search query. \
Displaying results 1 - 10.`);
    });

    it(', given a booksLoaded prop of `false`, should render neither books nor \
a results message.', () => {
        // arrange
        const props = {
            booksLoaded: false,
            books: []
        }
        const tree = new BookList(props).render();

        // assert
        expect(tree.$$('li').length).toEqual(0);
        expect(tree.$('.results-message').textContent).toEqual('');
    });

    it('should render an appropriate message when `booksLoaded` is true and \
`books` is empty.', () => {
        // arrange
        const props = {
            booksLoaded: true,
            books: []
        }
        const tree = new BookList(props).render();

        // assert
        expect(tree.$$('li').length).toEqual(0);
        expect(tree.$('.results-message').textContent).toEqual(
            'No books match your search query.'
        );
    });

    it('should enter a loading state when the `booksLoading` prop is truthy.', 
      () => {
        // arrange
        const props = {
            booksLoading: true,
            books: []
        }
        const tree = new BookList(props).render();

        // assert
        expect(tree.$('.loading-message').textContent).toEqual('Loading...');
        expect(tree.$('.loading-gif img')).not.toBeNull();
    });

    it('should not enter a loading state when the `booksLoading` prop is falsy.', 
      () => {
        // arrange
        const props = {
            booksLoading: false,
            books: []
        }
        const tree = new BookList(props).render();

        // assert
        expect(tree.$('.loading-message').textContent).toEqual('');
        expect(tree.$('.loading-message img')).toBeNull();
    });

});