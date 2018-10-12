(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accuracy/accuracy.component.css":
/*!*************************************************!*\
  !*** ./src/app/accuracy/accuracy.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accuracy/accuracy.component.html":
/*!**************************************************!*\
  !*** ./src/app/accuracy/accuracy.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  SNAP Accuracy!\n</p>\n<div>\n  <label>M1 Reviewed:</label>\n  <input type=\"number\" [(ngModel)]=\"m1Reviewed\"><br>\n  <label>M1 Errors:</label>\n  <input type=\"number\" [(ngModel)]=\"m1Errors\"><br>\n  {{ (1-(m1Errors/m1Reviewed))*100 }}%<br>\n  <label>M2 Reviewed:</label>\n  <input type=\"number\" [(ngModel)]=\"m2Reviewed\"><br>\n  <label>M2 Errors:</label>\n  <input type=\"number\" [(ngModel)]=\"m2Errors\"><br>\n  {{ (1-(m2Errors/m2Reviewed))*100 }}%<br>\n  Overall: {{ (1-((m1Errors+m2Errors)/(m1Reviewed+m2Reviewed)))*100}}%\n</div>\n"

/***/ }),

/***/ "./src/app/accuracy/accuracy.component.ts":
/*!************************************************!*\
  !*** ./src/app/accuracy/accuracy.component.ts ***!
  \************************************************/
/*! exports provided: AccuracyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccuracyComponent", function() { return AccuracyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccuracyComponent = /** @class */ (function () {
    function AccuracyComponent() {
        this.m1Reviewed = 0;
        this.m2Reviewed = 0;
        this.m1Errors = 0;
        this.m2Errors = 0;
    }
    AccuracyComponent.prototype.ngOnInit = function () {
    };
    AccuracyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accuracy',
            template: __webpack_require__(/*! ./accuracy.component.html */ "./src/app/accuracy/accuracy.component.html"),
            styles: [__webpack_require__(/*! ./accuracy.component.css */ "./src/app/accuracy/accuracy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccuracyComponent);
    return AccuracyComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ personName }}'s Evaluation!\n  </h1>\n<hr>\n  <br>\n  <label>Name:</label>\n  <input type=\"text\" name=\"personName\" [(ngModel)]=\"personName\"><br>\n  <!--<label>Number 1:</label>-->\n  <!--<input type=\"number\" name=\"num1\" [(ngModel)]=\"number1\"><br>-->\n  <!--<label>Number 2:</label>-->\n  <!--<input type=\"number\" name=\"num2\" [(ngModel)]=\"number2\"><br>-->\n  <!--{{ (1-(number1/number2))*100 }}%-->\n\n</div>\n<!--<button (click)=\"clicked()\">Click Me!</button>-->\n\n<!--{{ personName }}, {{ number1 }}, {{ number2 }}, {{ number1 + number2 }}-->\n\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n<app-accuracy></app-accuracy>\n    </div>\n    <div class=\"col-sm\">\n<app-timeliness></app-timeliness>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Wesleys Angular Playground';
        this.personName = undefined;
        this.number1 = 0;
        this.number2 = 0;
    }
    AppComponent.prototype.clicked = function () {
        var a = 0;
        alert('hello there ' + this.personName);
        a = this.number1 + this.number2;
        console.log(a);
        alert('Your answer is ' + a);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accuracy_accuracy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accuracy/accuracy.component */ "./src/app/accuracy/accuracy.component.ts");
/* harmony import */ var _timeliness_timeliness_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeliness/timeliness.component */ "./src/app/timeliness/timeliness.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _accuracy_accuracy_component__WEBPACK_IMPORTED_MODULE_4__["AccuracyComponent"],
                _timeliness_timeliness_component__WEBPACK_IMPORTED_MODULE_5__["TimelinessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/timeliness/timeliness.component.css":
/*!*****************************************************!*\
  !*** ./src/app/timeliness/timeliness.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeliness/timeliness.component.html":
/*!******************************************************!*\
  !*** ./src/app/timeliness/timeliness.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  SNAP Timeliness!\n</p>\n<div>\n  <label>M1 Assigned:</label>\n  <input type=\"number\" [(ngModel)]=\"m1Reviewed\"><br>\n  <label>M1 Late:</label>\n  <input type=\"number\" [(ngModel)]=\"m1Errors\"><br>\n  {{ (1-(m1Errors/m1Reviewed))*100 }}%<br>\n  <label>M2 Assigned:</label>\n  <input type=\"number\" [(ngModel)]=\"m2Reviewed\"><br>\n  <label>M2 Late:</label>\n  <input type=\"number\" [(ngModel)]=\"m2Errors\"><br>\n  {{ (1-(m2Errors/m2Reviewed))*100 }}%<br>\n  Overall: {{ (1-((m1Errors+m2Errors)/(m1Reviewed+m2Reviewed)))*100}}%\n</div>\n"

/***/ }),

/***/ "./src/app/timeliness/timeliness.component.ts":
/*!****************************************************!*\
  !*** ./src/app/timeliness/timeliness.component.ts ***!
  \****************************************************/
/*! exports provided: TimelinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinessComponent", function() { return TimelinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelinessComponent = /** @class */ (function () {
    function TimelinessComponent() {
        this.m1Reviewed = 0;
        this.m2Reviewed = 0;
        this.m1Errors = 0;
        this.m2Errors = 0;
    }
    TimelinessComponent.prototype.ngOnInit = function () {
    };
    TimelinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeliness',
            template: __webpack_require__(/*! ./timeliness.component.html */ "./src/app/timeliness/timeliness.component.html"),
            styles: [__webpack_require__(/*! ./timeliness.component.css */ "./src/app/timeliness/timeliness.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelinessComponent);
    return TimelinessComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wesleyyoung/PGCS-Monthly/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map