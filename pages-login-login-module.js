(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n       <!-- <form [formGroup]=\"form\"  (ngSubmit)=\"login()\" fxFlex=\"90\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\"> -->\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\">\r\n          <app-content-header\r\n                [icon]=\"'exit_to_app'\"\r\n                [title]=\"'Login'\"\r\n                [hideBreadcrumb]=\"true\"\r\n                [hasBgImage]=\"true\"\r\n                [class]=\"'py-4'\">\r\n            </app-content-header>\r\n            <div class=\"p-3\">\r\n                <!-- <a mat-button routerLink=\"/register\" color=\"accent\" class=\"w-100\">Não tens uma conta? Registe-se!</a> -->\r\n                <mat-form-field class=\"w-100\">\r\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">E-mail</mat-icon>\r\n                    <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"usuario\">\r\n                    <mat-error *ngIf=\"form.controls.usuario.errors?.required\">O email é obrigatório</mat-error>\r\n                    <mat-error *ngIf=\"form.controls.usuario.hasError('invalidEmail')\">Email invalido</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100\">\r\n                    <!-- <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon> -->\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    <input matInput placeholder=\"Senha\"  [type]=\"hide ? 'password' : 'text'\" formControlName=\"senha\" >\r\n                    <mat-error *ngIf=\"form.controls.senha.errors?.required\">A senha é obrigatória</mat-error>\r\n                    <mat-error *ngIf=\"form.controls.senha.hasError('minlength')\">A senha deve conter no minimo 3 caracteres</mat-error>\r\n                </mat-form-field>\r\n                <mat-slide-toggle formControlName=\"rememberMe\" class=\"my-2\">Lembra-me</mat-slide-toggle>\r\n                <button mat-raised-button color=\"primary\" class=\"mat-elevation-z6 w-100 mt-3\" type=\"submit\" [disabled]=\"!form.valid\">Entrar</button>\r\n            </div>\r\n        </form>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function LoginComponent(appSettings, fb, router, auth) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'usuario': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'senha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'rememberMe': false
        });
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        //  login(usuario: string, senha: string) {
        //   const val = this.form.value;
        //
        //   if(this.form.valid) {
        //   this.auth.login(val.usuario, val.senha);
        //   this.router.navigate(['/']);
        //   }
        // }
        //  login() {
        //   const val = this.form.value;
        //
        //   if (this.form.valid) {
        //     this.auth.login(val.usuario, val.senha)
        //       .subscribe(
        //          () => {
        //            console.log(val.usuario);
        //            this.router.navigate['/'];
        //          }
        //       )
        //
        //     //  this.form.reset();
        //   }
        // }
        get: function () {
            return this.form.get('usuario');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('senha');
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        if (this.form.valid) {
            this.auth.login(this.email.value, this.password.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (authenticated) { return authenticated; }))
                .subscribe(function () { return _this.router.navigateByUrl('/'); });
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map