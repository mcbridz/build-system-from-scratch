/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetodo_list_browserify"]("main",{

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n // import yo from 'yo-yo'\n// const yo = require('yo-yo')\n\nmodule.exports = function Hello(props) {\n  // return yo`<h1>Hello, ${name}!</h1>`\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Hello, \", props.name);\n};\n\n//# sourceURL=webpack://todo-list-browserify/./src/hello.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello */ \"./src/hello.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n// const Hello = require('./hello')\n\n\n // import yo from 'yo-yo'\n// const yo = require('yo-yo')\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hello__WEBPACK_IMPORTED_MODULE_1__.default, {\n    name: \"Ben Bitdiddle\"\n  }));\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('app-container')); // const container = document.getElementById('app-container')\n// const el = Hello(\"Ben Bitdiddle\")\n// mount component to the DOM\n// container.appendChild(el)\n\n//# sourceURL=webpack://todo-list-browserify/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1aafbfac30063f944222")
/******/ })();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ (() => {
/******/ 	__webpack_require__.hmd = (module) => {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: () => {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ }
);