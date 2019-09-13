import HomePage from './components/HomePage';

const $ = sel =>  document.querySelector(sel);

const clearErrorState = () => {
    $('.error-message').innerHTML = '';
    $('.search-form .search-input').classList.remove('error');
}

const clearLoadingState = () => {
    $('.loading-message').innerHTML = '';
    $('.loading-gif').innerHTML = '';
}

const clearSearch = () => {
    $('.search-form .search-input').value = '';
    $('.results-area .results-message').innerHTML = '';
    $('.results-area .book-list').innerHTML = '';
}

const enterErrorState = () => {
    $('.error-message').innerHTML = 'Please enter a search term.';
    $('.search-form .search-input').classList.add('error');
}

const enterLoadingState = () => {
    $('.search-input').value = '';
    $('.loading-message').innerHTML = 'Searching...';
    $('.loading-gif').innerHTML = '<img src="/static/loader.gif"/>';
}

const handleFormSubmit = e => {
    e.preventDefault();
    const searchTerm = $('.search-input').value;
    if (!searchTerm) {
        enterErrorState()
        return
    }
    clearSearch();
    enterLoadingState();
    fetchBooks(searchTerm);
}

const renderBooksResponse = json => {
    $('.results-area .results-message').innerHTML = renderResultsMessage(json.totalItems);
    $('.book-list').innerHTML = (json.items || []).map(renderBookItem).join('');    
}

const renderResultsMessage = itemCount => 
    itemCount ? 
        `Your search returned ${itemCount} results...` 
        : 'No results found.';
window.tree = new HomePage().render();
new HomePage().mount(document.body);
