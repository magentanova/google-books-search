# The Library — An Eighth Light Challenge

## Running the App

The app has no dependencies, so startup is pretty simple.

  - Clone the repo and `cd` in 
  - `npm run start` 
  - Open `localhost:3000` in the browser and see how things look


## Running the Tests

The tests, on the other hand, do have some dependencies. So...

  - Clone the repo and `cd` in.
  - `npm install`
  - `npm run test`


## Notes to reviewer

The requirements asked me to "not use frameworks like React and Angular." I took this as a fun challenge to complete the project with an absolute minimum of external libraries and other tooling, spending some time with the fundamentals of JS/Node. As my work progressed, I wondered whether I was taking this too far! I found myself facing a series of crossroads where normally I would use some kind of tooling, and deciding to remain consistent with the no-tooling approach. I started to become concerned about over-engineering, and I ultimately went with a compromise: holding back a little on engineering/testing in favor of the caveats/discussion below. 

As far as the client side — in the real world I would be using build tools that made it more convenient to export functions out of modules for more granular unit testing. Because I didn't use build tools, just one JS file, my tests aren't as granular as they could be, and what I have instead is something more like integration tests to make sure that certain actions taken in the search form will cause the right kind of view updates. 

In fact I ended up with some patterns that were a little strange and less than ideal. If I were instead using webpack, I would import the fetch service from a module and test that. I could use Jest's mocks for quicker tests that don't bother then network. Then I could test whether the data returned corresponded correctly to the view that was rendered, instead of just testing that the requisite DOM nodes were created.

Likewise, on the server, in the interest of time, I did not write tests for some things, like static file serving, or the basic functionality of my little express-like tool. In almost any real-world case, I would use a library for static file serving, middleware, routing, etc., and I would not be testing that library.

Overall, I've really enjoyed this exercise, and I look forward to any feedback you may have. 