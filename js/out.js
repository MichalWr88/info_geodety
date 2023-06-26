/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// class config {
//     constructor(name){
//         if(!document) throw Error("document is undefined");
//         this.obj =
//     };

//     init(name){
//         getElemFromDocument = (elem) => { return document.getElementById(elem) }
//     }

// }

window.addEventListener("load", function () {
  var btnPrint = getElemFromDocument("btnPrint");
  var btnToday = getElemFromDocument("btnToday");
  var dateInp = getElemFromDocument("dateInput");
  var cbDeviation = getElemFromDocument("deviation");
  var txtDeviation = getElemFromDocument("deviationText");
  var labelDeviation = getElemFromDocument("deviation-label");
  var areaDeviation = getElemFromDocument("deviation-area");
  var choiceFiled = getElemFromDocument("choice");
  //
  var decisionInp = getElemFromDocument("decision");
  var applicationInp = getElemFromDocument("application");
  //
  var appText = [].concat(_toConsumableArray(document.querySelectorAll(".appTxt")));
  var appInp = [].concat(_toConsumableArray(document.querySelectorAll(".appInp")));
  var desText = [].concat(_toConsumableArray(document.querySelectorAll(".desTxt")));
  var desInp = [].concat(_toConsumableArray(document.querySelectorAll(".desInp")));

  areaDeviation.setAttribute("disabled", "true");

  /* -------------------  EVENTS  ---------------------- */
  // print
  btnPrint.addEventListener("click", function (e) {
    window.print();
  }, false);
  btnToday.addEventListener("click", function (e) {
    dateInp.value = new Date().toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }, false);
  // odstepstwa
  cbDeviation.addEventListener("click", function (e) {
    if (e.target.checked) {
      txtDeviation.classList.toggle("line-through");
      labelDeviation.classList.toggle("lapse");
      areaDeviation.removeAttribute("disabled");
    } else {
      txtDeviation.classList.toggle("line-through");
      labelDeviation.classList.toggle("lapse");
      areaDeviation.setAttribute("disabled", true);
    }
  }, false);
  // zgloszenie/decyzja
  choiceFiled.addEventListener("click", function (e) {
    // e.preventDefault();
    var label = e.target,
        id = label.getAttribute("id");
    console.log(label);
    if (id === "application") {
      applicationInp.firstElementChild.setAttribute("checked", "true");
      decisionInp.firstElementChild.removeAttribute("checked");
      appText.forEach(function (e) {
        e.classList.remove("line-through");
      });
      appInp.forEach(function (e) {
        e.classList.remove("hidden");
      });
      desText.forEach(function (e) {
        e.classList.add("line-through");
      });
      desInp.forEach(function (e) {
        e.classList.add("hidden");
      });
    } else if (id === "decision") {
      decisionInp.firstElementChild.setAttribute("checked", "true");
      applicationInp.firstElementChild.removeAttribute("checked");
      appText.forEach(function (e) {
        e.classList.add("line-through");
      });
      appInp.forEach(function (e) {
        e.classList.add("hidden");
      });
      desText.forEach(function (e) {
        e.classList.remove("line-through");
      });
      desInp.forEach(function (e) {
        e.classList.remove("hidden");
      });
    }
  }, false);
}, false);

var getElemFromDocument = function getElemFromDocument(elem) {
  return document.getElementById(elem);
};

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map