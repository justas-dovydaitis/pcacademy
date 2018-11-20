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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/calc.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calc.ts":
/*!*********************!*\
  !*** ./src/calc.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var housingLoan_1 = __webpack_require__(/*! ./housingLoan */ "./src/housingLoan.ts");
// Gauna inputo value
function getNumValue(id) {
    var element = document.getElementById(id);
    return Number(element.value);
}
function getDiv(id) {
    var element = document.getElementById(id);
    return element;
}
function calculateHousing() {
    var income = getNumValue('income');
    var children = getNumValue('children');
    var ammount = getNumValue('wantedLoan');
    var term = getNumValue('wantedTerm');
    var loan = new housingLoan_1["default"](income, children, ammount, term);
    loan.calculateMaxAmmount();
    var result = loan.calculate();
    getDiv('sum').innerHTML = String(result.allAmmount);
    getDiv('payment').innerHTML = String(result.monthAmmount);
    getDiv('interest').innerHTML = String(result.interest) + '%';
    getDiv('monthFee').innerHTML = String(result.monthFee);
}
(document.getElementById('calculate')).onclick = calculateHousing;


/***/ }),

/***/ "./src/housingLoan.ts":
/*!****************************!*\
  !*** ./src/housingLoan.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var result_1 = __webpack_require__(/*! ./result */ "./src/result.ts");
// Formules nera tikros. Pats sugalvojau. Sori, tingejau ekonomika mokintis.
var HousingLoan = /** @class */ (function () {
    function HousingLoan(sallary, children, ammount, term) {
        this.interest = 0.02; // Nurodytos palukanos 20%
        this.maxTerm = 30 * 12; // Maksimalus paskolos terminas.
        this.childNeeds = 125; // Primetu, kad tiek pinigu vaikui reikia islaikyti per menesi.
        // Priskiriu default reiksmes;
        this.maxAmmount = 0;
        this.sallary = 800;
        this.children = 0;
        this.ammount = 35000;
        this.term = 12;
        this.sallary = sallary;
        this.children = children;
        this.ammount = ammount;
        this.term = term;
    }
    HousingLoan.prototype.calculateMaxAmmount = function () {
        var k = 0.4; // Koeficientas, kiek procentu pajamu skiriama paskolai atiduoti.
        if (this.term > this.maxTerm) {
            alert("Longest term is " + this.maxTerm);
            return;
        }
        var allChildNeeds = this.childNeeds * this.children;
        var sallaryAfterChilds = this.sallary - allChildNeeds;
        if (sallaryAfterChilds < 380) {
            alert('Your sallary is too small');
            this.maxAmmount = 0;
            return;
        }
        var maxMonthAmmount = sallaryAfterChilds * k;
        var monthFee = maxMonthAmmount * this.interest;
        maxMonthAmmount += monthFee;
        this.maxAmmount = maxMonthAmmount * this.maxTerm;
    };
    HousingLoan.prototype.calculate = function () {
        this.calculateMaxAmmount();
        var result;
        if (this.ammount > this.maxAmmount)
            alert("Maximum ammount of loan is " + this.maxAmmount);
        else if (this.term > this.maxTerm)
            alert("Longest term is " + this.maxTerm);
        else {
            var allFee = this.ammount * this.interest * this.term;
            var monthFee = allFee / (this.term * 12);
            var allAmmount = this.ammount + allFee;
            var monthAmmount = allFee / this.term;
            result = new result_1["default"](Math.round(allFee), Math.round(monthFee), Math.round(allAmmount), Math.round(monthAmmount), Math.round(this.interest * 100));
        }
        return result;
    };
    return HousingLoan;
}());
exports["default"] = HousingLoan;


/***/ }),

/***/ "./src/result.ts":
/*!***********************!*\
  !*** ./src/result.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Result = /** @class */ (function () {
    function Result(allFee, monthFee, allAmmount, monthAmmount, interest) {
        this.allAmmount = allAmmount;
        this.allFee = allFee;
        this.monthFee = monthFee;
        this.monthAmmount = monthAmmount;
        this.interest = interest;
    }
    return Result;
}());
exports["default"] = Result;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map