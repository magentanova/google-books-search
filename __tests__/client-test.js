const fetch = require("isomorphic-fetch");
const uuidv1 = require("uuid/v1");

require("../src/app");

const $ = sel => document.querySelector(sel);

const clearSearch = () => {
    $(".search-form .search-input").value = "";
    $(".results-area .results-message").innerHTML = "";
    $(".results-area .book-list").innerHTML = ""
}

// since we don't have separate modules to test, it's tricky to 
    // test an event with an async handler. we will just check
    // for a render every half second, up to a maximum of 3 seconds.
    // below is our helper function for this.
const checkForRender = recheckCondition => {
    const delay = 500;
    const now = new Date;
    return new Promise(res => {
        const tick = () => {
            if (recheckCondition() && new Date() - now < 3000) {
                setTimeout(tick, delay);
            }
            else {
                res()
            }    
        }
        setTimeout(tick, delay);
    })
}

test("Attempting to submit without entering a query will \
cause an error message to appear in the form.", () => {

    // arrange
    expect.assertions(2);

    // act
    $(".search-input").value = "";
    $("button").click();

    // assert
    expect($(".error-message").innerHTML).toEqual("Please enter a search term.");
    expect($(".search-form .search-input").classList).toContain("error");
});

test("Focusing on a search input while in error state will cause \
that error state to go away.", () => {

    // arrange
    expect.assertions(2);

    // act
    $(".search-input").focus();

    // assert
    expect($(".error-message").innerHTML).toEqual("");
    expect($(".search-form .search-input").classList).not.toContain("error");
});

test("Initiating search should result in a loading state.", () => {

    // arrange
    clearSearch()
    expect.assertions(2);

    // act
    $(".search-input").value = "javascript";
    $(".search-form button").click();

    // assert
    expect($(".loading-area .loading-message").innerHTML).toEqual("Searching...");
    expect($(".loading-area .loading-gif img")).not.toBeNull();
});


test("A completed search should clear the loading state.", done => {

    // arrange
    clearSearch()
    expect.assertions(2);

    // act
    $(".search-input").value = "javascript";
    $(".search-form button").click();

    // assert
    const recheckCondition = () => $(".loading-area .loading-message").innerHTML !== "";
    checkForRender(recheckCondition)
        .then(() => {
            expect($(".loading-area .loading-message").innerHTML).toEqual("");
            expect($(".loading-area .loading-gif img")).toBeNull();
            done();
        });
});

test("Submitting a query with no results will cause a no-results \
message to render in the book-list el.", done => {

    // arrange
    clearSearch()
    expect.assertions(1);

    // act
    $(".search-input").value = uuidv1();
    $("button").click();

    // assert
    const recheckCondition = () => $(".results-message").innerHTML === ""
    checkForRender(recheckCondition)
        .then(() => {
            expect($(".results-area .results-message").innerHTML).toEqual("No results found.");
            done();
        });
});
  
test("Submitting a valid query will populate the \
book-list within 3 seconds.", done => {

    // arrange
    clearSearch()
    expect.assertions(1);

    // act
    $(".search-input").value = "happiness";
    $("button").click();

    // assert
    const recheckCondition = () => $(".book-list").innerHTML === "";
    checkForRender(recheckCondition)
        .then(() => {
            expect($(".book-list li")).not.toBeNull();
            done();
        });
});