const app = require("../src/app");

const $ = sel => document.querySelector(sel);

test("Submitting a valid query will populate the \
books-list within 5 seconds.", done => {
    // arrange
    const bookList = $(".book-list");

    // act
    $("button").click();
    expect(document.querySelector(".book-list").innerHTML).toEqual("foo");

    // assert
        // (since we don't have separate modules to test, it's tricky to 
            // test an event with an async handler. we will just check
            // for a render every half second, up to a maximum of 5 seconds)

    const now = new Date();
    const delay = 500;
    const checkForRender = () => {
        if (bookList.innerHTML === "") {
            if (new Date() - now > 5000) {
                expect(bookList.querySelector("li")).not.toBeNull()
            }
            setTimeout(checkForRender, delay)
        }
        else {
            expect(bookList.querySelector("li")).not.toBeNull()
        }
    }
})
  

// test("Submitting a query with no results will lead to a no-results \
// message in the books-list", () => {

// })