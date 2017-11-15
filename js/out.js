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


window.addEventListener('load', function () {

    var btnPrint = fElId('btnPrint'),
        body = document.querySelector('main'),
        cbDeviation = fElId('deviation'),
        txtDeviation = fElId('deviationText'),
        areaDeviation = fElId('deviation-area'),
        choiceFiled = fElId('choice'),

    // 
    decisionInp = fElId('decision'),

    // 
    applicationInp = fElId('application'),
        appText = Array.prototype.slice.call(document.querySelectorAll('.appTxt')),
        appInp = Array.prototype.slice.call(document.querySelectorAll('.appInp'));

    console.log(applicationInp);
    /* -------------------  EVENTS  ---------------------- */
    // print
    btnPrint.addEventListener('click', function (e) {
        window.print();
    }, false);
    // odstepstwa
    cbDeviation.addEventListener('click', function (e) {

        if (e.target.checked) {
            txtDeviation.classList.toggle('cross');
            areaDeviation.classList.toggle('none');
        } else {
            txtDeviation.classList.toggle('cross');
            areaDeviation.classList.toggle('none');
        }
    }, false);
    // zgloszenie/decyzja
    choiceFiled.addEventListener('click', function (e) {
        // e.preventDefault();
        var label = e.target,
            id = label.getAttribute('id');
        // console.log(e.target)
        if (id === 'application') {
            applicationInp.firstElementChild.setAttribute('checked', 'true');
            decisionInp.firstElementChild.removeAttribute('checked');
            appText.forEach(function (e) {
                console.log(e);
                e.classList.remove('cross');
            });
            appInp.forEach(function (e) {
                e.classList.remove('d-none');
            });
        } else if (id === 'decision') {
            decisionInp.firstElementChild.setAttribute('checked', 'true');
            applicationInp.firstElementChild.removeAttribute('checked');
            appText.forEach(function (e) {
                e.classList.add('cross');
            });
            appInp.forEach(function (e) {
                e.classList.add('d-none');
            });
        }
    }, false);
}, false);

var fElId = function fElId(elem) {
    return document.getElementById(elem);
};

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map