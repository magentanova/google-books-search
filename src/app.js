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
    <h1>Welcome to The Library</h1>
    <i>Shhh!</i>
    <p>florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum florum clorum borum decorum </p>
    <form class="search-form">
        <input class="search-input" id="searchInput" name="searchInput" />
        <button type="submit"></button>
    </form>
    <ul class="book-list"></ul>
`;

const handleFormSubmit = e => {
    e.preventDefault();
    fetchBooks($("#searchInput").value);
}

const renderBooksResponse = json => {
    $(".book-list").innerHTML = json.items.map(renderBookItem).join("")
}

const renderBookItem = bookObj => `
    <li class="book-item">
        <h4 class="book-title">Title: ${bookObj.volumeInfo.title}</h4>
        <p class="book-authors">Authors: ${
            bookObj.volumeInfo.authors ? 
            bookObj.volumeInfo.authors.join(", ") :
            "N/A"
        }
        </p>
        <p class="publishing company">Publisher: ${bookObj.volumeInfo.publisher}</p>
        ${
            bookObj.volumeInfo.imageLinks ? 
            `<img src="${bookObj.volumeInfo.imageLinks.smallThumbnail}" />`  :
            ""
        }
        />
    </li>
`

// assign event listeners
$(".search-form").addEventListener("submit", handleFormSubmit);

