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

/***/ "./app/assets/js/modules/dateFunc.js":
/*!*******************************************!*\
  !*** ./app/assets/js/modules/dateFunc.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DateFunc = () => {\n  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата \n\n  let stringOfDate = '';\n  if (new Date().getMonth() < 9) {\n    stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDay()}`;\n  } else {\n    stringOfDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`;\n  }\n  if (new Date().getDay() < 10) {\n    stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDay()}`;\n  } else {\n    stringOfDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`;\n  }\n  currentDate.value = stringOfDate;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFunc);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/dateFunc.js?");

/***/ }),

/***/ "./app/assets/js/modules/flags.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/flags.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\nconst Flags = () => {\n  const flagImage = document.querySelectorAll('.konwerter__flag i');\n  const select = document.querySelectorAll('.konwerter__name-walute');\n  const waluteName = document.querySelectorAll('.konwerter__walute span');\n  const offenUsed = document.querySelectorAll('.konwerter__offen-used span');\n  const selectOptions = document.querySelectorAll('.konwerter__name-walute');\n  const flags = {\n    \"USD\": \"US\",\n    \"AUD\": \"AU\",\n    \"CAD\": \"CA\",\n    \"EUR\": \"EU\",\n    \"HUF\": \"HU\",\n    \"CHF\": \"CH\",\n    \"GBP\": \"GB\",\n    \"JPY\": \"JP\",\n    \"CZK\": \"CZ\",\n    \"DKK\": \"DK\",\n    \"NOK\": \"NO\",\n    \"SEK\": \"SE\",\n    \"PLN\": \"PL\"\n  };\n  offenUsed.forEach((item, i) => {\n    item.addEventListener('click', event => {\n      const str = event.target.textContent.trim();\n      const doIt = num => {\n        waluteName[num].innerHTML = str;\n        flagImage[num].classList.value = `flag-${flags[str]}`;\n        selectOptions[num].childNodes.forEach(child => {\n          if (child.value == str) {\n            child.selected = true;\n          }\n        });\n      };\n      if (i < 4) {\n        doIt(0);\n      } else {\n        doIt(1);\n      }\n    });\n  });\n  select.forEach((item, i) => {\n    item.addEventListener('change', event => {\n      const str = event.target.value;\n      const temp = waluteName[i].textContent;\n      const value = new _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`http://api.nbp.pl/api/exchangerates/rates/C/${event.target.value}/`);\n      waluteName[i].textContent = event.target.value;\n      flagImage[i].classList.value = `flag-${flags[str]}`;\n      value.getResource().then(response => {\n        return response.json();\n      }).then(data => {\n        console.log(data);\n      });\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flags);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/flags.js?");

/***/ }),

/***/ "./app/assets/js/modules/grafic.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/grafic.js ***!
  \*****************************************/
/***/ (() => {

eval("class Grafic {\n  constructor() {}\n}\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/grafic.js?");

/***/ }),

/***/ "./app/assets/js/modules/request.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/request.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Request {\n  constructor(url) {\n    this.url = url;\n  }\n  async getResource() {\n    const res = await fetch(`${this.url}`);\n    if (!res.ok) {\n      throw new Error(`Could not fetch ${this.url}, status: ${res.status}`);\n    }\n    return res;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Request);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/request.js?");

/***/ }),

/***/ "./app/assets/js/script.js":
/*!*********************************!*\
  !*** ./app/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/flags */ \"./app/assets/js/modules/flags.js\");\n/* harmony import */ var _modules_dateFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dateFunc */ \"./app/assets/js/modules/dateFunc.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/grafic */ \"./app/assets/js/modules/grafic.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_grafic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  'use strict';\n\n  (0,_modules_flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_dateFunc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  _modules_grafic__WEBPACK_IMPORTED_MODULE_2___default()();\n});\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/js/script.js");
/******/ 	
/******/ })()
;