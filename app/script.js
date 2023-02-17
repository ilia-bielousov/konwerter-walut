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

/***/ "./app/assets/js/script.js":
/*!*********************************!*\
  !*** ./app/assets/js/script.js ***!
  \*********************************/
/***/ (() => {

eval("\n\nwindow.addEventListener('DOMContentLoaded', main);\nfunction main() {\n  google.charts.load('current', {\n    'packages': ['corechart']\n  });\n  google.charts.setOnLoadCallback(drawChart);\n  function drawChart() {\n    var data = google.visualization.arrayToDataTable([['Data', 'Sales', 'Expenses'], ['2022-10-22', 1000, 400], ['2022-10-23', 1170, 460], ['2022-10-24', 660, 1120], ['2022-10-25', 1030, 5140], ['2022-10-25', 1030, 1540], ['2022-10-25', 1030, 240], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 340], ['2022-10-25', 1030, 540], ['2022-10-25', 1030, 140], ['2022-10-25', 1030, 3240], ['2022-10-25', 1030, 240], ['2022-10-25', 1030, 540]]);\n    var options = {\n      title: 'Company Performance',\n      curveType: 'function',\n      legend: {\n        position: 'bottom'\n      },\n      width: 900,\n      height: 500,\n      hAxis: {\n        textPosition: 'none'\n      }\n    };\n    var chart = new google.visualization.LineChart(document.getElementById('grafic'));\n    chart.draw(data, options);\n  }\n  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата \n  const today = new Date();\n  let year = today.getFullYear();\n  let month = today.getMonth() + 1;\n  let day = today.getDate();\n  let stringOfDate = '';\n  if (month < 10) {\n    month = `0${month}`;\n    stringOfDate = `${year}-${month}-${day}`;\n  }\n  if (day < 10) {\n    day = `0${day}`;\n    stringOfDate = `${year}-${month}-${day}`;\n  }\n  currentDate.value = stringOfDate;\n  request('C', '2022-10-22', '2022-12-12'); // вызываем 1 раз, чтобы не перегружать сервер;\n\n  currentDate.addEventListener('input', function (e) {\n    createRequest(e.target.value); // если изменили дату, делаем запрос на сервер\n  });\n\n  function createRequest(date) {\n    // функция, которая создает запрос на сервер\n    const baseTable = 'C';\n    request(baseTable, '2022-10-22', '2022-12-12');\n  }\n  function request() {\n    let current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'C';\n    let startData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'today';\n    let endDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    // собственно сам запрос\n    const baseUrl = 'http://api.nbp.pl/api/exchangerates/tables';\n    getResource(`${baseUrl}/${current}/${startData}/${endDate}`).then(data => data.json()).then(data => getValue(data)).catch(err => console.error(err));\n  }\n  function getValue(data) {\n    let arrayOfValues = [];\n    for (let i of data) {\n      for (let current of i.rates) {\n        if (current['code'] == 'USD') {\n          arrayOfValues.push(current.bid);\n        }\n      }\n    }\n\n    // console.log(arrayOfValues);\n  }\n\n  async function getResource(url) {\n    const res = await fetch(`${url}`);\n    if (!res.ok) {\n      throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n    }\n    return res;\n  }\n  const inputsValue = document.querySelectorAll('.konwerter__input-value');\n  inputsValue.forEach((input, i) => {\n    input.addEventListener('input', function (e) {\n      e.target.value = e.target.value.replace(/\\D/g, '');\n    });\n  });\n}\n\n//# sourceURL=webpack://konwerter_walut/./app/assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/assets/js/script.js"]();
/******/ 	
/******/ })()
;