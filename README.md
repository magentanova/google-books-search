
## how to run

## how to run the tests


## Notes to reviewer

The requirements asked me to "not use frameworks like React and Angular." I took this as a fun challenge to complete the project with an absolute minimum of external libraries and other tooling and spend some time with the fundamentals of JS/Node. As my work progressed, I wondered whether I was taking this too far! I found myself facing a series of crossroads where normally I would use some kind of tooling, and deciding to remain consistent with the no-tooling approach. I started to become concerned about over-engineering, and I ultimately went with a compromise: holding back a little on engineering/testing in favor of the caveats/discussion below. 

As far as the client side — in the real world I would be using build tools that made it more convenient to export functions out of modules for more granular unit testing. Because I didn't use build tools, just one JS file, my tests aren't as granular as they could be, and what I have instead is something more like an integration test to make sure that certain actions taken in the search form will cause the right kind of view updates. If I were instead using webpack, I would import the fetch service from a module and test that. I could use Jest's mocks for quicker tests that don't bother then network. Then I could test whether the first result in the response body actually corresponded to the first `<li>` rendered in the `.books-list`, instead of just testing that at least one `<li>` was created.

Likewise, on the server, in the interest of time, I did not write tests for some things, like static file serving, or the basic functionality of my little express-like tool. In almost any real-world case, I would use a library for static file serving, middleware, routing, etc., and I would not be testing that library.

