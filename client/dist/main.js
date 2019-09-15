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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/js/actions/fetchBooks.js":
/*!*********************************************!*\
  !*** ./client/src/js/actions/fetchBooks.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./client/src/js/utils.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ \"./client/src/js/settings.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (query => {\n    if (query === undefined) {\n        throw new Error('fetchBooks() must be invoked with a search term.');\n    };\n    const searchEndpoint = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatQueryURL\"])(_settings__WEBPACK_IMPORTED_MODULE_1__[\"SEARCH_URL\"], query);\n    return fetch(searchEndpoint)\n        .then(\n            resp => resp.json()\n        )\n        .then(\n            json => ({...json, searchEndpoint})\n        )\n        .catch(\n            err => {\n                throw new Error(err);\n            }\n        );\n});\n\n\n//# sourceURL=webpack:///./client/src/js/actions/fetchBooks.js?");

/***/ }),

/***/ "./client/src/js/app.js":
/*!******************************!*\
  !*** ./client/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HomePage/HomePage */ \"./client/src/js/components/HomePage/HomePage.js\");\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/store */ \"./client/src/js/state/store.js\");\n\n\n\nconst renderApp = () => {\n    new _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getState()).mount(document.body);\n};\n\n_state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('update', renderApp);\n\nrenderApp();\n\n//# sourceURL=webpack:///./client/src/js/app.js?");

/***/ }),

/***/ "./client/src/js/components/BookItem/BookItem.js":
/*!*******************************************************!*\
  !*** ./client/src/js/components/BookItem/BookItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./client/src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    propTypes: {\n        book: 'object'\n    },\n\n    template () {\n        return (\n            `<li class=\"book-item\">\n                <h4 class=\"book-title\">${this.props.book.title}</h4>\n                <div class=\"details\">\n                    <div class=\"thumbnail\">\n                        <img src=\"\n                        ${\n                            this.props.book.imageLinks\n                            ? this.props.book.imageLinks.smallThumbnail\n                            : 'https://via.placeholder.com/133x205.png?text=No%20Image'\n                        }\n                        \" />\n                    </div>\n                    <div class=\"metadata\">\n                        <p class=\"book-authors\">Authors: ${\n                            this.props.book.authors\n                            ? this.props.book.authors.join(', ')\n                            : 'N/A'\n                        }</p>\n                        <p class=\"publishing-company\">Publisher: ${this.props.book.publisher || 'Not listed'}</p>\n                        ${this.props.book.infoLink\n                            ? `<a class=\"learn-more\" href=\"${this.props.book.infoLink}\" target=\"_blank\">Learn more</a>`\n                            : ''\n                        }\n                    </div>\n                </div>\n            </li>`\n        );\n    }\n}));\n\n\n//# sourceURL=webpack:///./client/src/js/components/BookItem/BookItem.js?");

/***/ }),

/***/ "./client/src/js/components/BookList/BookList.js":
/*!*******************************************************!*\
  !*** ./client/src/js/components/BookList/BookList.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./client/src/js/lib/createComponent.js\");\n/* harmony import */ var _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BookItem/BookItem */ \"./client/src/js/components/BookItem/BookItem.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    propTypes: {\n        books: 'object',\n        booksLoaded: 'boolean',\n        booksLoading: 'boolean'\n    },\n\n    template () {\n        let resultsMessage = '';\n        if (this.props.booksLoaded) {\n            if (this.props.totalBooks) {\n                const numBooks = parseInt(this.props.totalBooks).toLocaleString();\n                resultsMessage = `There are ${numBooks} books that match \\\nyour search query. Displaying results 1 - 10.`;\n            }\n            else {\n                resultsMessage = 'No books match your search query.';\n            }\n        }\n\n        let loadingGif = '';\n        let loadingMessage = '';\n        if (this.props.booksLoading) {\n            loadingGif = '<img alt=\"loading-gif\" src=\"/static/loader.gif\"/>';\n            loadingMessage = 'Loading...';\n        }\n\n        return (\n            `<div class=\"results-area\">\n                <p class=\"results-message\">${resultsMessage}</p>\n                <div class=\"loading-area\" >\n                    <p class=\"loading-message\">${loadingMessage}</p>\n                    <div class=\"loading-gif\">${loadingGif}</div>\n                </div>\n                <ul class=\"book-list\"></ul>\n            </div>`\n        );\n    },\n    postRender () {\n        if (this.props.booksLoaded) {\n            this.props.books.forEach(bookObj => {\n                this.tree.$('.book-list').appendChild(\n                    new _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ book: bookObj.volumeInfo }).render()\n                );\n            });\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./client/src/js/components/BookList/BookList.js?");

