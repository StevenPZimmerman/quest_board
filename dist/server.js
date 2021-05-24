/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/db/models/index.js":
/*!***************************************!*\
  !*** ./src/server/db/models/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mysql = __webpack_require__(/*! mysql */ \"mysql\"); // const xxx = require(\"../queries/xxx\")\n\n\nconst mysqlConfig = {\n  host: \"localhost\",\n  user: \"root\",\n  password: \"password\",\n  database: \"questboard\"\n};\nconst Connection = mysql.createPool(mysqlConfig);\n\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    Connection.query(query, values, (err, results) => {\n      if (err) reject(err);\n      resolve(results);\n    });\n  });\n};\n\nmodule.exports = {\n  Query\n};\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/models/index.js?");

/***/ }),

/***/ "./src/server/db/queries/get.js":
/*!**************************************!*\
  !*** ./src/server/db/queries/get.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Query\n} = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\nconst getAll = async () => {\n  return Query(\"SELECT * FROM quests\");\n};\n\nconst getOne = async id => {\n  return Query(\"SELECT * FROM employees WHERE idquests = ?\", [id]);\n};\n\nconst getActiveQuests = async () => {\n  return Query(\"SELECT * FROM quests WHERE Active = 1\");\n};\n\nmodule.exports = {\n  getAll,\n  getOne,\n  getActiveQuests\n};\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/queries/get.js?");

/***/ }),

/***/ "./src/server/db/routes/index.js":
/*!***************************************!*\
  !*** ./src/server/db/routes/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  getAll\n} = __webpack_require__(/*! ../queries/get */ \"./src/server/db/queries/get.js\");\n\nconst router = express.Router();\nrouter.get(\"/quests\", async (req, res, next) => {\n  try {\n    let data = await getAll();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nmodule.exports = {\n  router\n};\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/routes/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nconst {\n  join\n} = __webpack_require__(/*! path */ \"path\");\n\nconst {\n  router\n} = __webpack_require__(/*! ../server/db/routes */ \"./src/server/db/routes/index.js\");\n\nconst app = express();\napp.use(express.json());\napp.use(morgan(\"dev\"));\napp.use(router); // app.use(\"/api/v1\", apiRouter);\n// app.use(express.static(\"public\")); \n// app.use(\"*\", (req, res, next) => {\n//     try {\n//       res.sendFile(join(__dirname, \"../public/index.html\"));\n//     } catch (error) {\n//       next(error);\n//     }\n//   });\n\napp.use(\"*\", (req, res, next) => {\n  try {\n    res.sendFile(join(__dirname, \"../public/index.html\"));\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((req, res, next) => {\n  try {\n    res.status(404).json(\"Not Found\");\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((err, req, res, next) => {\n  console.log(err.message);\n  res.status(500).json({\n    error: err.message,\n    msg: \"Something went wrong :(\"\n  });\n});\nconst port = 3001;\napp.listen(port, () => console.log('Server listening on port 3001...'));\n\n//# sourceURL=webpack://fullstack_template/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;