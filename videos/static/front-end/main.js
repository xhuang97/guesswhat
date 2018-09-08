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

module.exports = ".inside {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n.example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\nh1.example-app-name {\n  margin-left: 8px;\n}\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" >\n    <mat-icon>menu</mat-icon>\n  </button>\n  <h1 class=\"example-app-name\">Team Guess What?</h1>\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n    <button mat-menu-item (click)=\"onClickHome()\">\n      <mat-icon>home</mat-icon>\n      <span>Home</span>\n    </button>\n    <button mat-menu-item (click)=\"onClickTeam()\">\n      <mat-icon>people_outline</mat-icon>\n      <span>Our Team</span>\n    </button>\n    <button mat-menu-item (click)=\"onClickVideo()\">\n      <mat-icon>videocam</mat-icon>\n      <span>Classes</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n\n<app-home [hidden]=\"!showHome\">\n</app-home>\n<app-classes [hidden]=\"!showVideo\">\n</app-classes>\n<app-team [hidden]=\"!showTeam\">\n</app-team>\n<!--\n\n<h2>Log In</h2>\n<div class=\"row\" *ngIf=\"!_userService.token\">\n  <div class=\"col-sm-4\">\n    <label>Username:</label><br />\n    <input type=\"text\" name=\"login-username\" [(ngModel)]=\"user.username\">\n    <span *ngFor=\"let error of _userService.errors.username\"><br />{{ error }}</span></div>\n  <div class=\"col-sm-4\">\n    <label>Password:</label><br />\n    <input type=\"password\" name=\"login-password\" [(ngModel)]=\"user.password\">\n    <span *ngFor=\"let error of _userService.errors.password\"><br />{{ error }}</span>\n  </div>\n  <div class=\"col-sm-4\">\n    <button (click)=\"login()\" class=\"btn btn-primary\">Log In</button>&nbsp;\n  </div>\n  <div class=\"col-sm-12\">\n    <span *ngFor=\"let error of _userService.errors.non_field_errors\">{{ error }}<br /></span>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"_userService.token\">\n  <div class=\"col-sm-12\">You are logged in as {{ _userService.username }}.<br />\n    Token Expires: {{ _userService.token_expires }}<br />\n    <button (click)=\"refreshToken()\" class=\"btn btn-primary\">Refresh Token</button>&nbsp;\n    <button (click)=\"logout()\" class=\"btn btn-primary\">Log Out</button>&nbsp;\n  </div>\n</div>\n\n<h2 class=\"mt-3\">Micro Blog Posts</h2>\n<div *ngFor=\"let post of posts\">\n  <div class=\"row mb-3\">\n    <label class=\"col-md-2\">By:</label>\n    <div class=\"col-md-2 mb-1\">{{ post.user }}</div>\n    <label class=\"col-md-2\">Date:</label>\n    <div class=\"col-md-6\">{{ post.date }}</div>\n    <div class=\"col-md-12\">{{ post.body }}</div>\n  </div>\n</div>\n\n<h3>Create a new post:</h3>\n\n<div class=\"row mb-1\">\n  <label class=\"col-md-3\">Enter your post:</label>\n  <div class=\"col-md-9 mb-1\"><input type=\"text\" name=\"body\" [(ngModel)]=\"new_post.body\"></div>\n  <div class=\"col-md-2 offset-3\">\n    <button (click)=\"createPost()\" class=\"btn btn-primary\">Save</button>\n  </div>\n</div> -->\n"

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
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog_post.service */ "./src/app/blog_post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Angular 6/RxJS 6
var AppComponent = /** @class */ (function () {
    function AppComponent(_blogPostService, _userService) {
        this._blogPostService = _blogPostService;
        this._userService = _userService;
        this.title = 'Classroom Smartboard!';
        this.showVideo = false;
        this.showHome = true;
        this.showTeam = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPosts();
        this.new_post = {};
        this.user = {
            username: '',
            password: ''
        };
    };
    AppComponent.prototype.onClickHome = function () {
        this.showVideo = false;
        this.showTeam = false;
        this.showHome = true;
    };
    AppComponent.prototype.onClickTeam = function () {
        this.showVideo = false;
        this.showHome = false;
        this.showTeam = true;
    };
    AppComponent.prototype.onClickVideo = function () {
        this.showHome = false;
        this.showTeam = false;
        this.showVideo = true;
    };
    AppComponent.prototype.login = function () {
        this._userService.login({ 'username': this.user.username, 'password': this.user.password });
    };
    AppComponent.prototype.refreshToken = function () {
        this._userService.refreshToken();
    };
    AppComponent.prototype.logout = function () {
        this._userService.logout();
    };
    AppComponent.prototype.getPosts = function () {
        var _this = this;
        this._blogPostService.list().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.posts = data;
            // convert the dates to a nice format
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                post.date = new Date(post.date);
            }
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading posts'); });
    };
    AppComponent.prototype.createPost = function () {
        var _this = this;
        this._blogPostService.create(this.new_post, this.user.token).subscribe(function (data) {
            // refresh the list
            _this.getPosts();
            return true;
        }, function (error) {
            console.error('Error saving!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_post_service__WEBPACK_IMPORTED_MODULE_1__["BlogPostService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog_post.service */ "./src/app/blog_post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _classes_classes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/classes.component */ "./src/app/classes/classes.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _classes_classes_component__WEBPACK_IMPORTED_MODULE_8__["ClassesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]
            ],
            providers: [_blog_post_service__WEBPACK_IMPORTED_MODULE_6__["BlogPostService"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog_post.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog_post.service.ts ***!
  \**************************************/
/*! exports provided: BlogPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostService", function() { return BlogPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPostService = /** @class */ (function () {
    function BlogPostService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    // Uses http.get() to load data from a single API endpoint
    BlogPostService.prototype.list = function () {
        return this.http.get('/api/posts');
    };
    // send a POST request to the API to create a new data object
    BlogPostService.prototype.create = function (post, token) {
        return this.http.post('/api/posts', JSON.stringify(post), this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    BlogPostService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token
            })
        };
    };
    BlogPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BlogPostService);
    return BlogPostService;
}());



/***/ }),

/***/ "./src/app/classes/classes.component.css":
/*!***********************************************!*\
  !*** ./src/app/classes/classes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n[class*='col-']:last-of-type {\n    padding-right: 0;\n  }\na {\n    text-decoration: none;\n  }\n*, *:after, *:before {\n    box-sizing: border-box;\n  }\nh3 {\n    widows: 200px; \n    margin: 50px;\n    color: #4053AF;\n    margin-bottom: 0;\n  }\nh4 {\n    position: relative;\n  }\n.grid {\n    margin: 50px;\n  }\n.col-1-4 {\n    width: 25%;\n    height: 10%;\n  }\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    height: 120px;\n    background-color: #4053AF;\n    border-radius: 2px;\n  }\n.module:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #4053AF;\n  }\n.grid-pad {\n    padding: 10px 0;\n  }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }\n.hr {\n    display: block;\n    margin: 20px 0 20px 0;\n    border-top: 1px solid rgba(0, 0, 0, .12);\n    \n  }\n/*\n  Copyright 2017-2018 Google Inc. All Rights Reserved.\n  Use of this source code is governed by an MIT-style license that\n  can be found in the LICENSE file at http://angular.io/license\n  */"

/***/ }),

