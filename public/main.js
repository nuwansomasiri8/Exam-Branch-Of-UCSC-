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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

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
        this.title = 'app';
    }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/phone/phone.component */ "./src/app/components/phone/phone.component.ts");
/* harmony import */ var _components_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/laptop/laptop.component */ "./src/app/components/laptop/laptop.component.ts");
/* harmony import */ var _components_tablet_tablet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tablet/tablet.component */ "./src/app/components/tablet/tablet.component.ts");
/* harmony import */ var _components_smartwatch_smartwatch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/smartwatch/smartwatch.component */ "./src/app/components/smartwatch/smartwatch.component.ts");
/* harmony import */ var _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/addpost/addpost.component */ "./src/app/components/addpost/addpost.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'phone', component: _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_11__["PhoneComponent"] },
    { path: 'laptop', component: _components_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_12__["LaptopComponent"] },
    { path: 'tablet', component: _components_tablet_tablet_component__WEBPACK_IMPORTED_MODULE_13__["TabletComponent"] },
    { path: 'smartwatch', component: _components_smartwatch_smartwatch_component__WEBPACK_IMPORTED_MODULE_14__["SmartwatchComponent"] },
    { path: 'addpost', component: _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_11__["PhoneComponent"],
                _components_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_12__["LaptopComponent"],
                _components_tablet_tablet_component__WEBPACK_IMPORTED_MODULE_13__["TabletComponent"],
                _components_smartwatch_smartwatch_component__WEBPACK_IMPORTED_MODULE_14__["SmartwatchComponent"],
                _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(applicationRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addpost/addpost.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/addpost/addpost.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  addpost works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/addpost/addpost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.ts ***!
  \*********************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
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

var AddpostComponent = /** @class */ (function () {
    function AddpostComponent() {
    }
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/components/addpost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/components/addpost/addpost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/components/laptop/laptop.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/laptop/laptop.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/laptop/laptop.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/laptop/laptop.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  laptop works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/laptop/laptop.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/laptop/laptop.component.ts ***!
  \*******************************************************/
/*! exports provided: LaptopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopComponent", function() { return LaptopComponent; });
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

var LaptopComponent = /** @class */ (function () {
    function LaptopComponent() {
    }
    LaptopComponent.prototype.ngOnInit = function () {
    };
    LaptopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-laptop',
            template: __webpack_require__(/*! ./laptop.component.html */ "./src/app/components/laptop/laptop.component.html"),
            styles: [__webpack_require__(/*! ./laptop.component.css */ "./src/app/components/laptop/laptop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LaptopComponent);
    return LaptopComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\">Login</h2>\n\t<form (submit) = \"loginUser()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"registration_no\" name =\"registration_no\" \n\t\t\tclass = \"form-control\" placeholder=\"registration\">\n\t\t</div>\n\t\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" placeholder=\"password\">\n\t\t</div>\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Login\">\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            registration_no: this.registration_no,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.storeData(res.token, res.user);
                _this.flashMessage.show("You're Loggedin", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">CompareME</a>\n    </div>\n\n    \n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/phone']\">Phone</a></li>\n        <li><a [routerLink]=\"['/laptop']\">Laptop</a></li>\n        <li><a [routerLink]=\"['/tablet']\">Tablet</a></li>\n        <li><a [routerLink]=\"['/smartwatch']\">Smart Watch</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n       <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <ul class=\"nav navbar-nav\">\n          <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/addpost']\">Add Post</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/profile']\">Hello {{this.user}}</a></li>\n          <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/register']\">Register</a></li>\n          <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a herf=\"#\" (click)=\"logoutUser()\">Logout</a></li>\n        </ul>\n      </ul>\n    </div>\n  </div>\n</nav>   -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"\">Exams</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Registration</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" herf=\"#\" (click)=\"logoutUser()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getName();
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authService.logout();
        this.flashMessage.show("You're Logged out", { cssClass: 'alert-success', times: 3000 });
        this.router.navigate(['']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/phone/phone.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/phone/phone.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/phone/phone.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/phone/phone.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  phone works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/phone/phone.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/phone/phone.component.ts ***!
  \*****************************************************/
/*! exports provided: PhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneComponent", function() { return PhoneComponent; });
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

var PhoneComponent = /** @class */ (function () {
    function PhoneComponent() {
    }
    PhoneComponent.prototype.ngOnInit = function () {
    };
    PhoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone',
            template: __webpack_require__(/*! ./phone.component.html */ "./src/app/components/phone/phone.component.html"),
            styles: [__webpack_require__(/*! ./phone.component.css */ "./src/app/components/phone/phone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneComponent);
    return PhoneComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t{{user.user_name}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Register</h2>\n\t<form (submit) = \"registerData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"user_name\" name =\"user_name\" class = \"form-control\">\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>user_situation</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"user_situation\" name =\"user_situation\" class = \"form-control\">\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Registration No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"registration_no\" name =\"registration_no\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n\n<!-- <div>\n\t<form>\n\t\t<fieldset>\n\t\t\t<br><br>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputPassword1\">Password</label>\n\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleSelect1\">Example select</label>\n\t\t\t<select class=\"form-control\" id=\"exampleSelect1\">\n\t\t\t\t<option>1</option>\n\t\t\t\t<option>2</option>\n\t\t\t\t<option>3</option>\n\t\t\t\t<option>4</option>\n\t\t\t\t<option>5</option>\n\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleSelect2\">Example multiple select</label>\n\t\t\t<select multiple=\"\" class=\"form-control\" id=\"exampleSelect2\">\n\t\t\t\t<option>1</option>\n\t\t\t\t<option>2</option>\n\t\t\t\t<option>3</option>\n\t\t\t\t<option>4</option>\n\t\t\t\t<option>5</option>\n\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleTextarea\">Example textarea</label>\n\t\t\t<textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputFile\">File input</label>\n\t\t\t<input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n\t\t\t<small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n\t\t\t</div>\n\t\t\t<fieldset class=\"form-group\">\n\t\t\t<legend>Radio buttons</legend>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n\t\t\t\tOption one is this and that—be sure to include why it's great\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-check\">\n\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n\t\t\t\tOption two can be something else and selecting it will deselect option one\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-check disabled\">\n\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled=\"\">\n\t\t\t\tOption three is disabled\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t</fieldset>\n\t\t\t<fieldset class=\"form-group\">\n\t\t\t<legend>Checkboxes</legend>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n\t\t\t\tOption one is this and that—be sure to include why it's great\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-check disabled\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n\t\t\t\tOption two is disabled\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t</fieldset>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t</fieldset>\n\t</form>\n</div> -->"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            user_name: this.user_name,
            user_situation: this.user_situation,
            registration_no: this.registration_no,
            email: this.email,
            password: this.password
        };
        this.authService.registerUser(user).subscribe(function (res) {
            if (res.state) {
                _this.flashMessage.show("You're Registered Successfully", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/smartwatch/smartwatch.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/smartwatch/smartwatch.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/smartwatch/smartwatch.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/smartwatch/smartwatch.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  smartwatch works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/smartwatch/smartwatch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/smartwatch/smartwatch.component.ts ***!
  \***************************************************************/
/*! exports provided: SmartwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartwatchComponent", function() { return SmartwatchComponent; });
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

var SmartwatchComponent = /** @class */ (function () {
    function SmartwatchComponent() {
    }
    SmartwatchComponent.prototype.ngOnInit = function () {
    };
    SmartwatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smartwatch',
            template: __webpack_require__(/*! ./smartwatch.component.html */ "./src/app/components/smartwatch/smartwatch.component.html"),
            styles: [__webpack_require__(/*! ./smartwatch.component.css */ "./src/app/components/smartwatch/smartwatch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartwatchComponent);
    return SmartwatchComponent;
}());



/***/ }),

/***/ "./src/app/components/tablet/tablet.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tablet/tablet.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tablet/tablet.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tablet/tablet.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tablet works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/tablet/tablet.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tablet/tablet.component.ts ***!
  \*******************************************************/
/*! exports provided: TabletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabletComponent", function() { return TabletComponent; });
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

var TabletComponent = /** @class */ (function () {
    function TabletComponent() {
    }
    TabletComponent.prototype.ngOnInit = function () {
    };
    TabletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tablet',
            template: __webpack_require__(/*! ./tablet.component.html */ "./src/app/components/tablet/tablet.component.html"),
            styles: [__webpack_require__(/*! ./tablet.component.css */ "./src/app/components/tablet/tablet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabletComponent);
    return TabletComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.fetchToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ "Authorization": this.authtoken });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get("http://localhost:3000/user/profile", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    AuthService.prototype.getName = function () {
        var person = localStorage.getItem("user");
        if (person != null) {
            this.authuser = JSON.parse(person);
            this.authname = this.authuser.user_name;
            return this.authname;
        }
    };
    AuthService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.authtoken = token;
        this.user = userdata;
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        this.fetchToken();
        if (this.authtoken != null) {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
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

module.exports = __webpack_require__(/*! D:\amazingNew\Angular-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map