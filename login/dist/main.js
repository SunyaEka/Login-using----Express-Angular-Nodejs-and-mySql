(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/create-new-password/create-new-password.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/create-new-password/create-new-password.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <input type=\"text\" [(ngModel)]=\"newPassword\">\n  <input type=\"text\" [(ngModel)]=\"confirmPassword\">\n\n  <button (click)=\"submit()\" >Submit</button>\n</div> -->\n\n\n<div class=\"container-fluid page-background\">\n  <!-- <img src=\"../../assets/image/login.jpeg\" alt=\"\"> -->\n\n  <div class=\"row offset-2 col-1 box1\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-1 box\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-5 inside-container\">\n    <div class=\"row col-12 mt-5\">\n      <div class=\"row offset-6 mb-3 input-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" (keyup)=\"checkPassword()\" placeholder=\"Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n      <div class=\"row offset-6 mb-3 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" (keyup)=\"checkPassword()\" (keyup.enter)=\"submit()\" [(ngModel)]=\"confirmPassword\" placeholder=\"Re-Enter Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n      <span *ngIf=\"!confirmTrue && confirmPassword\" style=\"color:red; margin-left: 23rem;\">*Password don't match or length must be >4</span>\n    </div>\n    <div class=\"row offset-6 mt-5 mb-5\">\n      <button type=\"button\" [disabled]=\"!newPassword || !confirmPassword || !confirmTrue\" class=\"btn login-button\" (click)=\"submit()\">Submit</button>\n      <!-- <a type=\"button\" class=\"btn\" [routerLink]=\"['/create']\">Create User</a>\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/forgot-password']\">Forgot Password</a> -->\n    </div>\n  </div>\n\n  <div class=\"row offset-8 col-1 box2\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-9 col-1 box3\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/forgot-password/forgot-password.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/forgot-password/forgot-password.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <input type=\"text\" placeholder=\"Please Enter Your EmailId\" [(ngModel)]=\"email\">\n  <button (click)=\"submit()\">Send Verification Link</button>\n</div>\n -->\n\n<div class=\"container-fluid page-background\">\n  <!-- <img src=\"../../assets/image/login.jpeg\" alt=\"\"> -->\n\n  <div class=\"row offset-2 col-1 box1\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-1 box\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-5 inside-container\">\n    <div class=\"row col-12 mt-5\">\n      <div class=\"row offset-6 mb-3 input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Please Enter Your EmailId\">\n      </div>\n    </div>\n    <div class=\"row offset-6 mt-5 mb-5\">\n      <button type=\"button\" [disabled]=\"!email\" class=\"btn login-button\" (click)=\"submit()\">Submit</button>\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/login']\">Back</a>\n      <!-- <a type=\"button\" class=\"btn\" [routerLink]=\"['/forgot-password']\">Forgot Password</a> -->\n    </div>\n  </div>\n\n  <div class=\"row offset-8 col-1 box2\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-9 col-1 box3\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/page-not-found/page-not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>page-not-found works!</h3>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/reset-password/reset-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/reset-password/reset-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <div>\n    <input type=\"text\" placeholder=\"Old Password\" [(ngModel)]=\"oldPassword\">\n  </div>\n  <div>\n    <input type=\"text\" placeholder=\"New Password\" [(ngModel)]=\"newPassword\">\n  </div>\n  <div>\n    <input type=\"text\" placeholder=\"Re-Enter Password\" [(ngModel)]=\"confirmPassword\">\n  </div>\n\n  <div>\n    <button (click)=\"submit()\">Change</button>\n  </div>\n</div> -->\n\n\n<div class=\"container-fluid page-background\">\n  <!-- <img src=\"../../assets/image/login.jpeg\" alt=\"\"> -->\n\n  <div class=\"row offset-2 col-1 box1\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-1 box\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-5 inside-container\">\n    <div class=\"row col-12 mt-5\">\n      <div class=\"row offset-6 mb-3 input-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldPassword\" placeholder=\"Old Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n      <div class=\"row offset-6 mb-3 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" (keyup)=\"checkPassword()\" placeholder=\"New Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n      <div class=\"row offset-6 mb-3 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" (keyup)=\"checkPassword()\" [(ngModel)]=\"confirmPassword\" placeholder=\"Re-Enter Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n      <span *ngIf=\"!confirmTrue && confirmPassword\" style=\"color:red; margin-left: 23rem;\">*Password don't match or length must be >4</span>\n\n    </div>\n    <div class=\"row offset-6 mt-5 mb-5\">\n      <button type=\"button\" class=\"btn login-button\" [disabled]=\"!oldPassword || !newPassword || !confirmPassword || !confirmTrue\" (click)=\"submit()\">Submit</button>\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/dashboard']\">Back</a>\n      <!-- <a type=\"button\" class=\"btn\" [routerLink]=\"['/forgot-password']\">Forgot Password</a> -->\n    </div>\n  </div>\n\n  <div class=\"row offset-8 col-1 box2\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-9 col-1 box3\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/unauthorized/unauthorized.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/unauthorized/unauthorized.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-image container-fluid\">\n  <div class=\"row col-12\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-user/create-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-user/create-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n  <div class=\"row col-12 mt-5\">\n    <div class=\"row offset-6 mt-5 mb-2 input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"First Name\">\n    </div>\n    <div class=\"row offset-6 mb-2 input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email Id\">\n    </div>\n    <div class=\"row offset-6 mb-2 input-group\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile Number\">\n    </div>\n    <div class=\"row offset-6 mb-2 input-group\">\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\">\n    </div>\n    <div class=\"row offset-6 mb-2 input-group\">\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"reEnterPassword\" placeholder=\"Re-enter Password\">\n    </div>\n\n  </div>\n  <div class=\"row offset-6\">\n    <button type=\"button\" (click)=\"Create()\">Create</button>\n    <button type=\"button\" [routerLink]=\"['/login']\">Back</button>\n    <a [routerLink]=\"['/login']\">LogIn</a>\n  </div>\n\n</div> -->\n\n\n\n\n<div class=\"container-fluid page-background\">\n  <!-- <img src=\"../../assets/image/login.jpeg\" alt=\"\"> -->\n\n  <div class=\"row offset-2 col-1 box1\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-1 box\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-5 inside-container\">\n    <div class=\"row col-12 mt-2\">\n      <div class=\"offset-6\">*All fields required</div>\n      <div class=\"row offset-6 mb-2 input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"First Name\">\n      </div>\n      <div class=\"row offset-6 mb-2 password-field input-group\">\n        <input type=\"text\" class=\"form-control\" (keyup)=\"checkEmail()\" [(ngModel)]=\"email\" placeholder=\"Email Id\">\n      </div>\n      <div class=\"row offset-6 mb-2 password-field input-group\">\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile Number\">\n      </div>\n      <div class=\"row offset-6 mb-2 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" (keyup)=\"checkPassword()\" [(ngModel)]=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"row offset-6 mb-2 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" (keyup)=\"checkPassword()\" [(ngModel)]=\"reEnterPassword\" placeholder=\"Re-enter Password\">\n      </div>\n      <span *ngIf=\"!confirmTrue && reEnterPassword\" style=\"color:red; margin-left: 23rem;\">*Password don't match or length must be >4</span>\n\n    </div>\n    <div class=\"row offset-6 mt-2 mb-2\">\n      <button type=\"button\" class=\"btn login-button\" [disabled]=\"!firstName || !email || !mobileNumber || !password || !reEnterPassword || !confirmTrue\" (click)=\"Create()\">Create</button>\n      <!-- <button type=\"button\" class=\"btn\" [routerLink]=\"['/login']\">Back</button> -->\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/login']\">LogIn</a>\n    </div>\n  </div>\n\n  <div class=\"row offset-8 col-1 box2\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-9 col-1 box3\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-12 header\">\n    <span>\n      <button class=\"btn btn-primary float-right mt-2\" (click)=\"logOut()\">Log Out</button>\n    </span>\n  </div>\n\n  <div class=\"row col-2\" style=\"margin: 14rem auto;\">\n    <h1>Welcome To</h1>\n    <h2>Dashboard!</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid page-background\">\n  <!-- <img src=\"../../assets/image/login.jpeg\" alt=\"\"> -->\n\n  <div class=\"row offset-2 col-1 box1\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-1 box\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-3 col-5 inside-container\">\n    <div class=\"row col-12 mt-5\">\n      <div class=\"row offset-6 mb-3 input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" placeholder=\"Email / Mobile Number\">\n      </div>\n      <div class=\"row offset-6 mb-3 password-field input-group\">\n        <input type=\"password\" class=\"form-control\" (keyup.enter)=\"login()\" [(ngModel)]=\"password\" placeholder=\"Password\" minlength=\"4\" maxlength=\"10\">\n      </div>\n\n    </div>\n    <div class=\"row offset-6 mt-5 mb-5\">\n      <button type=\"button\" [disabled]=\"!userName || !password\" class=\"btn login-button\" (click)=\"login()\">Login</button>\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/create']\">Create User</a>\n      <a type=\"button\" class=\"btn\" [routerLink]=\"['/forgot-password']\">Forgot Password</a>\n    </div>\n  </div>\n\n  <div class=\"row offset-8 col-1 box2\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n  <div class=\"row offset-9 col-1 box3\">\n    <div class=\"row col-12 mt-5\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/_guards/authGuards.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/authGuards.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        console.log("Inside Auth Guards");
    }
    canActivate(next, state) {
        console.log(state.url);
        if (this.authService.getToken() != null) {
            return true;
        }
        else {
            if (state.url.includes('/login')) {
                return true;
            }
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_services/authentication/authentication.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/_services/authentication/authentication.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





// import { Router } from "@angular/router";
// import { tap } from "rxjs/operators";
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.adminURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl;
    }
    // createUser(data): Observable<string> {
    //   console.log("INSIDE SERVICE");
    //   return of("User");
    //   // return this.httpClient.post(this.adminURL+'/auth/createUser',data);
    // }
    createUser(data) {
        console.log("URL", this.adminURL + 'auth/signup');
        return this.httpClient.post(this.adminURL + 'auth/signup', data);
    }
    resetPassword(data) {
        return this.httpClient.post(this.adminURL + 'auth/reset-password', data);
    }
    forgotPassword(data) {
        return this.httpClient.post(this.adminURL + 'auth/forget', data);
    }
    createNewPassword(data) {
        return this.httpClient.post(this.adminURL + 'auth/createnewpassword', data);
    }
    checkCredentials(data) {
        return this.httpClient.post(this.adminURL + 'auth/login', data);
    }
    getToken() {
        return localStorage.getItem('Token');
    }
    setToken(token) {
        this.decodeToken();
        localStorage.setItem('Token', token);
    }
    decodeToken() {
        if (!this._tokenPayload) {
            const token = localStorage.getItem('Token');
            if (token) {
                const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
                if (payload) {
                    this._tokenPayload = payload;
                    this._userId = payload.userId;
                }
                console.log(payload);
                return payload;
            }
        }
    }
    deleteToken() {
        localStorage.removeItem('Token');
        this._tokenPayload = null;
    }
    get uniqueId() {
        this.decodeToken();
        return this._userId;
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouterModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouterModule", function() { return appRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_authGuards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/authGuards */ "./src/app/_guards/authGuards.ts");
/* harmony import */ var _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/page-not-found/page-not-found.component */ "./src/app/common/page-not-found/page-not-found.component.ts");
/* harmony import */ var _common_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/reset-password/reset-password.component */ "./src/app/common/reset-password/reset-password.component.ts");
/* harmony import */ var _common_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/forgot-password/forgot-password.component */ "./src/app/common/forgot-password/forgot-password.component.ts");
/* harmony import */ var _common_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/unauthorized/unauthorized.component */ "./src/app/common/unauthorized/unauthorized.component.ts");
/* harmony import */ var _common_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/create-new-password/create-new-password.component */ "./src/app/common/create-new-password/create-new-password.component.ts");










