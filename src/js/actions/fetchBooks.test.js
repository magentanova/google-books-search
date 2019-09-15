import fetchBooks from './fetchBooks';

beforeEach(() => {
    mockFetch.clear();
});

const mockResponse = {
    totalItems: 2474,
    items: [
        {
            volumeInfo: {
                title: 'Test Title',
                authors: ['Author 1', 'Author 2'],
                publisher: 'Test Publisher'
            }
        },
        {
            volumeInfo: {
                title: 'Test Title 2',
                authors: ['Author 3', 'Author 4'],
                publisher: 'Test Publisher 2'
            }
        }
    ]
};

describe('fetchBooks', () => {
    it('should throw an error if invoked without a query', () => {
        expect(() => fetchBooks()).toThrow();
    });
    it('should compose a query string that conforms to the Google Books API', async () => {
        // arrange
        mockFetch.resolveWith({
            json: () => mockResponse
        });

        // act
        const resp = await fetchBooks('test-query');

        // asssert
        expect(resp.searchEndpont).toEqual('/book-search?q=test-query');
    });
    it('should resolve with the response sent from fetch, if valid', async () => {
        // arrange
        mockFetch.resolveWith({
            json: () => mockResponse
        });

        // act
        const resp = await fetchBooks('some-query');

        // assert
        expect(resp).toEqual(mockResponse);
    });
    it('should reject if the fetch call fails', async () => {
        // arrange
        const mockError = 'Your request was unsuccessful';
        mockFetch.rejectWith(mockError);

        try {
            // act
            await fetchBooks('another-query');
        }

        catch (error) {
            // assert
            expect(error.message).toEqual(mockError);
        }
    });
});
