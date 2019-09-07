// app settings
SEARCH_URL = "/book-search";


// helper functions

// test this equivalence
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelector(sel);

// test that this will either populate the right element 
    //  or fail properly

const testCallback = function(json) {
    console.log('farts')
    console.log(json)
}

const fetchBooks = query => {
    fetch(formatQueryURL(SEARCH_URL, query))
        .catch( 
            err => console.error(err)
        )
        .then(resp => resp.json())
        .then(json => console.log(json))
}

// test that this does what it's supposed to
const formatQueryURL = (baseURL, query) => `${baseURL}?q=${query}`

fetchBooks("dinosaurs")