/***/ }),

/***/ "./client/src/js/components/HomePage/HomePage.js":
/*!*******************************************************!*\
  !*** ./client/src/js/components/HomePage/HomePage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./client/src/js/lib/createComponent.js\");\n/* harmony import */ var _BookList_BookList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BookList/BookList */ \"./client/src/js/components/BookList/BookList.js\");\n/* harmony import */ var _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchForm/SearchForm */ \"./client/src/js/components/SearchForm/SearchForm.js\");\n/* harmony import */ var _actions_fetchBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/fetchBooks */ \"./client/src/js/actions/fetchBooks.js\");\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/store */ \"./client/src/js/state/store.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<div class=\"home-page\">\n                <div class=\"header\">\n                    <h1>Welcome to The Library</h1>\n                    <i>Shhh!</i>\n                </div>\n                <div class=\"page-body\">\n                </div>\n            </div>`\n        );\n    },\n\n    postRender () {\n        const searchFormProps = {\n            error: this.props.formInvalid,\n            focus: this.props.searchFocus,\n            onFocus: () => {\n                if (this.props.formInvalid) {\n                    Object(_state_store__WEBPACK_IMPORTED_MODULE_4__[\"updateStore\"])({\n                        formInvalid: false,\n                        searchFocus: true\n                    }); \n                }\n            },\n            onInvalidSubmission: () => {\n                Object(_state_store__WEBPACK_IMPORTED_MODULE_4__[\"updateStore\"])({\n                    formInvalid: true,\n                    searchFocus: false\n                });\n            },\n            onSubmit: (query) => {\n                Object(_state_store__WEBPACK_IMPORTED_MODULE_4__[\"updateStore\"])({\n                    booksLoading: true,\n                    booksLoaded: false\n                });\n                Object(_actions_fetchBooks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(query)\n                    .then(\n                        response => {\n                            Object(_state_store__WEBPACK_IMPORTED_MODULE_4__[\"updateStore\"])({\n                                books: response.items || [],\n                                booksLoaded: true,\n                                booksLoading: false,\n                                totalBooks: response.totalItems\n                            });\n                        }\n                    );\n            }\n        };\n\n        const bookListProps = {\n            books: this.props.books,\n            totalBooks: this.props.totalBooks,\n            booksLoaded: this.props.booksLoaded,\n            booksLoading: this.props.booksLoading\n        };\n\n        this.tree.querySelector('.page-body')\n            .appendChild(\n                new _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"](searchFormProps).render()\n            ).parentNode\n            .appendChild(\n                new _BookList_BookList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](bookListProps).render()\n            );\n    }\n}));\n\n\n//# sourceURL=webpack:///./client/src/js/components/HomePage/HomePage.js?");

/***/ }),

/***/ "./client/src/js/components/SearchForm/SearchForm.js":
/*!***********************************************************!*\
  !*** ./client/src/js/components/SearchForm/SearchForm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./client/src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    propTypes: {\n        focus: 'boolean',\n        error: 'boolean',\n        onSubmit: 'function',\n        onInvalidSubmission: 'function'\n    },\n\n    template () {\n        const errorMessage = this.props.error\n            ? 'Please enter a search term.'\n            : '';\n\n        const errorClass = this.props.error ? 'error' : '';\n\n        return (\n            `<div class=\"search-area\">\n                <h3>Swearch our catalog</h3>\n                <form class=\"search-form\">\n                    <input \n                        class=\"search-input ${errorClass}\" \n                        id=\"search-input\" \n                        name=\"search-input\" \n                        tabindex=\"0\"\n                        placeholder=\"Enter a search term\" />\n                    <button type=\"submit\">Go</button>\n                </form>\n                <p class=\"error-message\">${errorMessage}</p>\n            </div>`\n        );\n    },\n\n    events: {\n        '.search-input focus': function (e) {\n            this.props.onFocus();\n        },\n\n        '.search-form submit': function (e) {\n            e.preventDefault();\n            const searchTerm = this.tree.$('.search-input').value;\n            if (!searchTerm) {\n                this.props.onInvalidSubmission();\n            }\n            else {\n                this.props.onSubmit(searchTerm);\n            }\n        }\n    },\n\n    postRender: function () {\n        if (this.props.focus) {\n            const self = this;\n            // this is ...unfortunate. with time i would come up with something better,\n                // but unfortunately focus is not preserved when an unattached node\n                // is attached to the dom.\n            setTimeout(() => {\n                self.tree.$('.search-input').focus();\n            }, 50);\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./client/src/js/components/SearchForm/SearchForm.js?");

/***/ }),

