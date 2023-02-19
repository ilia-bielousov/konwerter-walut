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

/***/ "./app/assets/js/modules/components.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/components.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Components {\n  constructor() {\n    this.currentDate = document.querySelector('.konwerter__choose-day input');\n    this.flagImages = document.querySelectorAll('.konwerter__flag i');\n    this.waluteName = document.querySelectorAll('.konwerter__walute span');\n    this.offenUsed = document.querySelectorAll('.konwerter__offen-used span');\n    this.select = document.querySelectorAll('.konwerter__name-walute');\n    this.flags = {\n      \"USD\": \"US\",\n      \"AUD\": \"AU\",\n      \"CAD\": \"CA\",\n      \"EUR\": \"EU\",\n      \"HUF\": \"HU\",\n      \"CHF\": \"CH\",\n      \"GBP\": \"GB\",\n      \"JPY\": \"JP\",\n      \"CZK\": \"CZ\",\n      \"DKK\": \"DK\",\n      \"NOK\": \"NO\",\n      \"SEK\": \"SE\",\n      \"PLN\": \"PL\"\n    };\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/components.js?");

/***/ }),

/***/ "./app/assets/js/modules/dateClass.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/dateClass.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n\nclass DateClass extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    let stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`;\n    if (new Date().getMonth() + 1 < 10 || new Date().getDate() < 10) {\n      stringOfDate.replace(/-/, '-0');\n    }\n    this.currentDate.value = stringOfDate;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateClass);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/dateClass.js?");

/***/ }),

/***/ "./app/assets/js/modules/flags.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/flags.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\n\nclass Flags extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    this.offenUsed.forEach((item, i) => {\n      item.addEventListener('click', event => {\n        const str = event.target.textContent.trim();\n        const doIt = num => {\n          this.waluteName[num].innerHTML = str;\n          this.flagImages[num].classList.value = `flag-${flags[str]}`;\n          this.select[num].childNodes.forEach(child => {\n            if (child.value == str) {\n              child.selected = true;\n            }\n          });\n        };\n        if (i < 4) {\n          doIt(0);\n        } else {\n          doIt(1);\n        }\n      });\n    });\n    this.select.forEach((item, i) => {\n      item.addEventListener('change', event => {\n        const str = event.target.value;\n        const value = new _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`http://api.nbp.pl/api/exchangerates/rates/C/${event.target.value}/`);\n        this.waluteName[i].textContent = event.target.value;\n        this.flagImages[i].classList.value = `flag-${this.flags[str]}`;\n        value.getResource().then(response => {\n          return response.json();\n        }).then(data => {\n          console.log(data);\n        });\n      });\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flags);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/flags.js?");

/***/ }),

/***/ "./app/assets/js/modules/grafic.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/grafic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\n\nclass Grafic extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    Date.prototype.daysInMonth = function () {\n      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();\n    };\n    let currentMouth = this.currentDate.value;\n    currentMouth = currentMouth.slice(0, 7);\n    let daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();\n    this.currentDate.addEventListener('change', () => {\n      currentMouth = this.currentDate.value;\n      currentMouth = currentMouth.slice(0, 7);\n      daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();\n      if (new Date().getMonth() == new Date(currentMouth).getMonth()) {\n        daysInMouth = new Date().getDate();\n      }\n      const grafic = new _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`http://api.nbp.pl/api/exchangerates/tables/C/${currentMouth}-01/${currentMouth}-${daysInMouth}`);\n      grafic.getResource().then(response => {\n        return response.json();\n      }).then(data => {\n        console.log(data);\n        createGrafic(data);\n      });\n    });\n    function createGrafic(data) {\n      google.charts.load('current', {\n        'packages': ['corechart']\n      });\n      google.charts.setOnLoadCallback(drawChart);\n      let outData = [];\n      for (let i = 0; i < data.length; i++) {\n        for (let j = 0; j < 2;) {\n          let temp = [];\n          temp.push(data[i].effectiveDate);\n          j += 1;\n          temp.push(data[i].rates[0].bid);\n          outData.push(temp);\n          j += 1;\n        }\n      }\n      outData.unshift(['Data', 'kurs']);\n      function drawChart() {\n        var data = google.visualization.arrayToDataTable(outData);\n        var options = {\n          title: '',\n          curveType: 'function',\n          legend: {\n            position: 'bottom'\n          },\n          hAxis: {\n            textPosition: 'none'\n          }\n        };\n        var chart = new google.visualization.LineChart(document.getElementById('grafic'));\n        chart.draw(data, options);\n      }\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grafic);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/grafic.js?");

/***/ }),

/***/ "./app/assets/js/modules/request.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/request.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Request {\n  constructor(url) {\n    this.url = url;\n  }\n  async getResource() {\n    const res = await fetch(`${this.url}`);\n    if (!res.ok) {\n      throw new Error(`Could not fetch ${this.url}, status: ${res.status}`);\n    }\n    return res;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Request);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/request.js?");

/***/ }),

/***/ "./app/assets/js/script.js":
/*!*********************************!*\
  !*** ./app/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/flags */ \"./app/assets/js/modules/flags.js\");\n/* harmony import */ var _modules_dateClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dateClass */ \"./app/assets/js/modules/dateClass.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/grafic */ \"./app/assets/js/modules/grafic.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  'use strict';\n\n  new _modules_flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().classLogic();\n  new _modules_dateClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().classLogic();\n  new _modules_grafic__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().classLogic();\n});\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

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