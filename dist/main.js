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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HomePage/HomePage */ \"./src/js/components/HomePage/HomePage.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/js/store.js\");\n\n\n\n_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('update', () => {\n    new _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getState()).mount(document.body);\n});\nnew _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().mount(document.body);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/BookItem/BookItem.js":
/*!************************************************!*\
  !*** ./src/js/components/BookItem/BookItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<li class=\"book-item\">\n                <h4 class=\"book-title\">${this.props.book.title}</h4>\n                <div class=\"details\">\n                    <div class=\"thumbnail\">\n                        <img src=\"\n                        ${\n                            this.props.book.imageLinks\n                            ? this.props.book.imageLinks.smallThumbnail\n                            : 'https://via.placeholder.com/133x205.png?text=No%20Image'\n                        }\n                        \" />\n                    </div>\n                    <div class=\"metadata\">\n                        <p class=\"book-authors\">Authors: ${\n                            this.props.book.authors\n                            ? this.props.book.authors.join(', ')\n                            : 'N/A'\n                        }</p>\n                        <p class=\"publishing-company\">Publisher: ${this.props.book.publisher || 'Not listed'}</p>\n                        ${this.props.book.infoLink \n                            ? `<a class=\"learn-more\" href=\"${this.props.book.infoLink}\" target=\"_blank\">Learn more</a>`\n                            : ''\n                        }\n                    </div>\n                </div>\n            </li>`\n        );\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/BookItem/BookItem.js?");

/***/ }),

/***/ "./src/js/components/BookList/BookList.js":
/*!************************************************!*\
  !*** ./src/js/components/BookList/BookList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n/* harmony import */ var _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BookItem/BookItem */ \"./src/js/components/BookItem/BookItem.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        let resultsMessage = '';\n        if (this.props.booksLoaded) {\n            if (this.props.totalBooks) {\n                resultsMessage = `There are ${this.props.totalBooks} \\\nbooks that match your search query. Displaying results 1 - 10.`;\n            }\n            else {\n                resultsMessage = 'No books match your search query.';\n            }\n        }\n\n        let loadingGif = '';\n        let loadingMessage = '';\n        if (this.props.booksLoading) {\n            loadingGif = '<img alt=\"loading-gif\" src=\"/static/loader.gif\"/>'\n            loadingMessage = 'Loading...'\n        }\n        \n        return (\n            `<div class=\"results-area\">\n                <p class=\"results-message\">${resultsMessage}</p>\n                <div class=\"loading-area\" >\n                    <p class=\"loading-message\">${loadingMessage}</p>\n                    <div class=\"loading-gif\">${loadingGif}</div>\n                </div>\n                <ul class=\"book-list\"></ul>\n            </div>`\n        );\n    },\n    postRender () {\n        if (this.props.booksLoaded) {\n            this.props.books.forEach(bookObj => {\n                this.tree.$('.book-list').appendChild(\n                    new _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({book: bookObj}).render()\n                );\n            });    \n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/BookList/BookList.js?");

/***/ }),

/***/ "./src/js/components/HomePage/HomePage.js":
/*!************************************************!*\
  !*** ./src/js/components/HomePage/HomePage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n/* harmony import */ var _BookList_BookList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BookList/BookList */ \"./src/js/components/BookList/BookList.js\");\n/* harmony import */ var _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchForm/SearchForm */ \"./src/js/components/SearchForm/SearchForm.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ \"./src/js/store.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        return (\n            `<div class=\"home-page\">\n                <div class=\"header\">\n                    <h1>Welcome to The Library</h1>\n                    <i>Shhh!</i>\n                </div>\n                <div class=\"page-body\">\n                </div>\n            </div>`\n        );\n    },\n    postRender () {\n        const appState = _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState();\n\n        this.tree.querySelector('.page-body')\n            .appendChild(\n                new _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render()\n            ).parentNode\n            .appendChild(\n                new _BookList_BookList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().render()\n            );\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/js/components/SearchForm/SearchForm.js":
/*!****************************************************!*\
  !*** ./src/js/components/SearchForm/SearchForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/createComponent */ \"./src/js/lib/createComponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    template () {\n        const errorMessage = this.props.error \n            ? 'Please enter a search term.'\n            : '';\n            \n        const errorClass = this.props.error ? 'error' : '';\n\n        return (\n            `<div class=\"search-area\">\n                <h3>Search our catalog</h3>\n                <form class=\"search-form\">\n                    <input \n                        class=\"search-input ${errorClass}\" \n                        id=\"searchInput\" \n                        name=\"searchInput\" \n                        placeholder=\"Enter a search term\" />\n                    <button type=\"submit\">Go</button>\n                </form>\n                <p class=\"error-message\">${errorMessage}</p>\n            </div>`\n        );\n    },\n\n    events: {\n        '.search-form submit': function(e){\n            e.preventDefault();\n            const searchTerm = this.tree.$('#searchInput').value\n            if (!searchTerm) {\n                this.props.onInvalidSubmission();\n            }\n            else {\n                this.props.onSubmit(searchTerm);\n            }\n        }\n    },\n}));\n\n\n//# sourceURL=webpack:///./src/js/components/SearchForm/SearchForm.js?");

/***/ }),

/***/ "./src/js/lib/createComponent.js":
/*!***************************************!*\
  !*** ./src/js/lib/createComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst parser = new DOMParser();\n\nconst createComponent = (initObj) => {\n    if (typeof initObj.template !== 'function') {\n        throw new Error(`a component must be initialized with a template \nfunction that returns an html string`);\n    }\n    const Component = function (props) {\n        // defaults/stubs\n        this.events = {};\n        this.postRender = () => {};\n        this.init = () => {};\n\n        Object.assign(this, initObj);\n        this.props = props || {};\n        this.init();\n    };\n    Component.prototype = {\n        assignEventHandlers() {\n            Object.keys(this.events).map(selectorAndTrigger => {\n                const [selector, trigger] = selectorAndTrigger.split(' ');\n                const handler = this.events[selectorAndTrigger];\n                this.tree.querySelector(selector).addEventListener(trigger, handler.bind(this));\n            });\n        },\n        render () {\n            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];\n            this.tree.$ = ((sel) => this.tree.querySelector(sel)).bind(this);\n            this.tree.$$ = ((sel) => this.tree.querySelectorAll(sel)).bind(this);\n\n            this.assignEventHandlers();\n            this.postRender();\n            return this.tree;\n        },\n        mount (el) {\n            el.innerHTML = '';\n            el.appendChild(this.render());\n        }\n    };\n    return Component;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent);\n\n\n//# sourceURL=webpack:///./src/js/lib/createComponent.js?");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/*! exports provided: updateStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStore\", function() { return updateStore; });\nconst initalState = {\n    books: [],\n    booksLoaded: false,\n    booksLoading: false,\n    formInvalid: false\n};\n\nconst store = {\n    events: {},\n    data: initalState\n};\n\nstore.get = attr => store.data[attr];\n\nstore.getState = () => store.data;\n\nstore.set = obj => {\n    store.data = Object.assign(store.data, obj);\n    store.trigger('update');\n};\n\nstore.on = (event, callback) => {\n    const callbacks = store.events[event];\n    store.events[event] = callbacks ? [...callbacks, callback] : [callback];\n};\n\nstore.trigger = (event, ...args) => {\n    store.events[event].forEach(handler => handler(...args));\n};\n\nconst updateStore = store.set.bind(store);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack:///./src/js/store.js?");

/***/ })

/******/ });