import SearchForm from './SearchForm';

describe('The SearchForm component', () => {
    it('should enter an error state if `error` is received as a prop.', () => {
        // arrange 
        const tree = new SearchForm({error: true}).render()

        // assert
        expect(tree.querySelector('.error-message').innerHTML)
            .toEqual('Please enter a search term.');
        expect(tree.querySelector('.search-form .search-input').classList)
            .toContain('error');
    });

    it('should not enter an error state if `error` is not received as a prop.', () => {
        // arrange 
        const tree = new SearchForm({error: false}).render()

        // assert
        expect(tree.querySelector('.error-message').innerHTML)
            .toEqual('');
        expect(tree.querySelector('.search-form .search-input').classList)
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

    it('should call its `onSubmit` prop, and not onInvalidSubmission, \
if the submission is valid.', () => {
        // arrange 
        const props = {
            onInvalidSubmission: jest.fn(),
            onSubmit: jest.fn()
        }
        const tree = new SearchForm(props).render();

        // act
        tree.$('input').value = 'query';
        tree.$('button[type="submit"]').click();

        // assert
        expect(props.onInvalidSubmission).not.toHaveBeenCalled();
        expect(props.onSubmit).toHaveBeenCalled();
    })
})