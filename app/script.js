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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./app/assets/js/modules/request.js\");\n\nclass Components extends _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.request = null;\n    this.waluteInputs = document.querySelectorAll('.konwerter__input-value');\n    this.currentDate = document.querySelector('.konwerter__choose-day input');\n    this.flagImages = document.querySelectorAll('.konwerter__flag i');\n    this.waluteName = document.querySelectorAll('.konwerter__walute span');\n    this.offenUsed = document.querySelectorAll('.konwerter__offen-used span');\n    this.select = document.querySelectorAll('.konwerter__name-walute');\n    this.flags = {\n      \"USD\": \"US\",\n      \"AUD\": \"AU\",\n      \"CAD\": \"CA\",\n      \"EUR\": \"EU\",\n      \"HUF\": \"HU\",\n      \"CHF\": \"CH\",\n      \"GBP\": \"GB\",\n      \"JPY\": \"JP\",\n      \"CZK\": \"CZ\",\n      \"DKK\": \"DK\",\n      \"NOK\": \"NO\",\n      \"SEK\": \"SE\",\n      \"PLN\": \"PL\"\n    };\n  }\n  async requestToAPI() {\n    const time = this.giveCurrentDate();\n    this.request = new _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);\n    let dataBase = this.request.getResource().then(response => {\n      return response.json();\n    }).then(data => {\n      return data;\n    });\n    const data_1 = await dataBase;\n    return data_1;\n  }\n  giveCurrentDate() {\n    Date.prototype.daysInMonth = function () {\n      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();\n    };\n    this.currentMouth = this.currentDate.value;\n    this.currentMouth = this.currentMouth.slice(0, 7);\n    this.daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();\n    if (new Date().getMonth() == new Date(this.currentMouth).getMonth()) {\n      this.daysInMouth = new Date().getDate();\n    }\n    return [this.currentMouth, this.daysInMouth];\n  }\n  Date() {\n    const year = new Date().getFullYear();\n    let month = new Date().getMonth() + 1;\n    let day = new Date().getDate();\n    if (month < 10) {\n      month = `0${month}`;\n    }\n    if (day < 10) {\n      day = `0${day}`;\n    }\n    this.currentDate.value = `${year}-${month}-${day}`;\n    this.currentDate.max = `${year}-${month}-${day}`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/components.js?");

/***/ }),

/***/ "./app/assets/js/modules/convert.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/convert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ \"./app/assets/js/modules/database.js\");\n\n\nclass Convert extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.data = new _database__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n  async changeDataBase() {\n    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    this.setValue(await this.requestToAPI(), value, i);\n  }\n  startSite() {\n    this.changeDataBase();\n    this.waluteInputs.forEach(item => {\n      item.value = 0;\n    });\n  }\n  classLogic() {\n    // переписать логику целого класса!!!\n    this.startSite();\n    this.currentDate.addEventListener('change', () => {\n      this.changeDataBase(+this.waluteInputs[0].value);\n    });\n    this.select.forEach((item, i) => {\n      item.addEventListener('change', () => {\n        this.changeDataBase(+this.waluteInputs[0].value);\n      });\n    });\n    this.offenUsed.forEach(item => {\n      item.addEventListener('click', () => {\n        this.changeDataBase(+this.waluteInputs[0].value);\n      });\n    });\n    this.waluteInputs.forEach((input, i) => {\n      input.addEventListener('input', e => {\n        e.target.value = e.target.value.replace(/\\D/g, '');\n        const value = +e.target.value;\n        this.changeDataBase(value, i);\n      });\n    });\n  }\n  setValue(data) {\n    let value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    let index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    let temp = undefined;\n    const dataInside = this.data.createData(data);\n    for (let i = 0; i < dataInside.length; i++) {\n      if (dataInside[i][0] == this.currentDate.value) {\n        temp = i;\n        break;\n      }\n      if (temp == 0) {\n        temp = 1;\n        break;\n      } else {\n        temp = this.data.findDate(data);\n      }\n    }\n    if (index == 0) {\n      this.waluteInputs[1].value = (value * (dataInside[temp][1] / dataInside[temp][2])).toFixed(2);\n    } else {\n      this.waluteInputs[0].value = (value * (dataInside[temp][2] / dataInside[temp][1])).toFixed(2);\n    }\n  }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Convert);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/convert.js?");

/***/ }),

