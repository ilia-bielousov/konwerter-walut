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

/***/ "./app/assets/js/modules/date.js":
/*!***************************************!*\
  !*** ./app/assets/js/modules/date.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DateFunc = () => {\n  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата \n  const today = new Date();\n  let year = today.getFullYear();\n  let month = today.getMonth() + 1;\n  let stringOfDate = '';\n  if (month < 10) {\n    month = `0${month}`;\n    stringOfDate = `${year}-${month}`;\n  }\n  currentDate.value = stringOfDate;\n  currentDate.max = stringOfDate;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFunc);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/date.js?");

/***/ }),

/***/ "./app/assets/js/modules/flags.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/flags.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Flags = () => {\n  const flagImage = document.querySelectorAll('.konwerter__flag i');\n  const select = document.querySelectorAll('.konwerter__name-walute');\n  const waluteName = document.querySelectorAll('.konwerter__walute span');\n  const offenUsed = document.querySelectorAll('.konwerter__offen-used span');\n  const selectOptions = document.querySelectorAll('.konwerter__name-walute');\n  const flags = {\n    \"USD\": \"US\",\n    \"AUD\": \"AU\",\n    \"CAD\": \"CA\",\n    \"EUR\": \"EU\",\n    \"HUF\": \"HU\",\n    \"CHF\": \"CH\",\n    \"GBP\": \"GB\",\n    \"JPY\": \"JP\",\n    \"CZK\": \"CZ\",\n    \"DKK\": \"DK\",\n    \"NOK\": \"NO\",\n    \"SEK\": \"SE\",\n    \"PLN\": \"PL\"\n  };\n  offenUsed.forEach((item, i) => {\n    item.addEventListener('click', event => {\n      const str = event.target.textContent.trim();\n      const doIt = num => {\n        waluteName[num].innerHTML = str;\n        flagImage[num].classList.value = `flag-${flags[str]}`;\n        selectOptions[num].childNodes.forEach(child => {\n          if (child.value == str) {\n            child.selected = true;\n          }\n        });\n      };\n      if (i < 4) {\n        doIt(0);\n      } else {\n        doIt(1);\n      }\n    });\n  });\n  select.forEach((item, i) => {\n    item.addEventListener('change', event => {\n      const str = event.target.value;\n      waluteName[i].innerHTML = event.target.value;\n      flagImage[i].classList.value = `flag-${flags[str]}`;\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flags);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/flags.js?");

/***/ }),

/***/ "./app/assets/js/modules/grafic.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/grafic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Grafic = () => {\n  google.charts.load('current', {\n    'packages': ['corechart']\n  });\n  google.charts.setOnLoadCallback(drawChart);\n  function drawChart() {\n    var data = google.visualization.arrayToDataTable([['Data', 'Sales', 'Expenses'], ['2022-10-22', 1000, 400], ['2022-10-23', 1170, 460], ['2022-10-24', 660, 1120], ['2022-10-25', 1030, 5140], ['2022-10-25', 1030, 1540], ['2022-10-25', 1030, 240], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 340], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 140], ['2022-10-25', 1030, 3240], ['2022-10-25', 1030, 240], ['2022-10-25', 1030, 540]]);\n    var options = {\n      title: 'Company Performance',\n      curveType: 'function',\n      legend: {\n        position: 'bottom'\n      },\n      hAxis: {\n        textPosition: 'none'\n      }\n    };\n    var chart = new google.visualization.LineChart(document.getElementById('grafic'));\n    chart.draw(data, options);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grafic);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/grafic.js?");

/***/ }),

/***/ "./app/assets/js/modules/request.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/request.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Request = function () {\n  let current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'C';\n  let baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'http://api.nbp.pl/api/exchangerates/tables';\n  let startData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  let endDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  getResource(`${baseUrl}/${current}/${startData}/${endDate}`).then(response => {\n    return response.json();\n  }).then(data => {\n    console.log(data);\n  }).catch(err => console.error(err));\n  async function getResource(url) {\n    const res = await fetch(`${url}`);\n    if (!res.ok) {\n      throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n    }\n    return res;\n  }\n  ;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Request);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/request.js?");

/***/ }),

/***/ "./app/assets/js/script.js":
/*!*********************************!*\
  !*** ./app/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/request */ \"./app/assets/js/modules/request.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/grafic */ \"./app/assets/js/modules/grafic.js\");\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/flags */ \"./app/assets/js/modules/flags.js\");\n/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/date */ \"./app/assets/js/modules/date.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  'use strict';\n\n  (0,_modules_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_grafic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_flags__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

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