const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'create', component: _app_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_guards_authGuards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_authGuards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'reset-password', component: _common_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] },
    { path: 'forgot-password', component: _common_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
    { path: 'create-new-password/:token', component: _common_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_9__["CreateNewPasswordComponent"] },
    { path: 'unauthorized', component: _common_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__["UnauthorizedComponent"] },
    { path: '**', component: _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
const appRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
const routingComponents = [_app_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _common_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"], _common_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _common_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_9__["CreateNewPasswordComponent"], _common_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__["UnauthorizedComponent"], _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _guards_authGuards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/authGuards */ "./src/app/_guards/authGuards.ts");
/* harmony import */ var _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/page-not-found/page-not-found.component */ "./src/app/common/page-not-found/page-not-found.component.ts");
/* harmony import */ var _common_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/reset-password/reset-password.component */ "./src/app/common/reset-password/reset-password.component.ts");
/* harmony import */ var _common_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/forgot-password/forgot-password.component */ "./src/app/common/forgot-password/forgot-password.component.ts");
/* harmony import */ var _common_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/unauthorized/unauthorized.component */ "./src/app/common/unauthorized/unauthorized.component.ts");
/* harmony import */ var _common_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/create-new-password/create-new-password.component */ "./src/app/common/create-new-password/create-new-password.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
            _common_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"],
            _common_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
            _common_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_13__["UnauthorizedComponent"],
            _common_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_14__["CreateNewPasswordComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["appRouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], _guards_authGuards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/create-new-password/create-new-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/common/create-new-password/create-new-password.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-container {\r\n  /* background-color: rgba(255, 255, 255, 0.2); */\r\n  background-color: floralwhite;\r\n  position: absolute;\r\n  margin-top: 16rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n          transform: translate(14%, -5%);\r\n  z-index: 1;\r\n}\r\n.page-background {\r\n  /* background-color: #5CDB95; */\r\n  /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n  background-color: whitesmoke;\r\n  background-size: 120rem 59rem;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  /* background-color: rgba(255, 255, 255, 0.4); */\r\n  height: 58.5rem;\r\n}\r\n.box {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 14rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box1 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 10rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box2 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 29rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box3 {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 33rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.login-button {\r\n  background-color: #e0f3c5;\r\n}\r\ninput:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton a {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NyZWF0ZS1uZXctcGFzc3dvcmQvY3JlYXRlLW5ldy1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQWdEO0VBQ2hELDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixpRUFBaUU7RUFDakUsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWEsT0FBTyx3REFBd0Q7RUFDNUUsNEJBQTRCLEVBQUUsa0RBQWtEO0FBQ2xGO0FBRUE7RUFDRSxhQUFhLE9BQU8sd0RBQXdEO0VBQzVFLDRCQUE0QixFQUFFLGtEQUFrRDtBQUNsRjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NyZWF0ZS1uZXctcGFzc3dvcmQvY3JlYXRlLW5ldy1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2lkZS1jb250YWluZXIge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTZyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnBhZ2UtYmFja2dyb3VuZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVDREI5NTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmxhY2stY29mZmUuanBnXCIpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMjByZW0gNTlyZW07XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAqL1xyXG4gIGhlaWdodDogNTguNXJlbTtcclxufVxyXG4uYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxNHJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG4uYm94MSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTByZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuLmJveDIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDI5cmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcbi5ib3gzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzM3JlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjNjNTtcclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lOyAgICAgIC8qIFJlbW92ZSBkZWZhdWx0IG91dGxpbmUgYW5kIHVzZSBib3JkZXIgb3IgYm94LXNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBvcmFuZ2U7IC8qIEZ1bGwgZnJlZWRvbS4gKHdvcmtzIGFsc28gd2l0aCBib3JkZXItcmFkaXVzKSAqL1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTsgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lIGFuZCB1c2UgYm9yZGVyIG9yIGJveC1zaGFkb3cgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggb3JhbmdlOyAvKiBGdWxsIGZyZWVkb20uICh3b3JrcyBhbHNvIHdpdGggYm9yZGVyLXJhZGl1cykgKi9cclxufVxyXG5idXR0b24gYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/create-new-password/create-new-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/create-new-password/create-new-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateNewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewPasswordComponent", function() { return CreateNewPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let CreateNewPasswordComponent = class CreateNewPasswordComponent {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.confirmTrue = false;
    }
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get('token');
        console.log(this.token);
    }
    checkPassword() {
        if (this.newPassword && this.confirmPassword) {
            if (this.newPassword === this.confirmPassword) {
                if (this.newPassword.length > 4 && this.confirmPassword.length > 4) {
                    this.confirmTrue = true;
                }
                console.log(this.confirmTrue);
            }
            else {
                this.confirmTrue = false;
            }
        }
    }
    submit() {
        let data = {
            newPassword: this.newPassword,
            token: this.token
        };
        console.log(data);
        this.authService.createNewPassword(data).subscribe((result) => {
            if (result.response === "SUCCESS") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'success');
                this.authService.deleteToken();
                this.router.navigateByUrl('/login');
            }
            if (result.response === "ERROR") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'error');
            }
            setTimeout(() => {
                if (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isVisible()) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }
            }, 2000);
            console.log(result);
        });
    }
};
CreateNewPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
CreateNewPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-new-password',
        template: __webpack_require__(/*! raw-loader!./create-new-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/create-new-password/create-new-password.component.html"),
        styles: [__webpack_require__(/*! ./create-new-password.component.css */ "./src/app/common/create-new-password/create-new-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], CreateNewPasswordComponent);



/***/ }),