/***/ "./src/app/classes/classes.component.html":
/*!************************************************!*\
  !*** ./src/app/classes/classes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Your Current Classes</h3>\n<mat-divider class =\"hr\"></mat-divider>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let class of newclass\" class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{class.name}}</h4>\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/classes/classes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/classes.component.ts ***!
  \**********************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
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

var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classes',
            template: __webpack_require__(/*! ./classes.component.html */ "./src/app/classes/classes.component.html"),
            styles: [__webpack_require__(/*! ./classes.component.css */ "./src/app/classes/classes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to SmartBoard!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/images/logo.jpeg\">\n</div>\n\n<ul>\n  <h4>\n    SmartBoard is an app that can stream blackboard during classes. They are a good tool to help you get focused.\n    Please click on the menu to explore.\n    </h4>\n</ul>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n[class*='col-']:last-of-type {\n    padding-right: 0;\n  }\na {\n    text-decoration: none;\n  }\n*, *:after, *:before {\n    box-sizing: border-box;\n  }\nh3 {\n    widows: 200px; \n    margin: 50px;\n    color: #4053AF;\n    margin-bottom: 0;\n  }\nh4 {\n    position: relative;\n  }\n.grid {\n    margin: 50px;\n  }\n.col-1-4 {\n    width: 25%;\n    height: 10%;\n  }\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    height: 175px;\n    width: 175px;\n    background-image: url(\"elvin.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 2px;\n  }\n.module1 {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    height: 175px;\n    width: 175px;\n    background-image: url(\"yiwen.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 2px;\n  }\n.module:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #4053AF;\n  }\n.module1:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #4053AF;\n  }\n.module2 {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    height: 175px;\n    width: 175px;\n    background-image: url(\"killian.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 2px;\n  }\n.module2:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #4053AF;\n  }\n.module3 {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    height: 175px;\n    width: 175px;\n    background-image: url(\"jared.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 2px;\n  }\n.module3:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #4053AF;\n  }\n.grid-pad {\n    padding: 10px 0;\n  }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }\n/*\n  Copyright 2017-2018 Google Inc. All Rights Reserved.\n  Use of this source code is governed by an MIT-style license that\n  can be found in the LICENSE file at http://angular.io/license\n  */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Meet Team Guess What?</h3>\n<div class=\"grid grid-pad\">\n  <a class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>Elvin Gu(Elvina)</h4>\n    </div>\n  </a>\n  <a class=\"col-1-4\">\n      <div class=\"module1 hero\">\n        <h4>Yiwen Yuan</h4>\n      </div>\n  </a>\n  <a class=\"col-1-4\">\n      <div class=\"module2 hero\">\n        <h4>Killian Huang</h4>\n      </div>\n  </a>\n  <a class=\"col-1-4\">\n      <div class=\"module3 hero\">\n        <h4>Jared Something</h4>\n      </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
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

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // error messages received from the login attempt
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    UserService.prototype.login = function (user) {
        var _this = this;
        this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            console.log('login success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('login error', err);
            _this.errors = err['error'];
        });
    };
    /**
     * Refreshes the JWT token, to extend the time the user is logged in
     */
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post('/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            console.log('refresh success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('refresh error', err);
            _this.errors = err['error'];
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        // decode the token to read the username and expiration timestamp
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/yiwenyuan/Documents/smartboard/guesswhat/videos/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map