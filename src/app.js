// SETTINGS
SEARCH_URL = "/book-search";


// HELPERS / UTILS
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelector(sel);
const formatQueryURL = (baseURL, query) => `${baseURL}?q=${query}`;


// ACTIONS
const fetchBooks = query => {
    fetch(formatQueryURL(SEARCH_URL, query))
        .catch( 
            err => console.error(err)
        )
        .then(resp => resp.json())
        .then(json => console.log(json));
}


// VIEW LOGIC

// (writing the document body here instead of in the index file so that the 
    // same html is created when requiring this module for testing)
document.body.innerHTML = `
    <h1>Welcome to The Library</h1>
    <i>Shhh!</i>
    <p>florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum </p>
    <form class="search-form">
        <input class="search-input" id="searchInput" />
        <button type="submit" />
    </form>
    <ul class="book-list">
    </ul>
`;

const handleFormSubmit = e => {
    e.preventDefault();
    window.trgt = e.target;
    $(".book-list").innerHTML = "poo";
}

$(".search-form").addEventListener("submit", handleFormSubmit);

fetchBooks("dinosaurs");