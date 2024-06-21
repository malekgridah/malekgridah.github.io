(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-controls-form-controls-module"],{

/***/ "./src/app/pages/form-controls/autocomplete/autocomplete.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/form-controls/autocomplete/autocomplete.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'short_text'\" \r\n    [title]=\"'Autocomplete'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" class=\"p-2\"> \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Filter autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"filteredControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                              {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/autocomplete/autocomplete.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form-controls/autocomplete/autocomplete.component.ts ***!
  \****************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(appSettings) {
        this.appSettings = appSettings;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        this.filteredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.settings = this.appSettings.settings;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.filteredControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/pages/form-controls/autocomplete/autocomplete.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/checkbox/checkbox.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/form-controls/checkbox/checkbox.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'check_box'\" \r\n    [title]=\"'Checkbox'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Checkbox configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\" class=\"mx-2\">Checked</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"indeterminate\" class=\"mx-2\">Indeterminate</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <label class=\"mx-2\">Label position:</label>\r\n                    <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                        <mat-radio-button value=\"after\" class=\"mx-2\">After</mat-radio-button>\r\n                        <mat-radio-button value=\"before\" class=\"mx-2\">Before</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\" class=\"mx-2\">Disabled</mat-checkbox>\r\n                </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <h2 class=\"py-3 mx-2\">Result</h2>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox\r\n                        class=\"mx-2\"\r\n                        [(ngModel)]=\"checked\"\r\n                        [(indeterminate)]=\"indeterminate\"\r\n                        [labelPosition]=\"labelPosition\"\r\n                        [disabled]=\"disabled\">\r\n                        I'm a checkbox\r\n                    </mat-checkbox>\r\n                </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/checkbox/checkbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/form-controls/checkbox/checkbox.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(appSettings) {
        this.appSettings = appSettings;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.settings = this.appSettings.settings;
    }
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/pages/form-controls/checkbox/checkbox.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/datepicker/datepicker.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/form-controls/datepicker/datepicker.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'today'\" \r\n    [title]=\"'Datepicker'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" class=\"p-2\"> \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker start date</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with min & max validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker3\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with filter validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker4\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker4></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker input and change events</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker5\" placeholder=\"Input & change events\"\r\n                          (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker5></mat-datepicker>\r\n                </mat-form-field>                \r\n                <div class=\"w-100 mat-elevation-z4 p-1 events-list\" perfectScrollbar> \r\n                    <div *ngFor=\"let e of events\">{{e}}</div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Disabled datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">             \r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp1></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp2></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker touch UI</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                    <mat-datepicker touchUi=\"true\" #picker6></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"p-2\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker open method</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker7\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker #picker7></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-raised-button (click)=\"picker7.open()\">Open</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>                                 \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/datepicker/datepicker.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/form-controls/datepicker/datepicker.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-list {\n  height: 97px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS1jb250cm9scy9kYXRlcGlja2VyL0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHBhZ2VzXFxmb3JtLWNvbnRyb2xzXFxkYXRlcGlja2VyXFxkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybS1jb250cm9scy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnRzLWxpc3R7XHJcbiAgICBoZWlnaHQ6IDk3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/form-controls/datepicker/datepicker.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/form-controls/datepicker/datepicker.component.ts ***!
  \************************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(appSettings) {
        this.appSettings = appSettings;
        //Datepicker start date
        this.startDate = new Date(1990, 0, 1);
        //Datepicker with min & max validation
        this.minDate = new Date(2010, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        //Datepicker with filter validation
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        //Datepicker input and change events
        this.events = [];
        this.settings = this.appSettings.settings;
    }
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/pages/form-controls/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/pages/form-controls/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/form-controls.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-controls/form-controls.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, FormControlsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlsModule", function() { return FormControlsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/pages/form-controls/autocomplete/autocomplete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/pages/form-controls/checkbox/checkbox.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/pages/form-controls/datepicker/datepicker.component.ts");
/* harmony import */ var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-field/form-field.component */ "./src/app/pages/form-controls/form-field/form-field.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/input.component */ "./src/app/pages/form-controls/input/input.component.ts");
/* harmony import */ var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio-button/radio-button.component */ "./src/app/pages/form-controls/radio-button/radio-button.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select/select.component */ "./src/app/pages/form-controls/select/select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/pages/form-controls/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/pages/form-controls/slide-toggle/slide-toggle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'autocomplete', pathMatch: 'full' },
    { path: 'autocomplete', component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], data: { breadcrumb: 'Autocomplete' } },
    { path: 'checkbox', component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], data: { breadcrumb: 'Checkbox' } },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"], data: { breadcrumb: 'Datepicker' } },
    { path: 'form-field', component: _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldComponent"], data: { breadcrumb: 'Form Field' } },
    { path: 'input', component: _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], data: { breadcrumb: 'Input' } },
    { path: 'radio-button', component: _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__["RadioButtonComponent"], data: { breadcrumb: 'Radio Button' } },
    { path: 'select', component: _select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], data: { breadcrumb: 'Select' } },
    { path: 'slider', component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"], data: { breadcrumb: 'Slider' } },
    { path: 'slide-toggle', component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["SlideToggleComponent"], data: { breadcrumb: 'Slide Toggle' } }
];
var FormControlsModule = /** @class */ (function () {
    function FormControlsModule() {
    }
    FormControlsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"],
                _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__["RadioButtonComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
                _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["SlideToggleComponent"]
            ]
        })
    ], FormControlsModule);
    return FormControlsModule;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/form-field/form-field.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/form-controls/form-field/form-field.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'view_stream'\" \r\n    [title]=\"'Form field'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple form field</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Input\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <textarea matInput placeholder=\"Textarea\"></textarea>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select\">\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>                               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with placeholder</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <form [formGroup]=\"options\">\r\n                    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\r\n                    <div class=\"py-1\">\r\n                        <label>Float label: </label>\r\n                        <mat-radio-group formControlName=\"floatLabel\">\r\n                            <mat-radio-button value=\"auto\" class=\"mx-2\">Auto</mat-radio-button>\r\n                            <mat-radio-button value=\"always\" class=\"mx-2\">Always</mat-radio-button>\r\n                            <mat-radio-button value=\"never\" class=\"mx-2\">Never</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </form>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatLabel]=\"options.value.floatLabel\">\r\n                    <input matInput placeholder=\"Simple placeholder\" required>\r\n                </mat-form-field>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatLabel]=\"options.value.floatLabel\">\r\n                    <mat-select required>\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\r\n                </mat-form-field>               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with hints</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field hintLabel=\"Max 10 characters\">\r\n                    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\r\n                    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select me\">\r\n                      <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n                </mat-form-field>                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with error messages</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n                    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                </mat-form-field>                           \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with prefix & suffix</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Amount\" type=\"number\" [style.text-align]=\"'right'\">\r\n                    <span matPrefix>$&nbsp;</span>\r\n                    <span matSuffix>.00</span>\r\n                </mat-form-field>                        \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field theming</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"themingForm\" [style.fontSize.px]=\"getFontSize()\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <mat-select placeholder=\"Color\" formControlName=\"color\">\r\n                            <mat-option value=\"primary\">Primary</mat-option>\r\n                            <mat-option value=\"accent\">Accent</mat-option>\r\n                            <mat-option value=\"warn\">Warn</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n                        <mat-error *ngIf=\"themingForm.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n                    </mat-form-field>\r\n                </form>     \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/form-field/form-field.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/form-controls/form-field/form-field.component.ts ***!
  \************************************************************************/