/***/ "./src/app/common/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/common/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-container {\r\n  /* background-color: rgba(255, 255, 255, 0.2); */\r\n  background-color: floralwhite;\r\n  position: absolute;\r\n  margin-top: 16rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n          transform: translate(14%, -5%);\r\n  z-index: 1;\r\n}\r\n.page-background {\r\n  /* background-color: #5CDB95; */\r\n  /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n  background-color: whitesmoke;\r\n  background-size: 120rem 59rem;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  /* background-color: rgba(255, 255, 255, 0.4); */\r\n  height: 22.5rem;\r\n}\r\n.box {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 14rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box1 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 10rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box2 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 26rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box3 {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 30rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.login-button {\r\n  background-color: #e0f3c5;\r\n}\r\ninput:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton a {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsaUVBQWlFO0VBQ2pFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhLE9BQU8sd0RBQXdEO0VBQzVFLDRCQUE0QixFQUFFLGtEQUFrRDtBQUNsRjtBQUVBO0VBQ0UsYUFBYSxPQUFPLHdEQUF3RDtFQUM1RSw0QkFBNEIsRUFBRSxrREFBa0Q7QUFDbEY7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxNnJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ucGFnZS1iYWNrZ3JvdW5kIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNEQjk1OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9ibGFjay1jb2ZmZS5qcGdcIik7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHJlbSA1OXJlbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7ICovXHJcbiAgaGVpZ2h0OiAyMi41cmVtO1xyXG59XHJcbi5ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE0cmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcbi5ib3gxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG4uYm94MiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMjZyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuLmJveDMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDMwcmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmM2M1O1xyXG59XHJcbmlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7ICAgICAgLyogUmVtb3ZlIGRlZmF1bHQgb3V0bGluZSBhbmQgdXNlIGJvcmRlciBvciBib3gtc2hhZG93ICovXHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IG9yYW5nZTsgLyogRnVsbCBmcmVlZG9tLiAod29ya3MgYWxzbyB3aXRoIGJvcmRlci1yYWRpdXMpICovXHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lOyAgICAgIC8qIFJlbW92ZSBkZWZhdWx0IG91dGxpbmUgYW5kIHVzZSBib3JkZXIgb3IgYm94LXNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBvcmFuZ2U7IC8qIEZ1bGwgZnJlZWRvbS4gKHdvcmtzIGFsc28gd2l0aCBib3JkZXItcmFkaXVzKSAqL1xyXG59XHJcbmJ1dHRvbiBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/common/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        let data = {
            email: this.email
        };
        console.log("INSIDE SUBMIT", data);
        this.authService.forgotPassword(data).subscribe((result) => {
            if (result.response === "SUCCESS") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'success');
                this.router.navigateByUrl('/login');
            }
            if (result.response === "ERROR") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'error');
            }
            setTimeout(() => {
                if (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isVisible()) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }
            }, 2000);
            console.log(result);
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/common/forgot-password/forgot-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/common/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/common/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/common/page-not-found/page-not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/common/reset-password/reset-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/common/reset-password/reset-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-container {\r\n  /* background-color: rgba(255, 255, 255, 0.2); */\r\n  background-color: floralwhite;\r\n  position: absolute;\r\n  margin-top: 16rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n          transform: translate(14%, -5%);\r\n  z-index: 1;\r\n}\r\n.page-background {\r\n  /* background-color: #5CDB95; */\r\n  /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n  background-color: whitesmoke;\r\n  background-size: 120rem 59rem;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  /* background-color: rgba(255, 255, 255, 0.4); */\r\n  height: 58.5rem;\r\n}\r\n.box {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 14rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box1 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 10rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box2 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 32rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box3 {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 36rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.login-button {\r\n  background-color: #e0f3c5;\r\n}\r\ninput:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton a {\r\n  color: black;\r\n}\r\n@media screen and (max-width: 1920px) {\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 5rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 9rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .inside-container {\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 12rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 28rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 32rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .page-background {\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 19.5rem;\r\n  }\r\n}\r\n@media screen and (max-width: 1366px) {\r\n  .inside-container {\r\n    /* background-color: rgba(255, 255, 255, 0.2); */\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 16rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n            transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .page-background {\r\n    /* background-color: #5CDB95; */\r\n    /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    /* background-color: rgba(255, 255, 255, 0.4); */\r\n    height: 29.5rem;\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 14rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 10rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 29rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 33rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGlFQUFpRTtFQUNqRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VB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QWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2lkZS1jb250YWluZXIge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTZyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnBhZ2UtYmFja2dyb3VuZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVDREI5NTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmxhY2stY29mZmUuanBnXCIpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMjByZW0gNTlyZW07XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAqL1xyXG4gIGhlaWdodDogNTguNXJlbTtcclxufVxyXG4uYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxNHJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG4uYm94MSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTByZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuLmJveDIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDMycmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcbi5ib3gzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzNnJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjNjNTtcclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lOyAgICAgIC8qIFJlbW92ZSBkZWZhdWx0IG91dGxpbmUgYW5kIHVzZSBib3JkZXIgb3IgYm94LXNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBvcmFuZ2U7IC8qIEZ1bGwgZnJlZWRvbS4gKHdvcmtzIGFsc28gd2l0aCBib3JkZXItcmFkaXVzKSAqL1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTsgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lIGFuZCB1c2UgYm9yZGVyIG9yIGJveC1zaGFkb3cgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggb3JhbmdlOyAvKiBGdWxsIGZyZWVkb20uICh3b3JrcyBhbHNvIHdpdGggYm9yZGVyLXJhZGl1cykgKi9cclxufVxyXG5idXR0b24gYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcclxuICAuYm94MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogOXJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEycmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuYm94MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAucGFnZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHJlbSA1OXJlbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE5LjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE2cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucGFnZS1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmxhY2stY29mZmUuanBnXCIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcmVtIDU5cmVtO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgKi9cclxuICAgIGhlaWdodDogMjkuNXJlbTtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyOXJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzM3JlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/reset-password/reset-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/reset-password/reset-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.confirmTrue = false;
    }
    ngOnInit() {
        this.userId = this.authService.uniqueId;
        if (!this.userId) {
            this.router.navigate(['/unauthorized']);
        }
    }
    checkPassword() {
        if (this.newPassword && this.confirmPassword) {
            if (this.newPassword === this.confirmPassword) {
                if (this.newPassword.length > 4 && this.confirmPassword.length > 4) {
                    this.confirmTrue = true;
                }
                console.log(this.confirmTrue);
            }
            else {
                this.confirmTrue = false;
            }
        }
    }
    submit() {
        // let payload = this.authService.decodeToken();
        console.log(this.oldPassword, this.newPassword, this.confirmPassword, this.userId);
        let data = {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword,
            username: this.userId
        };
        console.log(data);
        this.authService.resetPassword(data).subscribe((result) => {
            console.log(result);
            if (result.response === "SUCCESS") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'success');
                this.authService.deleteToken();
                this.router.navigateByUrl('/login');
            }
            if (result.response === "ERROR") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'error');
            }
            setTimeout(() => {
                if (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isVisible()) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }
            }, 2000);
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/reset-password/reset-password.component.html"),
        styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/common/reset-password/reset-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/common/unauthorized/unauthorized.component.css":