/***/ "./client/src/js/lib/createComponent.js":
/*!**********************************************!*\
  !*** ./client/src/js/lib/createComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst parser = new DOMParser();\n\nconst createComponent = (initObj) => {\n    if (typeof initObj.template !== 'function') {\n        throw new Error(`a component must be initialized with a template \nfunction that returns an html string`);\n    }\n    const Component = function (props) {\n        // defaults/stubs\n        this.events = {};\n        this.init = () => {};\n        this.postRender = () => {};\n        this.propTypes = {};\n        this.checkPropTypes = false;\n\n        Object.assign(this, initObj);\n\n        if (this.checkPropTypes) {\n            for (const key in this.propTypes) {\n                if (typeof props[key] !== this.propTypes[key]) {\n                    throw new Error(`The required type for the prop ${key} is \\\n    ${this.propTypes[key]}. Received ${props[key]}`);\n                }\n            }\n        }\n        this.props = props || {};\n        this.init();\n    };\n    Component.prototype = {\n        assignEventHandlers () {\n            Object.keys(this.events).map(selectorAndTrigger => {\n                const [selector, trigger] = selectorAndTrigger.split(' ');\n                const handler = this.events[selectorAndTrigger];\n                this.tree.querySelector(selector).addEventListener(trigger, handler.bind(this));\n            });\n        },\n        render () {\n            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];\n            this.tree.$ = ((sel) => this.tree.querySelector(sel)).bind(this);\n            this.tree.$$ = ((sel) => this.tree.querySelectorAll(sel)).bind(this);\n\n            this.assignEventHandlers();\n            this.postRender();\n            return this.tree;\n        },\n        mount (el) {\n            el.innerHTML = '';\n            el.appendChild(this.render());\n        }\n    };\n    return Component;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent);\n\n\n//# sourceURL=webpack:///./client/src/js/lib/createComponent.js?");

/***/ }),

/***/ "./client/src/js/settings.js":
/*!***********************************!*\
  !*** ./client/src/js/settings.js ***!
  \***********************************/
/*! exports provided: SEARCH_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_URL\", function() { return SEARCH_URL; });\nconst SEARCH_URL = '/book-search';\n\n//# sourceURL=webpack:///./client/src/js/settings.js?");

/***/ }),

/***/ "./client/src/js/state/store.js":
/*!**************************************!*\
  !*** ./client/src/js/state/store.js ***!
  \**************************************/
/*! exports provided: updateStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStore\", function() { return updateStore; });\nconst initalState = {\n    books: [],\n    booksLoaded: false,\n    booksLoading: false,\n    formInvalid: false,\n    searchError: false,\n    searchFocus: false\n};\n\nconst store = {\n    events: {},\n    data: initalState\n};\n\nstore.get = attr => store.data[attr];\n\nstore.getState = () => store.data;\n\nstore.set = obj => {\n    store.data = Object.assign(store.data, obj);\n    store.trigger('update');\n};\n\nstore.on = (event, callback) => {\n    const callbacks = store.events[event];\n    store.events[event] = callbacks ? [...callbacks, callback] : [callback];\n};\n\nstore.trigger = (event, ...args) => {\n    store.events[event].forEach(handler => handler(...args));\n};\n\nconst updateStore = store.set.bind(store);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack:///./client/src/js/state/store.js?");

/***/ }),

/***/ "./client/src/js/utils.js":
/*!********************************!*\
  !*** ./client/src/js/utils.js ***!
  \********************************/
/*! exports provided: $, formatQueryURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatQueryURL\", function() { return formatQueryURL; });\nconst $ = sel => document.querySelector(sel);\n\nconst formatQueryURL = (baseURL, query) => `${baseURL}?q=${query}`;\n\n\n//# sourceURL=webpack:///./client/src/js/utils.js?");

/***/ })

/******/ });