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
    enterLoadingState();
    fetch(formatQueryURL(SEARCH_URL, query))
        .then(
            resp => resp.json(),
            err => console.error("error reading response", err)
        )
        .then(
            json =>{
                clearLoadingState();
                renderBooksResponse(json);
            },
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
        <div class="search-area">
            <h3>Search our catalog</h3>
            <form class="search-form">
                <input 
                    class="search-input" 
                    id="searchInput" 
                    name="searchInput" 
                    placeholder="Enter a search term" />
                <button type="submit">Go</button>
            </form>
            <p class="error-message"></p>
        </div>
        <div class="loading-area" >
            <p class="loading-message"></p>
            <div class="loading-gif"></div>
        </div>
        <div class="results-area">
            <p class="results-message"></p>
            <ul class="book-list"></ul>
        </div>
    </div>
`;

const clearErrorState = () => {
    $(".error-message").innerHTML = ""
    $(".search-form .search-input").classList.remove("error");
}

const clearLoadingState = () => {
    $(".loading-message").innerHTML = "";
    $(".loading-gif").innerHTML = "";
}

const enterErrorState = () => {
    $(".error-message").innerHTML  = "Please enter a search term."
    $(".search-form .search-input").classList.add("error");
}

const enterLoadingState = () => {
    $(".search-input").value = "";
    $(".loading-message").innerHTML = "Searching...";
    $(".loading-gif").innerHTML = `<img src="/static/loader.gif" />`;
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
    $(".results-area .results-message").innerHTML = renderResultsMessage(json.totalItems);
    $(".book-list").innerHTML = (json.items || []).map(renderBookItem).join("");    
}

const renderBookItem = bookObj => `
    <li class="book-item">
        <h4 class="book-title">${bookObj.volumeInfo.title}</h4>
        <div class="details">
            <div class="thumbnail">
                <img src="
                ${
                    bookObj.volumeInfo.imageLinks ? 
                    bookObj.volumeInfo.imageLinks.smallThumbnail :
                    "https://via.placeholder.com/133x205.png?text=No%20Image"
                }
                " />
            </div>
            <div class="metadata">
                <p class="book-authors">Authors: ${
                    bookObj.volumeInfo.authors ? 
                    bookObj.volumeInfo.authors.join(", ") :
                    "N/A"
                }
                </p>
                <p class="publishing company">Publisher: ${bookObj.volumeInfo.publisher || "Not listed"}</p>
                <a class="learn-more" href="${bookObj.volumeInfo.infoLink}" target="_blank">Learn more</a>
            </div>
        </div>
    </li>
`;

const renderResultsMessage = itemCount => 
    itemCount ? 
        `Your search returned ${itemCount} results...` 
        : "No results found.";

// assign event listeners
$(".search-form").addEventListener("submit", handleFormSubmit);
$(".search-input").addEventListener("focus", clearErrorState);

