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

/***/ "./src/js/components/HomePage.js":
/*!***************************************!*\
  !*** ./src/js/components/HomePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/justinrichards/dev/job_seeking/8th-light/google-books-search/src/js/components/HomePage.js'\");\n\n//# sourceURL=webpack:///./src/js/components/HomePage.js?");

/***/ })

/******/ });