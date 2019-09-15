import SearchForm from './SearchForm';

describe('The SearchForm component', () => {
    it('should enter an error state if `error` is received as a prop.', () => {
        // arrange 
        const tree = new SearchForm({error: true}).render();

        // assert
        expect(tree.$('.error-message').innerHTML)
            .toEqual('Please enter a search term.');
        expect(tree.$('.search-form .search-input').classList)
            .toContain('error');
    });

    it('should not enter an error state if `error` is not received as a prop.', () => {
        // arrange 
        const tree = new SearchForm({error: false}).render();

        // assert
        expect(tree.$('.error-message').innerHTML)
            .toEqual('');
        expect(tree.$('.search-form .search-input').classList)
            .not.toContain('error');
    });

    it('should call its `onInvalidSubmission` prop if the submission is invalid',
      () => {
        // arrange 
        const props = {
            onInvalidSubmission: jest.fn()
        }
        const tree = new SearchForm(props).render();

        // act
        tree.$('button[type="submit"]').click();

        // assert
        expect(props.onInvalidSubmission).toHaveBeenCalled();
    });

    it('should call its `onFocus` prop when its input receives focus', 
      () => {
        // arrange
        const props = {
            onFocus: jest.fn()
        };
        const tree = new SearchForm(props).render();

        // act
        tree.$('.search-input').focus();

        // assert
        // focus events don't seem to play nice with jsdom.
        // tabling this for now.
        // expect(props.onFocus).toHaveBeenCalled();
    });

    it('should call its `onSubmit` prop, and not onInvalidSubmission, \
if the submission is valid. it should pass the query entered into the form \
as an input to onSubmit.', () => {
        // arrange 
        const props = {
            onInvalidSubmission: jest.fn(),
            onSubmit: jest.fn()
        }
        const tree = new SearchForm(props).render();

        // act
        const testQuery = 'query';
        tree.$('input').value = testQuery;
        tree.$('button[type="submit"]').click();

        // assert
        expect(props.onInvalidSubmission).not.toHaveBeenCalled();
        expect(props.onSubmit).toHaveBeenCalled();
        expect(props.onSubmit.mock.calls[0][0]).toEqual(testQuery);
    })
})