/*! exports provided: FormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function() { return FormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent(appSettings, formBuilder) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.hide = true;
        this.settings = this.appSettings.settings;
    }
    FormFieldComponent.prototype.ngOnInit = function () {
        this.options = this.formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.themingForm = this.formBuilder.group({
            'color': 'primary',
            'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)],
        });
    };
    FormFieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.themingForm.value.fontSize);
    };
    FormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-field',
            template: __webpack_require__(/*! ./form-field.component.html */ "./src/app/pages/form-controls/form-field/form-field.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormFieldComponent);
    return FormFieldComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/input/input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/form-controls/input/input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'input'\" \r\n    [title]=\"'Inputs'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic Inputs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a custom ErrorStateMatcher</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n                        <mat-hint>Errors appear instantly!</mat-hint>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Auto-resizing textarea</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <textarea matInput \r\n                              placeholder=\"Autosize textarea\" \r\n                              matTextareaAutosize \r\n                              matAutosizeMinRows=\"2\"\r\n                              matAutosizeMaxRows=\"5\"></textarea>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a clear button</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\r\n                    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Inputs in a form</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                  \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n                    </mat-form-field>\r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"First name\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    \r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address 2\"></textarea>\r\n                    </mat-form-field>                   \r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"City\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"State\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n                                    <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/form-controls/input/input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/form-controls/input/input.component.ts ***!
  \**************************************************************/
