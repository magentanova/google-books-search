# The Library — An Eighth Light Challenge

## Running locally

### Install dependencies

`npm install`


### Start webpack 

`npm run dev` 


### Run the server (proxy API & static file server)

`npm run serve`

(Note that to develop locally, both webpack and the server should be running at the same time.)


### Run the tests

`npm run test`


### Make a production build

`npm run build`


## Notes to Reviewer

After a helpful review from 8th Light, I got a better understanding of what the team was looking for and significantly refactored the front-end code. The reviewer pointed out to me that there is browser support for ES6-style modules added via script tags. Given the complexity of the refactor, I thought webpack (also stated as an allowed option) made sense. 

Things I like about the current setup are that it allows components to be pretty well decoupled from the app logic, with a clear public contract expressed through React-style props, and that it implements a simple unidirectional data-flow pattern with a single source of app state. It's definitely not a full-fledged view framework -- its many shortcomings include no local component state, an awkward interface for rendering children of a container component, no VDOM-style render optimization, and a very limited "propTypes" implementation -- but it gets the job done for this project. 

Things I would add in a future implementation:

  - Pagination. This was suggested in the original feedback, but it seemed to read more as a "nice to have" than a requested refactor. I hope I read that right. In any case it would be a must in a real-life implementation. 

  - It occurred to me a bit late in the game that implementing something like React's `propTypes` would be a good way to add built-in documentation to the components. Although the app still worked fine, this broke half of my tests, in many of which I had lazily omitted props I wasn't testing. In the interest of time, I left the prop types but turned off the type-checking by default. In a later version I would turn it on by default and fix all the tests. 

  - Unit tests for the `Component` module. In the interest of time, I omitted tests for this, treating it more as an external library.

  - Integration tests to make sure that cross-component interactions involving app state have the desired effects. 

Overall I had a great time doing this project. It's been a while since I wrote a non-trivial JS app without using any frameworks, so it was a great exercise. 