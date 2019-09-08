// if we are testing, substitute supertest-compatible fetch for browser's fetch
if (typeof process !== "undefined" && process.env.NODE_ENV === "test") {
    const http = require("http");
    const { makeFetch } = require("supertest-fetch");
    fetch = makeFetch(http.createServer(require("../app")));
}

// SETTINGS
SEARCH_URL = "/book-search";


// HELPERS / UTILS
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const formatQueryURL = (baseURL, query) => `${baseURL}?q=${query}`;


// ACTIONS
const fetchBooks = query => {
    fetch(formatQueryURL(SEARCH_URL, query))
        .then(
            resp => resp.json(),
            err => console.error("error reading response", err)
        )
        .then(
            renderBooksResponse,
            err => console.error("error reading json", err)
        );
}

// VIEW LOGIC
// (writing the document body here instead of in the index file so that the 
    // same html is created when requiring this module for testing)
document.body.innerHTML = `
    <div class="header">
        <h1>Welcome to The Library</h1>
        <i>Shhh!</i>
    </div>
    <div class="page-body">
        <form class="search-form">
            <input 
                class="search-input" 
                id="searchInput" 
                name="searchInput" 
                placeholder="Enter a search term" />
            <button type="submit"></button>
            <p class="error-message"></p>
        </form>
        <ul class="book-list"></ul>
    </div>
`;

const clearErrorState = () => {
    $(".search-form .error-message").innerHTML = ""
    $(".search-form .search-input").classList.remove("error");
}

const enterErrorState = () => {
    $(".search-form .error-message").innerHTML  = "Please enter a search term."
    $(".search-form .search-input").classList.add("error");
}

const handleFormSubmit = e => {
    e.preventDefault();
    const searchTerm = $(".search-input").value;
    if (!searchTerm) {
        enterErrorState()
        return
    }
    fetchBooks(searchTerm);
}

const renderBooksResponse = json => {
    if (!json.totalItems) {
        $(".book-list").innerHTML = renderNoResults();
    }
    else {
        $(".book-list").innerHTML = json.items.map(renderBookItem).join("");    
    }
}

const renderBookItem = bookObj => `
    <li class="book-item">
        <div class="thumbnail-main">
            <h4 class="book-title">Title: ${bookObj.volumeInfo.title}</h4>
            ${
                bookObj.volumeInfo.imageLinks ? 
                `<img src="${bookObj.volumeInfo.imageLinks.smallThumbnail}" />`  :
                ""
            }    
        </div>
        <div class="details">
            <p class="book-authors">Authors: ${
                bookObj.volumeInfo.authors ? 
                bookObj.volumeInfo.authors.join(", ") :
                "N/A"
            }
            </p>
            <p class="publishing company">Publisher: ${bookObj.volumeInfo.publisher}</p>
            <a class="learn-more" href="${bookObj.volumeInfo.infoLink}" target="_blank">Learn more</a>
        </div>
    </li>
`

const renderNoResults = () => `
    <p class="no-results">No results found</p>
`;

// assign event listeners
$(".search-form").addEventListener("submit", handleFormSubmit);
$(".search-input").addEventListener("focus", clearErrorState);

