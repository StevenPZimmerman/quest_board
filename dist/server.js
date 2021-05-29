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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getOne\": () => (/* binding */ getOne),\n/* harmony export */   \"getActiveQuests\": () => (/* binding */ getActiveQuests),\n/* harmony export */   \"getInactiveQuests\": () => (/* binding */ getInactiveQuests),\n/* harmony export */   \"getCharacterStats\": () => (/* binding */ getCharacterStats),\n/* harmony export */   \"getCharacterShop\": () => (/* binding */ getCharacterShop),\n/* harmony export */   \"getCharacterNames\": () => (/* binding */ getCharacterNames)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\n\nconst getAll = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests\");\n};\n\nconst getOne = async ID => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests WHERE idquests = ?\", [ID]);\n};\n\nconst getActiveQuests = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests WHERE Active = 1\");\n};\n\nconst getInactiveQuests = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM quests WHERE Active = 0\");\n};\n\nconst getCharacterStats = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM family WHERE active = 1\");\n};\n\nconst getCharacterShop = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM neal_family_inventory\");\n};\n\nconst getCharacterNames = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT CharacterName FROM family\");\n};\n\nconst example = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE something FROM table WHERE something; UPDATE something FROM sametable WHERE something else\");\n};\n\n\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/queries/get.js?");

/***/ }),