/*! exports provided: InputComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputComponent = /** @class */ (function () {
    function InputComponent(appSettings) {
        this.appSettings = appSettings;
        //Input with a custom ErrorStateMatcher
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        //Input with a clear button
        this.value = 'Clear me';
        this.settings = this.appSettings.settings;
    }
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/pages/form-controls/input/input.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], InputComponent);
    return InputComponent;
}());

/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/radio-button/radio-button.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/form-controls/radio-button/radio-button.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'radio_button_checked'\" \r\n    [title]=\"'Radio button'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic radios</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group>\r\n                    <mat-radio-button value=\"1\" class=\"mx-2\">Option 1</mat-radio-button>\r\n                    <mat-radio-button value=\"2\" class=\"mx-2\">Option 2</mat-radio-button>\r\n                </mat-radio-group>   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Radios with ngModel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group [(ngModel)]=\"favoriteSeason\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-radio-button *ngFor=\"let season of seasons\" [value]=\"season\" class=\"season-item mx-2\">\r\n                      {{season}}\r\n                    </mat-radio-button>\r\n                </mat-radio-group>\r\n                <div class=\"pt-3 mx-2\">Your favorite season is: <b> {{favoriteSeason}} </b></div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/radio-button/radio-button.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/form-controls/radio-button/radio-button.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".season-item {\n  margin-bottom: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS1jb250cm9scy9yYWRpby1idXR0b24vQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGZvcm0tY29udHJvbHNcXHJhZGlvLWJ1dHRvblxccmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JtLWNvbnRyb2xzL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vhc29uLWl0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/form-controls/radio-button/radio-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form-controls/radio-button/radio-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent(appSettings) {
        this.appSettings = appSettings;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.settings = this.appSettings.settings;
    }
    RadioButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio-button',
            template: __webpack_require__(/*! ./radio-button.component.html */ "./src/app/pages/form-controls/radio-button/radio-button.component.html"),
            styles: [__webpack_require__(/*! ./radio-button.component.scss */ "./src/app/pages/form-controls/radio-button/radio-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/select/select.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-controls/select/select.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'playlist_add_check'\" \r\n    [title]=\"'Select'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic select</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"mx-2\">\r\n                    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                            {{food.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <p class=\"pt-3 mx-2\"> Selected value: <b>{{selectedValue}}</b> </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with option groups</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"mx-2\">\r\n                    <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n                            <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n                                {{ pokemon.viewValue }}\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with multiple selection</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"mx-2\">\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n                        <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with custom trigger text</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"mx-2\">\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings2\" multiple>\r\n                        <mat-select-trigger>\r\n                          {{toppings2.value ? toppings2.value[0] : ''}}\r\n                          <small *ngIf=\"toppings2.value?.length > 1\">\r\n                            (+{{toppings2.value.length - 1}} others)\r\n                          </small>\r\n                        </mat-select-trigger>\r\n                        <mat-option *ngFor=\"let topping of toppingList2\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/select/select.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/form-controls/select/select.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = /** @class */ (function () {
    function SelectComponent(appSettings) {
        this.appSettings = appSettings;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        //Select with option groups
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        //Select with multiple selection
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        //Select with custom trigger text
        this.toppings2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.settings = this.appSettings.settings;
    }
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/pages/form-controls/select/select.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/slide-toggle/slide-toggle.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/form-controls/slide-toggle/slide-toggle.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'star_half'\" \r\n    [title]=\"'Slide toggle'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slide-toggle configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-3\">\r\n                    <label class=\"mx-2\">Color:</label>\r\n                    <mat-radio-group [(ngModel)]=\"color\">\r\n                        <mat-radio-button value=\"primary\" class=\"mx-2\">Primary</mat-radio-button>\r\n                        <mat-radio-button value=\"accent\" class=\"mx-2\">Accent</mat-radio-button>\r\n                        <mat-radio-button value=\"warn\" class=\"mx-2\">Warn</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\" class=\"mx-2\">Checked</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\" class=\"mx-2\">Disabled</mat-checkbox>\r\n                </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <h2 class=\"py-3 mx-2\">Result</h2>\r\n                <section class=\"py-3\">\r\n                    <mat-slide-toggle\r\n                        class=\"mx-2\"\r\n                        [color]=\"color\"\r\n                        [checked]=\"checked\"\r\n                        [disabled]=\"disabled\">\r\n                        Slide me!\r\n                    </mat-slide-toggle>\r\n                </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/slide-toggle/slide-toggle.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form-controls/slide-toggle/slide-toggle.component.ts ***!
  \****************************************************************************/
/*! exports provided: SlideToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function() { return SlideToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideToggleComponent = /** @class */ (function () {
    function SlideToggleComponent(appSettings) {
        this.appSettings = appSettings;
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.settings = this.appSettings.settings;
    }
    SlideToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide-toggle',
            template: __webpack_require__(/*! ./slide-toggle.component.html */ "./src/app/pages/form-controls/slide-toggle/slide-toggle.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], SlideToggleComponent);
    return SlideToggleComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-controls/slider/slider.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-controls/slider/slider.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'tune'\" \r\n    [title]=\"'Slider'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slider configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-3\">\r\n                    <mat-form-field class=\"mx-2\">\r\n                        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mx-2\">\r\n                        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mx-2\">\r\n                        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mx-2\">\r\n                        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n                    </mat-form-field>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"showTicks\" class=\"mx-2\">Show ticks</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\" class=\"mx-2\">Auto ticks</mat-checkbox>\r\n                    <mat-form-field *ngIf=\"showTicks && !autoTicks\">\r\n                        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n                    </mat-form-field>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"thumbLabel\" class=\"mx-2\">Show thumb label</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"vertical\" class=\"mx-2\">Vertical</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"invert\" class=\"mx-2\">Inverted</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-3\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\" class=\"mx-2\">Disabled</mat-checkbox>\r\n                </section>                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <h2 class=\"py-3 mx-2\">Result</h2>\r\n                <mat-slider class=\"py-3 mx-2\"\r\n                    [disabled]=\"disabled\"\r\n                    [invert]=\"invert\"\r\n                    [max]=\"max\"\r\n                    [min]=\"min\"\r\n                    [step]=\"step\"\r\n                    [thumbLabel]=\"thumbLabel\"\r\n                    [tickInterval]=\"tickInterval\"\r\n                    [(ngModel)]=\"value\"\r\n                    [vertical]=\"vertical\">\r\n                </mat-slider>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-controls/slider/slider.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-controls/slider/slider.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-slider {\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS1jb250cm9scy9zbGlkZXIvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGZvcm0tY29udHJvbHNcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybS1jb250cm9scy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1zbGlkZXJ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/form-controls/slider/slider.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/form-controls/slider/slider.component.ts ***!
  \****************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent(appSettings) {
        this.appSettings = appSettings;
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.settings = this.appSettings.settings;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: false,
        configurable: true
    });
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/pages/form-controls/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/pages/form-controls/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-form-controls-form-controls-module.js.map