/*!****************************************************************!*\
  !*** ./src/app/common/unauthorized/unauthorized.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-image{\r\n  height: 58.5rem;\r\n  background-image: url('unauthorized.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5Q0FBK0Q7RUFDL0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1pbWFnZXtcclxuICBoZWlnaHQ6IDU4LjVyZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL3VuYXV0aG9yaXplZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/unauthorized/unauthorized.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/unauthorized/unauthorized.component.ts ***!
  \***************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnauthorizedComponent = class UnauthorizedComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unauthorized',
        template: __webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/unauthorized/unauthorized.component.html"),
        styles: [__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/common/unauthorized/unauthorized.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UnauthorizedComponent);



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-container {\r\n  /* background-color: rgba(255, 255, 255, 0.2); */\r\n  background-color: floralwhite;\r\n  position: absolute;\r\n  margin-top: 16rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n          transform: translate(14%, -5%);\r\n  z-index: 1;\r\n}\r\n.page-background {\r\n  /* background-color: #5CDB95; */\r\n  /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n  background-color: whitesmoke;\r\n  background-size: 120rem 59rem;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  /* background-color: rgba(255, 255, 255, 0.4); */\r\n  height: 58.5rem;\r\n}\r\n.box {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 14rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box1 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 10rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box2 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 38rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box3 {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 41.5rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.login-button {\r\n  background-color: #e0f3c5;\r\n}\r\ninput:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton a {\r\n  color: black;\r\n}\r\n@media screen and (max-width: 1920px) {\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 5rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 9rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .inside-container {\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 12rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 28rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 32rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .page-background {\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 21.5rem;\r\n  }\r\n}\r\n@media screen and (max-width: 1366px) {\r\n  .inside-container {\r\n    /* background-color: rgba(255, 255, 255, 0.2); */\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 16rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n            transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .page-background {\r\n    /* background-color: #5CDB95; */\r\n    /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    /* background-color: rgba(255, 255, 255, 0.4); */\r\n    height: 29.5rem;\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 14rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 10rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 29rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 33rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsaUVBQWlFO0VBQ2pFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhLE9BQU8sd0RBQXdEO0VBQzVFLDRCQUE0QixFQUFFLGtEQUFrRDtBQUNsRjtBQUVBO0VBQ0UsYUFBYSxPQUFPLHdEQUF3RDtFQUM1RSw0QkFBNEIsRUFBRSxrREFBa0Q7QUFDbEY7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFDdEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFDdEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFDdEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFDdEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtJQUNoRCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsaUVBQWlFO0lBQ2pFLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGUtY29udGFpbmVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE2cmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5wYWdlLWJhY2tncm91bmQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2JsYWNrLWNvZmZlLmpwZ1wiKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcmVtIDU5cmVtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgKi9cclxuICBoZWlnaHQ6IDU4LjVyZW07XHJcbn1cclxuLmJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTRyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuLmJveDEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcbi5ib3gyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzOHJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG4uYm94MyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNDEuNXJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjNjNTtcclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lOyAgICAgIC8qIFJlbW92ZSBkZWZhdWx0IG91dGxpbmUgYW5kIHVzZSBib3JkZXIgb3IgYm94LXNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBvcmFuZ2U7IC8qIEZ1bGwgZnJlZWRvbS4gKHdvcmtzIGFsc28gd2l0aCBib3JkZXItcmFkaXVzKSAqL1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTsgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lIGFuZCB1c2UgYm9yZGVyIG9yIGJveC1zaGFkb3cgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggb3JhbmdlOyAvKiBGdWxsIGZyZWVkb20uICh3b3JrcyBhbHNvIHdpdGggYm9yZGVyLXJhZGl1cykgKi9cclxufVxyXG5idXR0b24gYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcclxuICAuYm94MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogOXJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEycmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuYm94MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAucGFnZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHJlbSA1OXJlbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE2cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucGFnZS1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmxhY2stY29mZmUuanBnXCIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcmVtIDU5cmVtO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgKi9cclxuICAgIGhlaWdodDogMjkuNXJlbTtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyOXJlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxuICAuYm94MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzM3JlbTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let CreateUserComponent = class CreateUserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.confirmTrue = false;
    }
    ngOnInit() {
    }
    dataInput() {
        console.log("FINAL DATA:", this.firstName, this.email, this.mobileNumber, this.password, this.reEnterPassword);
    }
    checkPassword() {
        if (this.password && this.reEnterPassword) {
            if (this.password === this.reEnterPassword) {
                if (this.password.length > 4 && this.reEnterPassword.length > 4) {
                    this.confirmTrue = true;
                }
                console.log(this.confirmTrue);
            }
            else {
                this.confirmTrue = false;
            }
        }
    }
    checkEmail() {
        let emailExpression = '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';
        console.log(this.email.match(emailExpression));
    }
    Create() {
        let data = {
            "firstname": this.firstName,
            "email": this.email,
            "mobilenumber": this.mobileNumber,
            "password": this.password,
            "verificationtoken": ""
        };
        this.authService.createUser(data).subscribe((result) => {
            console.log("INSIDE TS:", result);
            if (result.response === "SUCCESS") {
                // swal({
                //   type: 'success',
                //   title: 'Created Successfully',
                //   showConfirmButton: false,
                //   timer: 1500
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("User Successfully Created", '', 'success');
                this.router.navigateByUrl("/login");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'error');
            }
            setTimeout(() => {
                if (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isVisible()) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }
            }, 2000);
        });
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: __webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-user/create-user.component.html"),
        styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CreateUserComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  height: 6rem;\r\n  background-color: beige;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DashboardComponent = class DashboardComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.deleteToken();
        this.router.navigateByUrl('/login');
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Log Out!', '', 'success');
        setTimeout(() => {
            if (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isVisible()) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.close();
            }
        }, 2000);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-container {\r\n  /* background-color: rgba(255, 255, 255, 0.2); */\r\n  background-color: floralwhite;\r\n  position: absolute;\r\n  margin-top: 16rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n          transform: translate(14%, -5%);\r\n  z-index: 1;\r\n}\r\n.page-background {\r\n  /* background-color: #5CDB95; */\r\n  /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n  background-color: whitesmoke;\r\n  background-size: 120rem 59rem;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  /* background-color: rgba(255, 255, 255, 0.4); */\r\n  height: 58.5rem;\r\n}\r\n.box {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 14rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box1 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 10rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box2 {\r\n  background-color: black;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 29rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.box3 {\r\n  background-color: beige;\r\n  padding: 2rem;\r\n  position: absolute;\r\n  margin-top: 33rem;\r\n  border: 1px;\r\n  box-shadow: 2px 2px 24px #BBBBBB;\r\n  border-radius: .8rem;\r\n  -webkit-backdrop-filter: blur(4px);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-transform: translate(14%, -5%);\r\n  transform: translate(14%, -5%);\r\n}\r\n.login-button {\r\n  background-color: #e0f3c5;\r\n}\r\ninput:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton:focus{\r\n  outline: none;      /* Remove default outline and use border or box-shadow */\r\n  box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */\r\n}\r\nbutton a {\r\n  color: black;\r\n}\r\n@media screen and (max-width: 1920px) {\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 5rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 9rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .inside-container {\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 12rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 28rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 32rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .page-background {\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 19.5rem;\r\n  }\r\n}\r\n@media screen and (max-width: 1366px) {\r\n  .inside-container {\r\n    /* background-color: rgba(255, 255, 255, 0.2); */\r\n    background-color: floralwhite;\r\n    position: absolute;\r\n    margin-top: 16rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n            transform: translate(14%, -5%);\r\n    z-index: 1;\r\n  }\r\n  .page-background {\r\n    /* background-color: #5CDB95; */\r\n    /* background-image: url(\"../../assets/image/black-coffe.jpg\"); */\r\n    background-color: whitesmoke;\r\n    background-size: 120rem 59rem;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    /* background-color: rgba(255, 255, 255, 0.4); */\r\n    height: 29.5rem;\r\n  }\r\n  .box {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 14rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box1 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 10rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box2 {\r\n    background-color: black;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 29rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n  .box3 {\r\n    background-color: beige;\r\n    padding: 2rem;\r\n    position: absolute;\r\n    margin-top: 33rem;\r\n    border: 1px;\r\n    box-shadow: 2px 2px 24px #BBBBBB;\r\n    border-radius: .8rem;\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px);\r\n    -webkit-transform: translate(14%, -5%);\r\n    transform: translate(14%, -5%);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsaUVBQWlFO0VBQ2pFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztF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QVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGUtY29udGFpbmVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE2cmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5wYWdlLWJhY2tncm91bmQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2JsYWNrLWNvZmZlLmpwZ1wiKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcmVtIDU5cmVtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgKi9cclxuICBoZWlnaHQ6IDU4LjVyZW07XHJcbn1cclxuLmJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTRyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuLmJveDEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG59XHJcbi5ib3gyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAyOXJlbTtcclxuICBib3JkZXI6IDFweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQlLCAtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxufVxyXG4uYm94MyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMzNyZW07XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyNHB4ICNCQkJCQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYzYzU7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTsgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lIGFuZCB1c2UgYm9yZGVyIG9yIGJveC1zaGFkb3cgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggb3JhbmdlOyAvKiBGdWxsIGZyZWVkb20uICh3b3JrcyBhbHNvIHdpdGggYm9yZGVyLXJhZGl1cykgKi9cclxufVxyXG5cclxuYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7ICAgICAgLyogUmVtb3ZlIGRlZmF1bHQgb3V0bGluZSBhbmQgdXNlIGJvcmRlciBvciBib3gtc2hhZG93ICovXHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IG9yYW5nZTsgLyogRnVsbCBmcmVlZG9tLiAod29ya3MgYWxzbyB3aXRoIGJvcmRlci1yYWRpdXMpICovXHJcbn1cclxuYnV0dG9uIGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xyXG4gIC5ib3gxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA5cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5pbnNpZGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJyZW07XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5ib3gyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI4cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMycmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5wYWdlLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcmVtIDU5cmVtO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTkuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIC5pbnNpZGUtY29udGFpbmVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZyZW07XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjRweCAjQkJCQkJCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0JSwgLTUlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5wYWdlLWJhY2tncm91bmQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVDREI5NTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9ibGFjay1jb2ZmZS5qcGdcIik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjByZW0gNTlyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAqL1xyXG4gICAgaGVpZ2h0OiAyOS41cmVtO1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE0cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI5cmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG4gIC5ib3gzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMzcmVtO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI0cHggI0JCQkJCQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC01JSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication/authentication.service */ "./src/app/_services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(authenticationService, router, route) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        console.log(this.route.snapshot.queryParams['returnUrl']);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    }
    login() {
        console.log("DETAILS:", this.userName, this.password);
        let data = {
            "username": this.userName,
            "password": this.password
        };
        this.authenticationService.checkCredentials(data).subscribe((result) => {
            console.log("Login Result", result);
            if (result.response === "SUCCESS") {
                this.authenticationService.setToken(result.token);
                console.log(this.returnUrl);
                this.router.navigate([this.returnUrl]);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Successfully Login', '', 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(result.message, '', 'error');
            }
            setTimeout(() => {
                if (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isVisible()) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }
            }, 2000);
            //   if(swal.isVisible()) {
            //     swal.close();
            //  }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], LoginComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverUrl: 'http://localhost:8200/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\LOGIN PROJECT\login\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map