/***/ "./src/server/db/queries/update.js":
/*!*****************************************!*\
  !*** ./src/server/db/queries/update.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAllQuestsActive\": () => (/* binding */ makeAllQuestsActive),\n/* harmony export */   \"makeAllQuestsInactive\": () => (/* binding */ makeAllQuestsInactive),\n/* harmony export */   \"makeQuestActive\": () => (/* binding */ makeQuestActive),\n/* harmony export */   \"makeQuestInactive\": () => (/* binding */ makeQuestInactive),\n/* harmony export */   \"purchaseItem\": () => (/* binding */ purchaseItem),\n/* harmony export */   \"purchaseItemCost\": () => (/* binding */ purchaseItemCost),\n/* harmony export */   \"removeArmor\": () => (/* binding */ removeArmor),\n/* harmony export */   \"removeWeapon\": () => (/* binding */ removeWeapon),\n/* harmony export */   \"equipItem\": () => (/* binding */ equipItem),\n/* harmony export */   \"questComplete\": () => (/* binding */ questComplete),\n/* harmony export */   \"questCompleteBounty\": () => (/* binding */ questCompleteBounty),\n/* harmony export */   \"questCompleteReward\": () => (/* binding */ questCompleteReward),\n/* harmony export */   \"levelUpHP\": () => (/* binding */ levelUpHP)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\n\nconst makeAllQuestsActive = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE Quests SET Active = 1 WHERE Active = 0 \");\n};\n\nconst makeAllQuestsInactive = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE Quests SET Active = 0 WHERE Active = 1 \");\n};\n\nconst makeQuestActive = async ID => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE Quests SET Active = 1 WHERE QuestID = ?\", [ID]);\n};\n\nconst makeQuestInactive = async ID => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE Quests SET Active = 0 WHERE QuestID = ?\", [ID]);\n};\n\nconst purchaseItem = async ID => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE neal_family_inventory SET Equipped = 1 WHERE InventoryID = ?\", [ID]);\n};\n\nconst purchaseItemCost = async Price => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE family SET Currency = Currency - ? WHERE Active = 1\", [Price]);\n};\n\nconst removeArmor = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE neal_family_inventory SET Equipped = 1 WHERE Equipped = 2 AND Type = 'Armor'\");\n};\n\nconst removeWeapon = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE neal_family_inventory SET Equipped = 1 WHERE Equipped = 2 AND Type = 'Weapon'\");\n};\n\nconst equipItem = async ID => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE neal_family_inventory SET Equipped = 2 WHERE InventoryID = ?\", [ID]);\n};\n\nconst questComplete = async (Bounty, Reward) => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE family SET Currency = Currency + ? WHERE Active = 1; UPDATE family SET XP = XP + ? WHERE Active = 1\", [Bounty, Reward]);\n};\n\nconst questCompleteBounty = async Bounty => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE family SET Currency = Currency + ? WHERE Active = 1;\", [Bounty]);\n};\n\nconst questCompleteReward = async Reward => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE family SET XP = XP + ? WHERE Active = 1\", [Reward]);\n};\n\nconst levelUpHP = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE family SET HP = HP + 4 WHERE Active = 1\");\n};\n\n\n\n//# sourceURL=webpack://fullstack_template/./src/server/db/queries/update.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  getAll,\n  getActiveQuests,\n  getInactiveQuests,\n  getCharacterStats,\n  getCharacterShop,\n  getCharacterNames\n} = __webpack_require__(/*! ../db/queries/get */ \"./src/server/db/queries/get.js\");\n\nconst {\n  makeQuestActive,\n  makeQuestInactive,\n  makeAllQuestsActive,\n  makeAllQuestsInactive,\n  purchaseItem,\n  purchaseItemCost,\n  removeArmor,\n  removeWeapon,\n  equipItem,\n  questComplete,\n  questCompleteBounty,\n  questCompleteReward,\n  levelUpHP\n} = __webpack_require__(/*! ../db/queries/update */ \"./src/server/db/queries/update.js\");\n\nconst router = express.Router();\nrouter.get(\"/quests\", async (req, res, next) => {\n  try {\n    let data = await getActiveQuests();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/inactiveQuests\", async (req, res, next) => {\n  try {\n    let data = await getInactiveQuests();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/quests/:id\", async (req, res, next) => {\n  try {\n    let data = await getOneQuest();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/stats\", async (req, res, next) => {\n  try {\n    let data = await getCharacterStats();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/shop\", async (req, res, next) => {\n  try {\n    let data = await getCharacterShop();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/characters\", async (req, res, next) => {\n  try {\n    let data = await getCharacterNames();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/questActive/:ID\", async (req, res, next) => {\n  try {\n    let {\n      ID\n    } = req.params;\n    let data = await makeQuestActive(ID);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/questInactive/:ID\", async (req, res, next) => {\n  try {\n    let {\n      ID\n    } = req.params;\n    let data = await makeQuestInactive(ID);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/allQuestsActive\", async (req, res, next) => {\n  try {\n    let data = await makeAllQuestsActive();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/allQuestsInactive\", async (req, res, next) => {\n  try {\n    let data = await makeAllQuestsInactive();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/purchaseItem/:ID\", async (req, res, next) => {\n  try {\n    let {\n      ID\n    } = req.params;\n    let data = await purchaseItem(ID);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/purchaseItemCost/:Price\", async (req, res, next) => {\n  try {\n    let {\n      Price\n    } = req.params;\n    let data = await purchaseItemCost(Price);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/removeArmor\", async (req, res, next) => {\n  try {\n    let data = await removeArmor();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/removeWeapon\", async (req, res, next) => {\n  try {\n    let data = await removeWeapon();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/equipItem/:ID\", async (req, res, next) => {\n  try {\n    let {\n      ID\n    } = req.params;\n    let data = await equipItem(ID);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/questComplete/:Bounty:Reward\", async (req, res, next) => {\n  try {\n    let {\n      Bounty,\n      Reward\n    } = req.params;\n    let data = await questComplete(Bounty, Reward);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/questCompleteBounty/:Bounty\", async (req, res, next) => {\n  try {\n    let {\n      Bounty\n    } = req.params;\n    let data = await questCompleteBounty(Bounty);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/questCompleteReward/:Reward\", async (req, res, next) => {\n  try {\n    let {\n      Reward\n    } = req.params;\n    let data = await questCompleteReward(Reward);\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/levelUpHP\", async (req, res, next) => {\n  try {\n    let data = await levelUpHP();\n    res.json(data);\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_template/./src/server/routes/index.js?");

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