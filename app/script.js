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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Components {\n  constructor() {\n    this.currentDate = document.querySelector('.konwerter__choose-day input');\n    this.flagImages = document.querySelectorAll('.konwerter__flag i');\n    this.waluteName = document.querySelectorAll('.konwerter__walute span');\n    this.offenUsed = document.querySelectorAll('.konwerter__offen-used span');\n    this.select = document.querySelectorAll('.konwerter__name-walute');\n    this.flags = {\n      \"USD\": \"US\",\n      \"AUD\": \"AU\",\n      \"CAD\": \"CA\",\n      \"EUR\": \"EU\",\n      \"HUF\": \"HU\",\n      \"CHF\": \"CH\",\n      \"GBP\": \"GB\",\n      \"JPY\": \"JP\",\n      \"CZK\": \"CZ\",\n      \"DKK\": \"DK\",\n      \"NOK\": \"NO\",\n      \"SEK\": \"SE\",\n      \"PLN\": \"PL\"\n    };\n  }\n  giveDate() {\n    Date.prototype.daysInMonth = function () {\n      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();\n    };\n    this.currentMouth = this.currentDate.value;\n    this.currentMouth = this.currentMouth.slice(0, 7);\n    this.daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();\n    if (new Date().getMonth() == new Date(this.currentMouth).getMonth()) {\n      this.daysInMouth = new Date().getDate();\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/components.js?");

/***/ }),

/***/ "./app/assets/js/modules/convert.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/convert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\n\nclass Convert extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    this.currentDate.addEventListener('change', () => {\n      this.giveDate();\n      const data = new _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`http://api.nbp.pl/api/exchangerates/tables/C/${this.currentMouth}-01/${this.currentMouth}-${this.daysInMouth}`);\n      data.getResource().then(response => {\n        return response.json();\n      }).then(data => {\n        let t = this.currentDate.value;\n        data.forEach((item, i) => {});\n      });\n    });\n\n    // let arrayOfValues = [];\n\n    // for (let i of data) {\n    //   for (let current of i.rates) {\n    //     if (current['code'] == 'USD') {\n    //       arrayOfValues.push(current.bid);\n    //     }\n    //   }\n    // }\n\n    // inputsValue.forEach((input, i) => {\n    //   input.addEventListener('input', function (e) {\n    //     e.target.value = e.target.value.replace(/\\D/g, '');\n\n    //   });\n    // });\n\n    // console.log(this.data);\n  }\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Convert);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/convert.js?");

/***/ }),

/***/ "./app/assets/js/modules/dateClass.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/dateClass.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n\nclass DateClass extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    const year = new Date().getFullYear();\n    let month = new Date().getMonth() + 1;\n    let day = new Date().getDate();\n    if (month < 10) {\n      month = `0${month}`;\n    }\n    if (day < 10) {\n      day = `0${day}`;\n    }\n    this.currentDate.value = `${year}-${month}-${day}`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateClass);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/dateClass.js?");

/***/ }),

/***/ "./app/assets/js/modules/flags.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/flags.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\n\nclass Flags extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    this.offenUsed.forEach((item, i) => {\n      item.addEventListener('click', event => {\n        const str = event.target.textContent.trim();\n        const doIt = num => {\n          this.waluteName[num].innerHTML = str;\n          this.flagImages[num].classList.value = `flag-${this.flags[str]}`;\n          this.select[num].childNodes.forEach(child => {\n            if (child.value == str) {\n              child.selected = true;\n            }\n          });\n        };\n        if (i < 4) {\n          doIt(0);\n        } else {\n          doIt(1);\n        }\n      });\n    });\n    this.select.forEach((item, i) => {\n      item.addEventListener('change', event => {\n        const str = event.target.value;\n        const value = new _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`http://api.nbp.pl/api/exchangerates/rates/C/${event.target.value}/`);\n        this.waluteName[i].textContent = event.target.value;\n        this.flagImages[i].classList.value = `flag-${this.flags[str]}`;\n        value.getResource().then(response => {\n          return response.json();\n        }).then(data => {\n          console.log(data);\n        });\n      });\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flags);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/flags.js?");

/***/ }),

/***/ "./app/assets/js/modules/grafic.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/grafic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\n\nclass Grafic extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  classLogic() {\n    this.currentDate.addEventListener('change', () => {\n      this.giveDate();\n      this.reqForGrafic();\n    });\n  }\n  createData(data) {\n    let outData = [];\n    let waluteValueIndex = undefined;\n    for (let i = 0; i < data[0].rates.length; i++) {\n      if (this.waluteName[0].textContent == data[i].rates[i]['code']) {\n        waluteValueIndex = i;\n        break;\n      }\n    }\n    for (let i = 0; i < data.length; i++) {\n      for (let j = 0; j < 2;) {\n        let temp = [];\n        temp.push(data[i].effectiveDate);\n        j += 1;\n        temp.push(data[i].rates[waluteValueIndex].bid);\n        outData.push(temp);\n        j += 1;\n      }\n    }\n    outData.unshift(['Data', 'kurs']);\n    return outData;\n  }\n  createGrafic(data) {\n    google.charts.load('current', {\n      'packages': ['corechart']\n    });\n    google.charts.setOnLoadCallback(drawChart);\n    const outData = this.createData(data);\n    function drawChart() {\n      var data = google.visualization.arrayToDataTable(outData);\n      var options = {\n        title: '',\n        curveType: 'function',\n        legend: {\n          position: 'bottom'\n        },\n        hAxis: {\n          textPosition: 'none'\n        }\n      };\n      var chart = new google.visualization.LineChart(document.getElementById('grafic'));\n      chart.draw(data, options);\n    }\n  }\n  reqForGrafic() {\n    const grafic = new _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`http://api.nbp.pl/api/exchangerates/tables/C/${this.currentMouth}-01/${this.currentMouth}-${this.daysInMouth}`);\n    grafic.getResource().then(response => {\n      return response.json();\n    }).then(data => {\n      this.createGrafic(data);\n    });\n  }\n  firstBuild() {\n    this.giveDate();\n    this.reqForGrafic();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grafic);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/grafic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/flags */ \"./app/assets/js/modules/flags.js\");\n/* harmony import */ var _modules_dateClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dateClass */ \"./app/assets/js/modules/dateClass.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/grafic */ \"./app/assets/js/modules/grafic.js\");\n/* harmony import */ var _modules_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/convert */ \"./app/assets/js/modules/convert.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  'use strict';\n\n  const flags = new _modules_flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const dateClass = new _modules_dateClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const grafic = new _modules_grafic__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const convert = new _modules_convert__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  flags.classLogic();\n  dateClass.classLogic();\n  grafic.firstBuild();\n  grafic.classLogic();\n  convert.classLogic();\n});\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

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