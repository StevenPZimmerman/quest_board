/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/db/models/index.js":
/*!***************************************!*\
  !*** ./src/server/db/models/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\"); // const xxx = require(\"../queries/xxx\")\n\n\nconst mysqlConfig = {\n  host: \"localhost\",\n  user: \"root\",\n  password: \"password\",\n  database: \"questboard\"\n};\nconst Connection = mysql.createPool(mysqlConfig);\n\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    Connection.query(query, values, (err, results) => {\n      if (err) reject(err);\n      resolve(results);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Query);\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/models/index.js?");

/***/ }),

/***/ "./src/server/db/queries/get.js":
/*!**************************************!*\
  !*** ./src/server/db/queries/get.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getOne\": () => (/* binding */ getOne),\n/* harmony export */   \"getActiveQuests\": () => (/* binding */ getActiveQuests),\n/* harmony export */   \"getCharacterStats\": () => (/* binding */ getCharacterStats),\n/* harmony export */   \"getCharacterShop\": () => (/* binding */ getCharacterShop)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\n\nconst getAll = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests\");\n};\n\nconst getOne = async id => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests WHERE idquests = ?\", [id]);\n};\n\nconst getActiveQuests = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests WHERE Active = 1\");\n};\n\nconst getCharacterStats = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM family WHERE active = 1\");\n};\n\nconst getCharacterShop = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM neal_family_inventory\");\n};\n\nconst example = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE something FROM table WHERE something; UPDATE something FROM sametable WHERE something else\");\n};\n\n\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/queries/get.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  getAll,\n  getActiveQuests,\n  getCharacterStats,\n  getCharacterShop\n} = __webpack_require__(/*! ../db/queries/get */ \"./src/server/db/queries/get.js\");\n\nconst router = express.Router();\nrouter.get(\"/quests\", async (req, res, next) => {\n  try {\n    let data = await getActiveQuests();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/stats\", async (req, res, next) => {\n  try {\n    let data = await getCharacterStats();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/shop\", async (req, res, next) => {\n  try {\n    let data = await getCharacterShop();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_template/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"public\"));\napp.use(_routes__WEBPACK_IMPORTED_MODULE_3__.default);\napp.use(\"*\", (req, res, next) => {\n  try {\n    res.sendFile((0,path__WEBPACK_IMPORTED_MODULE_2__.join)(__dirname, \"../public/index.html\"));\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((req, res, next) => {\n  try {\n    res.status(404).json(\"Not Found\");\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((err, req, res, next) => {\n  console.log(err.message);\n  res.status(500).json({\n    error: err.message,\n    msg: \"Something went wrong :(\"\n  });\n});\nconst port = 3001;\napp.listen(port, () => console.log('Server listening on port 3001...'));\n\n//# sourceURL=webpack://fullstack_template/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;