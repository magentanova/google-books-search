/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HomePage */ \"./src/js/components/HomePage.js\");\n\n\nconst $ = sel =>  document.querySelector(sel);\n\nconst clearErrorState = () => {\n    $('.error-message').innerHTML = '';\n    $('.search-form .search-input').classList.remove('error');\n}\n\nconst clearLoadingState = () => {\n    $('.loading-message').innerHTML = '';\n    $('.loading-gif').innerHTML = '';\n}\n\nconst clearSearch = () => {\n    $('.search-form .search-input').value = '';\n    $('.results-area .results-message').innerHTML = '';\n    $('.results-area .book-list').innerHTML = '';\n}\n\nconst enterErrorState = () => {\n    $('.error-message').innerHTML = 'Please enter a search term.';\n    $('.search-form .search-input').classList.add('error');\n}\n\nconst enterLoadingState = () => {\n    $('.search-input').value = '';\n    $('.loading-message').innerHTML = 'Searching...';\n    $('.loading-gif').innerHTML = '<img src=\"/static/loader.gif\"/>';\n}\n\nconst handleFormSubmit = e => {\n    e.preventDefault();\n    const searchTerm = $('.search-input').value;\n    if (!searchTerm) {\n        enterErrorState()\n        return\n    }\n    clearSearch();\n    enterLoadingState();\n    fetchBooks(searchTerm);\n}\n\nconst renderBooksResponse = json => {\n    $('.results-area .results-message').innerHTML = renderResultsMessage(json.totalItems);\n    $('.book-list').innerHTML = (json.items || []).map(renderBookItem).join('');    \n}\n\nconst renderResultsMessage = itemCount => \n    itemCount ? \n        `Your search returned ${itemCount} results...` \n        : 'No results found.';\nwindow.tree = new _components_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().render();\nnew _components_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().mount(document.body);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/BookItem.js":
/*!***************************************!*\
  !*** ./src/js/components/BookItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<li class=\"book-item\">\n                <h4 class=\"book-title\">${this.props.book.volumeInfo.title}</h4>\n                <div class=\"details\">\n                    <div class=\"thumbnail\">\n                        <img src=\"\n                        ${\n                            this.props.book.volumeInfo.imageLinks\n                            ? this.props.book.volumeInfo.imageLinks.smallThumbnail\n                            : 'https://via.placeholder.com/133x205.png?text=No%20Image'\n                        }\n                        \" />\n                    </div>\n                    <div class=\"metadata\">\n                        <p class=\"book-authors\">Authors: ${\n                            this.props.book.volumeInfo.authors\n                            ? this.props.book.volumeInfo.authors.join(', ')\n                            : 'N/A'\n                        }\n                        </p>\n                        <p class=\"publishing company\">Publisher: ${this.props.book.volumeInfo.publisher || 'Not listed'}</p>\n                        <a class=\"learn-more\" href=\"${this.props.book.volumeInfo.infoLink}\" target=\"_blank\">Learn more</a>\n                    </div>\n                </div>\n            </li>`\n        );\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/BookItem.js?");

/***/ }),

/***/ "./src/js/components/BookList.js":
/*!***************************************!*\
  !*** ./src/js/components/BookList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n/* harmony import */ var _BookItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookItem */ \"./src/js/components/BookItem.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/js/store.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<div class=\"results-area\">\n                <p class=\"results-message\"></p>\n                <div class=\"loading-area\" >\n                    <p class=\"loading-message\"></p>\n                    <div class=\"loading-gif\"></div>\n                </div>\n                <ul class=\"book-list\"></ul>\n            </div>`\n        );\n    },\n    postRender () {\n        const booksUl = this.tree.querySelector('.book-list');\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('books').forEach((bookObj) => {\n            booksUl.appendChild(new _BookItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](bookObj).render());\n        });\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/BookList.js?");

/***/ }),

/***/ "./src/js/components/HomePage.js":
/*!***************************************!*\
  !*** ./src/js/components/HomePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n/* harmony import */ var _BookList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookList */ \"./src/js/components/BookList.js\");\n/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchForm */ \"./src/js/components/SearchForm.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<div class=\"home-page\">\n                <div class=\"header\">\n                    <h1>Welcome to The Library</h1>\n                    <i>Shhh!</i>\n                </div>\n                <div class=\"page-body\">\n                </div>\n            </div>`\n        );\n    },\n    postRender () {\n        const pageBody = this.tree.querySelector('.page-body');\n        pageBody\n            .appendChild(\n                new _SearchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render()\n            ).parentNode\n            .appendChild(\n                new _BookList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().render()\n            );\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/HomePage.js?");

/***/ }),

/***/ "./src/js/components/SearchForm.js":
/*!*****************************************!*\
  !*** ./src/js/components/SearchForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<div class=\"search-area\">\n                <h3>Search our catalog</h3>\n                <form class=\"search-form\">\n                    <input \n                        class=\"search-input\" \n                        id=\"searchInput\" \n                        name=\"searchInput\" \n                        placeholder=\"Enter a search term\" />\n                    <button type=\"submit\">Go</button>\n                </form>\n                <p class=\"error-message\"></p>\n            </div>`\n        );\n    },\n\n    events: {\n        '.search-form submit': e => {\n            e.preventDefault();\n            console.log('submitted');\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/SearchForm.js?");

/***/ }),

/***/ "./src/js/lib/createComponent.js":
/*!***************************************!*\
  !*** ./src/js/lib/createComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst parser = new DOMParser();\n\nconst createComponent = (initObj) => {\n    if (typeof initObj.template !== 'function') {\n        throw new Error(`a component must be initialized with a template \nfunction that returns an html string`);\n    }\n    const Component = function (props) {\n        this.props = props;\n        this.events = {};\n        this.postRender = () => {};\n        Object.assign(this, initObj);\n    };\n    Component.prototype = {\n        $ (sel) {\n            return document.querySelector(sel);\n        },\n        render () {\n            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];\n            Object.keys(this.events).map(selectorAndTrigger => {\n                const [selector, trigger] = selectorAndTrigger.split(' ');\n                const handler = this.events[selectorAndTrigger];\n                this.tree.querySelector(selector).addEventListener(trigger, handler);\n            });\n            this.postRender();\n            return this.tree;\n        },\n        mount (el) {\n            el.appendChild(this.render());\n        }\n    };\n    return Component;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent);\n\n\n//# sourceURL=webpack:///./src/js/lib/createComponent.js?");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initalState = {\n    books: [],\n    resultsMessage: '',\n    errorMessage: '',\n    loading: false\n};\n\nconst store = {\n    events: {},\n    data: initalState\n};\n\nstore.get = attr => store.data[attr];\n\nstore.set = obj => {\n    store.data = Object.assign(store.data, obj);\n    store.trigger('update');\n};\n\nstore.on = (event, callback) => {\n    const callbacks = store.events[event];\n    store.events[event] = callbacks ? [...callbacks, callback] : [callback];\n};\n\nstore.trigger = (event, ...args) => {\n    store.events[event].forEach(handler => handler(...args));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack:///./src/js/store.js?");

/***/ })

/******/ });