/***/ "./app/assets/js/modules/database.js":
/*!*******************************************!*\
  !*** ./app/assets/js/modules/database.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n\nclass DataBase extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.ourData = undefined;\n  }\n  currentValueWalute(data, index) {\n    let numOfWalute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    const walute = this.waluteName[numOfWalute].textContent;\n    let temp = undefined;\n    for (let i = 0; i < data[index].rates.length; i++) {\n      if (walute === data[index].rates[i].code) {\n        temp = i;\n        break;\n      } else {\n        temp = -1;\n      }\n    }\n    return temp;\n  }\n  fillData(data, index) {\n    const firstWaluteNum = this.currentValueWalute(data, index);\n    const secondWaluteNum = this.currentValueWalute(data, index, 1);\n    if (firstWaluteNum == -1) {\n      for (let i = 0; i < data.length; i++) {\n        for (let j = 0; j < 2;) {\n          let temp = [];\n          temp.push(data[i].effectiveDate);\n          j += 1;\n          temp.push(1);\n          j += 1;\n          this.ourData.push(temp);\n        }\n      }\n    } else {\n      for (let i = 0; i < data.length; i++) {\n        for (let j = 0; j < 2;) {\n          let temp = [];\n          temp.push(data[i].effectiveDate);\n          j += 1;\n          temp.push(data[i].rates[firstWaluteNum].bid);\n          j += 1;\n          this.ourData.push(temp);\n        }\n      }\n    }\n    if (secondWaluteNum == -1) {\n      for (let i = 0; i < this.ourData.length; i++) {\n        this.ourData[i].push(1);\n      }\n    } else {\n      for (let i = 0; i < this.ourData.length; i++) {\n        this.ourData[i].push(data[i].rates[secondWaluteNum].bid);\n      }\n    }\n    return this.ourData;\n  }\n  findIndex(data, date) {\n    let index = undefined;\n    for (let i = 0; i < data.length; i++) {\n      if (data[i].effectiveDate == date) {\n        index = i;\n        break;\n      } else {\n        index = undefined;\n      }\n    }\n    return index;\n  }\n  findDate(data) {\n    let outDate = this.currentDate.value;\n    let index = undefined;\n    while (true) {\n      let trepl = outDate.slice(-2);\n      let t = +outDate.slice(-2) - 1;\n      if (t < 10) {\n        outDate = outDate.replace(trepl, `0${t}`);\n      } else {\n        outDate = outDate.replace(trepl, t);\n      }\n      if (t < 0) {\n        index = 0;\n        break;\n      }\n      index = this.findIndex(data, outDate);\n      if (index) {\n        break;\n      }\n    }\n    return index;\n  }\n  createData(data) {\n    this.ourData = [];\n    const index = this.findDate(data);\n    this.ourData = this.fillData(data, index);\n    this.ourData.unshift(['Data', 'kursFirstCurrency', 'kursSecondCurrency']);\n    return this.ourData;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataBase);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/database.js?");

/***/ }),

/***/ "./app/assets/js/modules/flags.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/flags.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _grafic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grafic */ \"./app/assets/js/modules/grafic.js\");\n\n\nclass Flags extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.grafic = new _grafic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n  classLogic() {\n    this.offenUsed.forEach((item, i) => {\n      item.addEventListener('click', event => {\n        const str = event.target.textContent.trim();\n        const doIt = num => {\n          this.waluteName[num].innerHTML = str;\n          this.flagImages[num].classList.value = `flag-${this.flags[str]}`;\n          this.select[num].childNodes.forEach(child => {\n            if (child.value == str) {\n              child.selected = true;\n            }\n          });\n        };\n        if (i < 4) {\n          doIt(0);\n        } else {\n          doIt(1);\n        }\n        this.grafic.showGrafic();\n      });\n    });\n    this.select.forEach((item, i) => {\n      item.addEventListener('change', event => {\n        const str = event.target.value;\n        this.waluteName[i].textContent = event.target.value;\n        this.flagImages[i].classList.value = `flag-${this.flags[str]}`;\n        this.grafic.showGrafic();\n      });\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flags);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/flags.js?");

/***/ }),

/***/ "./app/assets/js/modules/grafic.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/grafic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./app/assets/js/modules/components.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ \"./app/assets/js/modules/database.js\");\n\n\nclass Grafic extends _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.data = new _database__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n  classLogic() {\n    this.currentDate.addEventListener('change', () => {\n      this.showGrafic();\n    });\n  }\n  createGrafic(data) {\n    google.charts.load('current', {\n      'packages': ['corechart']\n    });\n    google.charts.setOnLoadCallback(drawChart);\n    const outData = this.data.createData(data);\n    let outDataTransform = [];\n    for (let i = 0; i < outData.length; i++) {\n      const t = +(outData[i][1] / outData[i][2]).toFixed(3);\n      outDataTransform[i] = [outData[i][0], t];\n    }\n    outDataTransform[0] = ['data', 'value'];\n    function drawChart() {\n      var data = google.visualization.arrayToDataTable(outDataTransform);\n      var options = {\n        title: '',\n        curveType: 'function',\n        legend: {\n          position: 'bottom'\n        },\n        hAxis: {\n          textPosition: 'none'\n        }\n      };\n      var chart = new google.visualization.LineChart(document.getElementById('grafic'));\n      chart.draw(data, options);\n    }\n  }\n  async showGrafic() {\n    this.createGrafic(await this.requestToAPI());\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grafic);\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/modules/grafic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/flags */ \"./app/assets/js/modules/flags.js\");\n/* harmony import */ var _modules_grafic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/grafic */ \"./app/assets/js/modules/grafic.js\");\n/* harmony import */ var _modules_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/convert */ \"./app/assets/js/modules/convert.js\");\n/* harmony import */ var _modules_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/components */ \"./app/assets/js/modules/components.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  'use strict';\n\n  const components = new _modules_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const flags = new _modules_flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const grafic = new _modules_grafic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const convert = new _modules_convert__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  components.Date();\n  components.requestToAPI();\n  grafic.showGrafic();\n  flags.classLogic();\n  grafic.classLogic();\n  convert.classLogic();\n});\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

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