(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/charts/charts.module": [
		"./src/app/pages/charts/charts.module.ts",
		"default~pages-charts-charts-module~pages-dashboard-dashboard-module",
		"common",
		"pages-charts-charts-module"
	],
	"./pages/chat/chat.module": [
		"./src/app/pages/chat/chat.module.ts",
		"pages-chat-chat-module"
	],
	"./pages/contracts/contracts.module": [
		"./src/app/pages/contracts/contracts.module.ts",
		"pages-contracts-contracts-module"
	],
	"./pages/customers/customers.module": [
		"./src/app/pages/customers/customers.module.ts",
		"pages-customers-customers-module"
	],
	"./pages/dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"default~pages-charts-charts-module~pages-dashboard-dashboard-module",
		"common",
		"pages-dashboard-dashboard-module"
	],
	"./pages/drag-drop/drag-drop.module": [
		"./src/app/pages/drag-drop/drag-drop.module.ts",
		"pages-drag-drop-drag-drop-module"
	],
	"./pages/dynamic-menu/dynamic-menu.module": [
		"./src/app/pages/dynamic-menu/dynamic-menu.module.ts",
		"common",
		"pages-dynamic-menu-dynamic-menu-module"
	],
	"./pages/form-controls/form-controls.module": [
		"./src/app/pages/form-controls/form-controls.module.ts",
		"pages-form-controls-form-controls-module"
	],
	"./pages/icons/icons.module": [
		"./src/app/pages/icons/icons.module.ts",
		"pages-icons-icons-module"
	],
	"./pages/landing/landing.module": [
		"./src/app/pages/landing/landing.module.ts",
		"pages-landing-landing-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module"
	],
	"./pages/mailbox/mailbox.module": [
		"./src/app/pages/mailbox/mailbox.module.ts",
		"pages-mailbox-mailbox-module"
	],
	"./pages/maps/maps.module": [
		"./src/app/pages/maps/maps.module.ts",
		"pages-maps-maps-module"
	],
	"./pages/register/register.module": [
		"./src/app/pages/register/register.module.ts",
		"pages-register-register-module"
	],
	"./pages/schedule/schedule.module": [
		"./src/app/pages/schedule/schedule.module.ts",
		"common",
		"pages-schedule-schedule-module"
	],
	"./pages/tables/tables.module": [
		"./src/app/pages/tables/tables.module.ts",
		"pages-tables-tables-module"
	],
	"./pages/ui/ui.module": [
		"./src/app/pages/ui/ui.module.ts",
		"pages-ui-ui-module"
	],
	"./pages/users/users.module": [
		"./src/app/pages/users/users.module.ts",
		"pages-users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.fixed-sidenav]=\"settings.fixedSidenav\"\r\n            [class.fixed-footer]=\"settings.fixedFooter\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\">  \r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <!--<mat-spinner color=\"primary\"></mat-spinner> -->\r\n        <img src=\"assets/img/logo.png\" class=\"animated-logo\"> \r\n        <h4>loading...</h4>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear; }\n  #app-spinner.hide {\n    visibility: hidden;\n    opacity: 0; }\n  #app-spinner h4 {\n    margin-top: 10px;\n    letter-spacing: 0.02em;\n    opacity: 0;\n    text-transform: uppercase;\n    animation: loading-text-opacity 2s linear 0s infinite normal; }\n  @keyframes rotation {\n  100% {\n    transform: rotate(360deg); } }\n  @keyframes loading-text-opacity {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBR1YsZ0RBQWdELEVBQUE7RUFuQnBEO0lBcUJRLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUF0QmxCO0lBeUJRLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHlCQUF5QjtJQUl6Qiw0REFBNEQsRUFBQTtFQVdwRTtFQUNJO0lBQU8seUJBQXlCLEVBQUEsRUFBQTtFQWFwQztFQUNJO0lBQUssVUFBVSxFQUFBO0VBQ2Y7SUFBSyxVQUFVLEVBQUE7RUFDZjtJQUFLLFVBQVUsRUFBQTtFQUNmO0lBQUssVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLXNwaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgICYuaGlkZXtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDsgXHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC1vLWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICBhbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAvL2ltZy5hbmltYXRlZC1sb2dvIHtcclxuICAgIC8vICAgIC1tb3otYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAvLyAgICAtby1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC8vICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAvLyAgICBhbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC8vfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7IFxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0aW9uIHsgXHJcbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGlvbiB7IFxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxufVxyXG5ALW8ta2V5ZnJhbWVzIHJvdGF0aW9uIHsgXHJcbiAgICAxMDAlIHsgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");
/* harmony import */ var _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/top-info-content/top-info-content.component */ "./src/app/theme/components/top-info-content/top-info-content.component.ts");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ "./src/app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _pages_artigos_subcategorias_subcategorias_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/artigos/subcategorias/subcategorias.component */ "./src/app/pages/artigos/subcategorias/subcategorias.component.ts");
/* harmony import */ var _pages_artigos_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/artigos/produtos/produtos.component */ "./src/app/pages/artigos/produtos/produtos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_artigos_categorias_categorias_pesquisa_categorias_pesquisa_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component */ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.ts");
/* harmony import */ var _pages_artigos_categorias_categorias_cadastro_categorias_cadastro_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component */ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"],
                _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"],
                _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_20__["TopInfoContentComponent"],
                _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"],
                _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalMenuComponent"],
                _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__["FlagsMenuComponent"],
                _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__["FullScreenComponent"],
                _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationsComponent"],
                _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"],
                _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__["UserMenuComponent"],
                _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_29__["FavoritesComponent"],
                _pages_artigos_subcategorias_subcategorias_component__WEBPACK_IMPORTED_MODULE_30__["SubcategoriasComponent"],
                _pages_artigos_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_31__["ProdutosComponent"],
                _pages_artigos_categorias_categorias_cadastro_categorias_cadastro_component__WEBPACK_IMPORTED_MODULE_34__["CategoriasCadastroComponent"],
                _pages_artigos_categorias_categorias_pesquisa_categorias_pesquisa_component__WEBPACK_IMPORTED_MODULE_33__["CategoriasPesquisaComponent"],
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_13__["AppSettings"],
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");
/* harmony import */ var _pages_artigos_categorias_categorias_cadastro_categorias_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component */ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.ts");
/* harmony import */ var _pages_artigos_categorias_categorias_pesquisa_categorias_pesquisa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component */ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");









var routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        canActivateChild: [_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'customers', loadChildren: './pages/customers/customers.module#CustomersModule', data: { breadcrumb: 'Customers' } },
            { path: 'contracts', loadChildren: './pages/contracts/contracts.module#ContractsModule', data: { breadcrumb: 'Contracts' } },
            { path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'dynamic-menu', loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'ui', loadChildren: './pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: './pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Chat' } },
            { path: 'form-controls', loadChildren: './pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: './pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'schedule', loadChildren: './pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'drag-drop', loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'icons', loadChildren: './pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'blank', component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"], data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } },
            { path: 'search/:name', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } },
            { path: 'categorias/nova', component: _pages_artigos_categorias_categorias_cadastro_categorias_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasCadastroComponent"], data: { breadcrumb: 'Nova Categoria' } },
            { path: 'categorias', component: _pages_artigos_categorias_categorias_pesquisa_categorias_pesquisa_component__WEBPACK_IMPORTED_MODULE_7__["CategoriasPesquisaComponent"], data: { breadcrumb: 'Listar Categorias ' } }
            /*   { path: 'categorias', component: CategoriasComponent, data: { breadcrumb: 'Categorias'} },
              { path: 'categorias/nova', component: CategoriasCadastroComponent, data: { breadcrumb: 'Nova Categoria'} },
              { path: 'subcategorias', component: SubcategoriasComponent, data: { breadcrumb: 'Subcategorias'} },
              { path: 'produtos', component: ProdutosComponent, data: { breadcrumb: 'Produtos'} } */
        ]
    },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: 'error', component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], data: { breadcrumb: 'Error' } },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
});


/***/ }),

/***/ "./src/app/app.settings.model.ts":
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings(name, loadingSpinner, fixedHeader, fixedSidenav, fixedSidenavUserContent, fixedFooter, sidenavIsOpened, sidenavIsPinned, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.fixedSidenav = fixedSidenav;
        this.fixedSidenavUserContent = fixedSidenavUserContent;
        this.fixedFooter = fixedFooter;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings.model */ "./src/app/app.settings.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Orange Tn', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //fixedSidenav
        false, //fixedSidenavUserContent
        false, //fixedFooter
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'pink-dark', //indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
        false // true = rtl, false = ltr
        );
    }
    AppSettings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authenticate();
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.authenticate();
    };
    AuthGuard.prototype.authenticate = function () {
        return this.auth.check() ? true : this.router.parseUrl('/login');
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/core/token.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASE_URL = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
    }
    AuthService.prototype.check = function () {
        return this.token.valid();
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .post(BASE_URL + '/authenticate', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
            _this.token.set({ access_token: token.token, token_type: 'bearer', token_status: token.isSuccessful });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.check(); }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        // return this.http.post('/auth/logout', {}).pipe(
        //   tap(() => this.token.clear()),
        //   map(() => !this.check())
        // );
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.token.clear(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return !_this.check(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: AuthGuard, AuthService, TokenService, LocalStorageService, MemoryStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/core/token.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]; });

/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/core/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryStorageService", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_3__["MemoryStorageService"]; });

// Authentication






/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/storage.service.ts ***!
  \*****************************************/
/*! exports provided: LocalStorageService, MemoryStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryStorageService", function() { return MemoryStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key) || '{}') || {};
    };
    LocalStorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], LocalStorageService);
    return LocalStorageService;
}());

var MemoryStorageService = /** @class */ (function () {
    function MemoryStorageService() {
        this.store = {};
    }
    MemoryStorageService.prototype.get = function (key) {
        return JSON.parse(this.store[key] || '{}') || {};
    };
    MemoryStorageService.prototype.set = function (key, value) {
        this.store[key] = JSON.stringify(value);
        return true;
    };
    MemoryStorageService.prototype.remove = function (key) {
        delete this.store[key];
    };
    MemoryStorageService.prototype.clear = function () {
        this.store = {};
    };
    return MemoryStorageService;
}());



/***/ }),

/***/ "./src/app/core/token.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/token.service.ts ***!
  \***************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/core/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
}
var TokenService = /** @class */ (function () {
    function TokenService(store) {
        this.store = store;
        this.key = 'TOKEN';
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.store.get(this.key));
    }
    TokenService.prototype.set = function (token) {
        this.change$.next(token);
        this.store.set(this.key, token);
        return this;
    };
    TokenService.prototype.get = function () {
        return this.change$.getValue();
    };
    TokenService.prototype.clear = function () {
        this.store.remove(this.key);
        this.change$.next({});
    };
    TokenService.prototype.change = function () {
        return this.change$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    TokenService.prototype.valid = function () {
        return !!this.get().access_token;
    };
    Object.defineProperty(TokenService.prototype, "value", {
        get: function () {
            var token = this.get();
            return token.access_token || token.token || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "type", {
        get: function () {
            var token = this.get();
            return capitalize(token.token_type || 'bearer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "id", {
        get: function () {
            var token = this.get();
            return token.id;
        },
        enumerable: false,
        configurable: true
    });
    TokenService.prototype.headerValue = function () {
        var value = this.value;
        return value ? [this.type, value].join(' ') : '';
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/pages/artigos/categorias/categoria.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categoria.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
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


var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
        this.categoriaUrl = 'http://localhost:8080/categorias';
    }
    CategoriaService.prototype.pesquisar = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('Authorization', 'Basic YWRtaW5AbWVzaG9wLmNvbTphZG1pbg==');
        return this.http.get("" + this.categoriaUrl, { headers: headers });
    };
    CategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'input'\" \r\n    [title]=\"'Categorias'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\">\r\n</app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n  <div class=\"p-2\">\r\n      <mat-card>\r\n          <mat-card-header fxLayoutAlign=\"center\">                \r\n              <mat-card-subtitle><h2>Nova categoria</h2></mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n              <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxLayout=\"row wrap\">\r\n                  \r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Nome\" formControlName=\"nome\" type=\"text\">\r\n                      <mat-error *ngIf=\"form.controls.nome.errors?.required\">O Nome da categoria é obrigatório</mat-error>\r\n                  </mat-form-field>\r\n            \r\n                  <div class=\"w-100 py-2 text-center\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\">Salvar</button>\r\n                    <a mat-button routerLink=\"/categorias\" color=\"accent\" class=\"w-100\">Pesquisar!</a>\r\n                  </div> \r\n                  \r\n              </form>                              \r\n          </mat-card-content>\r\n      </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlnb3MvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLWNhZGFzdHJvL2NhdGVnb3JpYXMtY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CategoriasCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasCadastroComponent", function() { return CategoriasCadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriasCadastroComponent = /** @class */ (function () {
    function CategoriasCadastroComponent(formbuilder, appSettings) {
        this.formbuilder = formbuilder;
        this.appSettings = appSettings;
    }
    CategoriasCadastroComponent.prototype.ngOnInit = function () {
        // this.settings = this.appSettings;
        this.form = this.formbuilder.group({
            'nome': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CategoriasCadastroComponent.prototype.onSubmit = function () {
    };
    CategoriasCadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categorias-cadastro',
            template: __webpack_require__(/*! ./categorias-cadastro.component.html */ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.html"),
            styles: [__webpack_require__(/*! ./categorias-cadastro.component.scss */ "./src/app/pages/artigos/categorias/categorias-cadastro/categorias-cadastro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], CategoriasCadastroComponent);
    return CategoriasCadastroComponent;
}());



/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'format_line_spacing'\" \r\n    [title]=\"'Categorias'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\">\r\n</app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"px-3 py-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Digita para filtrar\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"codigo\">\r\n                <mat-header-cell *matHeaderCellDef> Codigo </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let categoria\"> {{ categoria.codigo }} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"nome\">\r\n                <mat-header-cell *matHeaderCellDef> Nome </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let categoria\"> {{categoria.nome}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"actions\">\r\n                <mat-header-cell *matHeaderCellDef>   Acções</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                  <button mat-icon-button><mat-icon>launch</mat-icon></button>\r\n                  <button mat-icon-button><mat-icon>edit</mat-icon></button>\r\n                  <button mat-icon-button color=\"warn\"><mat-icon>delete_outline</mat-icon></button>\r\n                </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"loading\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  Loading data...\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"noData\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  No data.\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlnb3MvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLXBlc3F1aXNhL2NhdGVnb3JpYXMtcGVzcXVpc2EuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CategoriasPesquisaComponent, CategoriaDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPesquisaComponent", function() { return CategoriasPesquisaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaDataSource", function() { return CategoriaDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categoria.service */ "./src/app/pages/artigos/categorias/categoria.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriasPesquisaComponent = /** @class */ (function () {
    function CategoriasPesquisaComponent(categoriaService, appSettings) {
        this.categoriaService = categoriaService;
        this.appSettings = appSettings;
        this.dataSource = new CategoriaDataSource(this.categoriaService);
        this.displayedColumns = ['codigo', 'nome', 'actions'];
    }
    CategoriasPesquisaComponent.prototype.ngOnInit = function () {
        //  this.pesquisar();
    };
    CategoriasPesquisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categorias-pesquisa',
            template: __webpack_require__(/*! ./categorias-pesquisa.component.html */ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.html"),
            styles: [__webpack_require__(/*! ./categorias-pesquisa.component.scss */ "./src/app/pages/artigos/categorias/categorias-pesquisa/categorias-pesquisa.component.scss")]
        }),
        __metadata("design:paramtypes", [_categoria_service__WEBPACK_IMPORTED_MODULE_1__["CategoriaService"],
            src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], CategoriasPesquisaComponent);
    return CategoriasPesquisaComponent;
}());

var CategoriaDataSource = /** @class */ (function (_super) {
    __extends(CategoriaDataSource, _super);
    function CategoriaDataSource(categoriaService) {
        var _this = _super.call(this) || this;
        _this.categoriaService = categoriaService;
        return _this;
    }
    CategoriaDataSource.prototype.connect = function () {
        return this.categoriaService.pesquisar();
    };
    CategoriaDataSource.prototype.disconnect = function () { };
    return CategoriaDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/pages/artigos/produtos/produtos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/artigos/produtos/produtos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  produtos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/artigos/produtos/produtos.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/artigos/produtos/produtos.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlnb3MvcHJvZHV0b3MvcHJvZHV0b3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/artigos/produtos/produtos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/artigos/produtos/produtos.component.ts ***!
  \**************************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
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

var ProdutosComponent = /** @class */ (function () {
    function ProdutosComponent() {
    }
    ProdutosComponent.prototype.ngOnInit = function () {
    };
    ProdutosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produtos',
            template: __webpack_require__(/*! ./produtos.component.html */ "./src/app/pages/artigos/produtos/produtos.component.html"),
            styles: [__webpack_require__(/*! ./produtos.component.scss */ "./src/app/pages/artigos/produtos/produtos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProdutosComponent);
    return ProdutosComponent;
}());



/***/ }),

/***/ "./src/app/pages/artigos/subcategorias/subcategorias.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/artigos/subcategorias/subcategorias.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  subcategorias works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/artigos/subcategorias/subcategorias.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/artigos/subcategorias/subcategorias.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlnb3Mvc3ViY2F0ZWdvcmlhcy9zdWJjYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/artigos/subcategorias/subcategorias.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/artigos/subcategorias/subcategorias.component.ts ***!
  \************************************************************************/
/*! exports provided: SubcategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasComponent", function() { return SubcategoriasComponent; });
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

var SubcategoriasComponent = /** @class */ (function () {
    function SubcategoriasComponent() {
    }
    SubcategoriasComponent.prototype.ngOnInit = function () {
    };
    SubcategoriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subcategorias',
            template: __webpack_require__(/*! ./subcategorias.component.html */ "./src/app/pages/artigos/subcategorias/subcategorias.component.html"),
            styles: [__webpack_require__(/*! ./subcategorias.component.scss */ "./src/app/pages/artigos/subcategorias/subcategorias.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubcategoriasComponent);
    return SubcategoriasComponent;
}());



/***/ }),

/***/ "./src/app/pages/blank/blank.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n        \r\n            <app-content-header \r\n            [icon]=\"'check_box_outline_blank'\" \r\n            [title]=\"'Categorias'\" \r\n            [desc]=\"'Gestão das categorias'\"\r\n            [hideBreadcrumb]=\"false\"\r\n            [hasBgImage]=\"true\" \r\n            [class]=\"'pb-4'\">\r\n            </app-content-header>\r\n\r\n      \r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" class=\"p-2\">\r\n                <div fxFlex=\"100\" class=\"p-2\">\r\n                    <p>Hello World!</p>\r\n                </div>\r\n                </div>\r\n    </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/pages/blank/blank.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlankComponent = /** @class */ (function () {
    function BlankComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            'codigo': [null, null],
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])]
        });
    }
    BlankComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            console.log('Funciona................');
        }
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/pages/errors/error/error.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/errors/error/error.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n       <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\">\r\n            <app-content-header \r\n                [icon]=\"'warning'\" \r\n                [title]=\"'500'\" \r\n                [hideBreadcrumb]=\"true\"\r\n                [hasBgImage]=\"true\" \r\n                [class]=\"'pt-4 pb-3'\"></app-content-header>            \r\n            <div class=\"p-4 text-center\">\r\n                <h2 class=\"py-2\">INTERNAL SERVER ERROR</h2>\r\n                <p class=\"pt-2\">Opps, something went wrong.</p> \r\n                <p class=\"pt-2\">You can go to home page.</p> \r\n                <button mat-raised-button color=\"primary\" class=\"mat-elevation-z6 mt-3\" type=\"button\" (click)=\"goHome()\">GO HOME</button>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/errors/error/error.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/errors/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ErrorComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    ErrorComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/errors/error/error.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n       <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\">\r\n            <app-content-header \r\n                [icon]=\"'error'\" \r\n                [title]=\"'404'\" \r\n                [hideBreadcrumb]=\"true\"\r\n                [hasBgImage]=\"true\" \r\n                [class]=\"'pt-4 pb-3'\"></app-content-header>            \r\n            <div class=\"p-4 text-center\">\r\n                <p class=\"pt-2\">Opps, parece que esta Página não existe .</p> \r\n                <p class=\"pt-2\">Se tens a certeza de que existe, pesquisa.</p> \r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"mt-3\">\r\n                    <mat-form-field class=\"w-100 py-2\">\r\n                        <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">search</mat-icon>\r\n                        <input matInput formControlName=\"param\" placeholder=\"Introduza palavras chaves para pesquisar...\">\r\n                        <mat-error *ngIf=\"form.controls.param.errors?.required\">O Texto é obrigatório</mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"mt-3\">\r\n                        <button [disabled]=\"!form.valid\" mat-raised-button color=\"accent\" class=\"mat-elevation-z6 mx-1\" type=\"submit\">SEARCH</button>\r\n                        <button mat-raised-button color=\"primary\" class=\"mat-elevation-z6 mx-1\" type=\"button\" (click)=\"goHome()\">VOLTAR PARA PAGINA INICIAL</button>\r\n                    </div>\r\n                </form>\r\n                \r\n            </div>\r\n        </div>\r\n  </div>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(appSettings, router, fb) {
        this.appSettings = appSettings;
        this.router = router;
        this.fb = fb;
        this.settings = this.appSettings.settings;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'param': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NotFoundComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['/search', values['param']]);
        }
    };
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/errors/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" perfectScrollbar (psScrollY)=\"onPsScrollY($event)\" class=\"h-100\">\r\n\r\n    <header class=\"header\" [class.over]=\"showInfoContent\">\r\n        <app-top-info-content [showInfoContent]=\"showInfoContent\" (onCloseInfoContent)=\"closeInfoContent(showInfoContent)\"></app-top-info-content>\r\n        \r\n        <mat-toolbar class=\"top-toolbar\" [class.mat-elevation-z2]=\"settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>           \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">               \r\n                    <a routerLink=\"/\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"logo\" ngClass.xs=\"mobile\" (click)=\"closeSubMenus()\">\r\n                        <img src=\"assets/img/logo.png\" alt=\"logo\" [@rotate]=\"showSidenav\">\r\n                        <span class=\"mx-2\">Orange Care</span>\r\n                    </a>\r\n                </div> \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"w-100\"> \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" fxShow=\"false\" fxShow.gt-xs>\r\n                        <svg class=\"pin\">\r\n                            <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n                            <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n                        </svg> \r\n                    </button>                 \r\n                    <button mat-icon-button (click)=\"showInfoContent = !showInfoContent\" fxShow=\"false\" fxShow.gt-xs>\r\n                        <mat-icon [@rotate]=\"showInfoContent\" class=\"mat-icon-lg\">expand_more</mat-icon>\r\n                    </button>\r\n                    <app-favorites fxShow=\"false\" fxShow.gt-sm></app-favorites>                                      \r\n                </div>          \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Digita para pesquisar...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>\r\n                    <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <app-applications fxShow=\"false\" fxShow.gt-sm></app-applications>\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n                    <app-user-menu></app-user-menu>\r\n                </div>\r\n            </div>               \r\n        </mat-toolbar>\r\n    </header>\r\n\r\n    <mat-drawer-container class=\"page-wrapper\">\r\n\r\n        <mat-drawer #sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" (openedStart)=\"showSidenav = !showSidenav\" (closedStart)=\"showSidenav = !showSidenav\" class=\"sidenav mat-elevation-z6\" autoFocus=\"false\">\r\n            <mat-toolbar *ngIf=\"settings.fixedSidenav\" class=\"top-toolbar\">\r\n                <a routerLink=\"/\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"logo\">\r\n                    <img src=\"assets/img/logo.png\" alt=\"logo\" [@rotate]=\"showSidenav\">\r\n                    <span class=\"mx-2\">Orange Care</span>\r\n                </a>\r\n            </mat-toolbar>            \r\n            <app-sidenav></app-sidenav>\r\n        </mat-drawer>\r\n\r\n        <mat-drawer-content>\r\n\r\n            <mat-toolbar *ngIf=\"settings.menu == 'horizontal'\" class=\"horizontal-menu px-0\" >\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                    <app-horizontal-menu [menuParentId]=\"0\" [class.w-100]=\"(settings.menuType!='mini')\"></app-horizontal-menu>\r\n                </div>            \r\n            </mat-toolbar>\r\n            <router-outlet></router-outlet> \r\n\r\n        </mat-drawer-content>    \r\n        \r\n        <mat-drawer #options position=\"end\" class=\"options\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"op-header mat-elevation-z1\">\r\n                <h2>Settings</h2>\r\n                <button mat-icon-button (click)=\"options.toggle()\" class=\"ml-2\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n            </div> \r\n            <div [perfectScrollbar]=\"optionsPsConfig\">\r\n                <div fxLayout=\"column\" class=\"control\">\r\n                    <h4>Layout</h4>        \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Fixed header</span>\r\n                        <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div> \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Fixed sidenav</span>\r\n                        <mat-slide-toggle [checked]=\"settings.fixedSidenav\" (change)=\"settings.fixedSidenav = !settings.fixedSidenav\" labelPosition=\"before\" [disabled]=\"menuOption == 'horizontal'\"></mat-slide-toggle>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Fixed footer</span>\r\n                        <mat-slide-toggle [checked]=\"settings.fixedFooter\" (change)=\"settings.fixedFooter = !settings.fixedFooter\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div>                \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>RTL</span>\r\n                        <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div fxLayout=\"column\" class=\"control\">\r\n                    <h4>Choose menu</h4>\r\n                    <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                        <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div fxLayout=\"column\" class=\"control\">\r\n                    <h4>Choose menu type</h4>\r\n                    <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                        <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div fxLayout=\"column\" class=\"control\">\r\n                    <h4>Choose theme skin</h4>        \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\"> \r\n                        <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                        <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                        <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div> \r\n                        <div class=\"skin-primary gray-light\" (click)=\"changeTheme('gray-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    </div>\r\n                     <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\"> \r\n                        <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                        <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                        <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                        <div class=\"skin-primary gray-dark\" (click)=\"changeTheme('gray-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    </div>\r\n                </div>\r\n                <div fxLayout=\"column\" class=\"control\">\r\n                    <h4>Sidenav options</h4>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Opened sidenav</span>\r\n                        <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Pinned sidenav</span>\r\n                        <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <span>Fixed sidenav user content</span>\r\n                        <mat-slide-toggle [checked]=\"settings.fixedSidenavUserContent\" (change)=\"settings.fixedSidenavUserContent = !settings.fixedSidenavUserContent\" labelPosition=\"before\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-drawer>\r\n\r\n    </mat-drawer-container>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n        <mat-icon>settings</mat-icon>\r\n    </div>\r\n\r\n    <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n        <mat-icon>arrow_upward</mat-icon>\r\n    </div>\r\n\r\n   <!--  <mat-toolbar color=\"primary\" class=\"footer\" [class.full-width]=\"!showSidenav\">\r\n        <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/annular-angular-material-design-admin-template/22537089\" target=\"_blank\">\r\n            <mat-icon class=\"mx-2\">shopping_cart</mat-icon>Purchase ANNULAR\r\n        </a>\r\n    </mat-toolbar> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-toolbar {\n  position: relative;\n  height: 56px;\n  z-index: 1; }\n\n.pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor; }\n\n.sidenav {\n  width: 260px;\n  overflow: hidden;\n  border: none !important; }\n\n.header {\n  position: relative;\n  z-index: 2;\n  transition: 0.3s; }\n\n.header.over {\n    z-index: 99; }\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s; }\n\n.search-bar form input.show {\n    padding: 0 8px;\n    width: 250px; }\n\n.footer {\n  height: 56px;\n  position: relative;\n  z-index: 3; }\n\n.options {\n  position: fixed;\n  width: 260px;\n  z-index: 999999; }\n\n.options .op-header {\n    height: 56px;\n    padding: 0 14px; }\n\n.options .control {\n    padding: 6px 14px; }\n\n.options .control div {\n      padding: 6px 0; }\n\n.options .control h4 {\n      border-bottom: 1px solid #ccc;\n      margin: 12px 0 6px 0; }\n\n.options .control .skin-primary {\n      width: 46px;\n      height: 46px;\n      padding: 0;\n      overflow: hidden;\n      cursor: pointer; }\n\n.options .control .skin-primary .skin-secondary {\n        width: 0;\n        height: 0;\n        padding: 0;\n        border-bottom: 46px solid;\n        border-left: 46px solid transparent; }\n\n.options .control .skin-primary.indigo-light {\n        background-color: #3F51B5;\n        border: 1px solid #3F51B5; }\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.teal-light {\n        background-color: #009688;\n        border: 1px solid #009688; }\n\n.options .control .skin-primary.teal-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.red-light {\n        background-color: #F44336;\n        border: 1px solid #F44336; }\n\n.options .control .skin-primary.red-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.gray-light {\n        background-color: #757575;\n        border: 1px solid #757575; }\n\n.options .control .skin-primary.gray-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.blue-dark {\n        background-color: #0277bd;\n        border: 1px solid #0277bd; }\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.green-dark {\n        background-color: #388E3C;\n        border: 1px solid #388E3C; }\n\n.options .control .skin-primary.green-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.pink-dark {\n        background-color: #D81B60;\n        border: 1px solid #D81B60; }\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.gray-dark {\n        background-color: #607D8B;\n        border: 1px solid #607D8B; }\n\n.options .control .skin-primary.gray-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .mat-radio-group {\n    display: inline-flex;\n    flex-direction: column; }\n\n.options .mat-radio-group .mat-radio-button {\n      margin: 2px 0; }\n\n.options .mat-slide-toggle {\n    height: auto; }\n\n.options .ps {\n    height: calc(100% - 56px); }\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s; }\n\n.options-icon {\n  position: fixed;\n  top: 120px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 99999; }\n\n.options-icon .mat-icon {\n    animation: spin 8s linear infinite; }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: .5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  transition: 0.3s; }\n\n.back-to-top:hover {\n    opacity: 0.9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBa0I7RUFDbEIsWUNIcUI7RURJckIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUNYaUI7RURZakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBSHBCO0lBS1EsV0FBVyxFQUFBOztBQUluQjtFQUdZLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBWDVCO0lBYWUsY0FBYztJQUNkLFlBQVksRUFBQTs7QUFNM0I7RUFDSSxZQ2hEd0I7RURpRHhCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxlQUFlO0VBQ2YsWUN0RGlCO0VEdURqQixlQUFlLEVBQUE7O0FBSG5CO0lBS1EsWUM3RGlCO0lEOERqQixlQUFlLEVBQUE7O0FBTnZCO0lBU1EsaUJBQWlCLEVBQUE7O0FBVHpCO01BV1ksY0FBYyxFQUFBOztBQVgxQjtNQWNZLDZCQUE2QjtNQUM3QixvQkFBb0IsRUFBQTs7QUFmaEM7TUFrQlksV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTs7QUF0QjNCO1FBd0JnQixRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7UUFDVix5QkFBeUI7UUFDekIsbUNBQW1DLEVBQUE7O0FBNUJuRDtRQStCZ0IseUJBQXlCO1FBQ3pCLHlCQUF5QixFQUFBOztBQWhDekM7VUFrQ29CLDRCQUE0QixFQUFBOztBQWxDaEQ7UUFzQ2dCLHlCQUF5QjtRQUN6Qix5QkFBeUIsRUFBQTs7QUF2Q3pDO1VBeUNvQiw0QkFBNEIsRUFBQTs7QUF6Q2hEO1FBNkNnQix5QkFBeUI7UUFDekIseUJBQXlCLEVBQUE7O0FBOUN6QztVQWdEb0IsNEJBQTRCLEVBQUE7O0FBaERoRDtRQW9EZ0IseUJBQXlCO1FBQ3pCLHlCQUF5QixFQUFBOztBQXJEekM7VUF1RG9CLDRCQUE0QixFQUFBOztBQXZEaEQ7UUEyRGdCLHlCQUF5QjtRQUN6Qix5QkFBeUIsRUFBQTs7QUE1RHpDO1VBOERvQiw0QkFBNEIsRUFBQTs7QUE5RGhEO1FBa0VnQix5QkFBeUI7UUFDekIseUJBQXlCLEVBQUE7O0FBbkV6QztVQXFFb0IsNEJBQTRCLEVBQUE7O0FBckVoRDtRQXlFZ0IseUJBQXlCO1FBQ3pCLHlCQUF5QixFQUFBOztBQTFFekM7VUE0RW9CLDRCQUE0QixFQUFBOztBQTVFaEQ7UUFnRmdCLHlCQUF5QjtRQUN6Qix5QkFBeUIsRUFBQTs7QUFqRnpDO1VBbUZvQiw0QkFBNEIsRUFBQTs7QUFuRmhEO0lBeUZRLG9CQUFvQjtJQUNwQixzQkFBc0IsRUFBQTs7QUExRjlCO01BNEZZLGFBQWEsRUFBQTs7QUE1RnpCO0lBZ0dRLFlBQVksRUFBQTs7QUFoR3BCO0lBbUdRLHlCQUEyQyxFQUFBOztBQUduRDtFQUNJLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFUbEI7SUFhUSxrQ0FBa0MsRUFBQTs7QUFjMUM7RUFDSTtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFacEI7SUFjUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG5cclxuLnRvcC10b29sYmFye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAkdG9wLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnBpbntcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgJi5vdmVye1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvcm17XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7ICAgIFxyXG4gICAgaGVpZ2h0OiAkZm9vdGVyLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuXHJcbi5vcHRpb25ze1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6ICRzaWRlbmF2LXdpZHRoO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgLm9wLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6ICR0b3AtdG9vbGJhci1oZWlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRyb2x7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNDZweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmluZGlnby1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50ZWFsLWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ncmF5LWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJsdWUtZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ncmVlbi1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OEUzQztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnBpbmstZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEODFCNjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ncmF5LWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzYwN0Q4QjtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvcC10b29sYmFyLWhlaWdodH0pO1xyXG4gICAgfVxyXG59XHJcbi5vcC1pbWFnZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm9wdGlvbnMtaWNvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrLXRvLXRvcHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zczsgICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH0gICAgXHJcbn0iLCIkbWFpbi1mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDY0cHg7IFxyXG4kZm9vdGVyLXRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNjBweDtcclxuJGNvbXBhY3Qtc2lkZW5hdi13aWR0aDogMTcwcHg7XHJcbiRtaW5pLXNpZGVuYXYtd2lkdGg6IDY2cHg7Il19 */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.optionsPsConfig = {};
        this.showSidenav = false;
        this.showInfoContent = false;
        this.toggleSearchBar = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.optionsPsConfig.wheelPropagation = false;
        if (window.innerWidth <= 960) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.settings.loadingSpinner = false; }, 300);
        this.backToTop.nativeElement.style.display = 'none';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.scrollToTop();
            }
            if (window.innerWidth <= 960) {
                _this.sidenav.close();
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    };
    PagesComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    PagesComponent.prototype.chooseMenu = function () {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        if (this.menuOption == 'horizontal') {
            this.settings.fixedSidenav = false;
        }
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function () {
        this.settings.menuType = this.menuTypeOption;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    PagesComponent.prototype.closeInfoContent = function (showInfoContent) {
        this.showInfoContent = !showInfoContent;
    };
    PagesComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 960) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    };
    PagesComponent.prototype.onPsScrollY = function (event) {
        (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    };
    PagesComponent.prototype.scrollToTop = function () {
        this.pss.forEach(function (ps) {
            if (ps.elementRef.nativeElement.id == 'main') {
                ps.scrollToTop(0, 250);
            }
        });
    };
    PagesComponent.prototype.closeSubMenus = function () {
        if (this.settings.menu == "vertical") {
            this.menuService.closeAllSubMenus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backToTop'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "backToTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PagesComponent.prototype, "pss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            // animations: [ rotate ],
            providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \r\n    [icon]=\"'search'\" \r\n    [title]=\"title\" \r\n    [desc]=\"description\"\r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" class=\"p-2\">\r\n    <div fxFlex=\"100\" class=\"p-2\">\r\n        <p *ngIf=\"param\">Search results for : {{param}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.title = 'Nothing Found';
        this.description = 'Sorry, but nothing matched your search terms. Please try again with some different keywords.';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['name']) {
                _this.param = params['name'];
                _this.title = 'Search results';
                _this.description = 'The following results were found for ' + params['name'];
            }
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"breadcrumb p-2\">\r\n    <a routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n        <mat-icon>home</mat-icon>\r\n        <span class=\"breadcrumb-title\">Home</span>\r\n    </a>\r\n    <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  font-size: 13px; }\n  .breadcrumb a {\n    text-decoration: none; }\n  .breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px; }\n  .breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase;\n    font-weight: 500; }\n  .breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"/\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcc2hhcmVkXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBR1EscUJBQXFCLEVBQUE7RUFIN0I7SUFNUSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjLEVBQUE7RUFUdEI7SUFZUSx5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUE7RUFieEI7SUFnQlEscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1ie1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title, menuService) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.menuService = menuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        if (this.settings.menu == "vertical")
            this.menuService.closeAllSubMenus();
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html"),
            providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header bg-primary\" [class.bg-image]=\"hasBgImage\" [ngClass]=\"class\">\r\n  \r\n  <app-breadcrumb [hidden]=\"hideBreadcrumb\"></app-breadcrumb>\r\n  <mat-icon *ngIf=\"icon\" class=\"mat-icon-xlg\">{{icon}}</mat-icon>\r\n  <h1 *ngIf=\"title\">{{title}}</h1>\r\n  <h4 *ngIf=\"desc\" class=\"p-2\">{{desc}}</h4>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header {\n  color: #fff;\n  text-align: center; }\n  .content-header img {\n    width: 130px;\n    height: 130px;\n    border-radius: 50%; }\n  .content-header h1 {\n    font-size: 36px;\n    font-weight: 400;\n    margin: 0; }\n  .content-header h4 {\n    font-size: 16px;\n    font-weight: 300;\n    max-width: 580px;\n    text-align: center;\n    margin: 0 auto; }\n  .content-header.bg-image {\n    background-image: url('header-bg.png');\n    background-blend-mode: overlay;\n    background-size: 300px; }\n  @media screen and (min-width: 960px) {\n  .content-header img {\n    width: 150px;\n    height: 150px; }\n  .content-header h1 {\n    font-size: 48px; }\n  .content-header h4 {\n    font-size: 18px; }\n  .content-header.has-bg-image {\n    background-size: 480px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRlbnQtaGVhZGVyL0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHNoYXJlZFxcY29udGVudC1oZWFkZXJcXGNvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBRnRCO0lBSVEsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQU4xQjtJQVNRLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUyxFQUFBO0VBWGpCO0lBY1EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQWxCdEI7SUFxQlEsc0NBQThEO0lBQzlELDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQUs5QjtFQUNJO0lBRVEsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUhyQjtJQU1RLGVBQWUsRUFBQTtFQU52QjtJQVNRLGVBQWUsRUFBQTtFQVR2QjtJQVlRLHNCQUFzQixFQUFBLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbnRlbnQtaGVhZGVyL2NvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfSBcclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgJi5iZy1pbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2FwcC9oZWFkZXItYmcucG5nXCIpOyAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHsgICAgXHJcbiAgICAuY29udGVudC1oZWFkZXJ7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmhhcy1iZy1pbWFnZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0ODBweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
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

var ContentHeaderComponent = /** @class */ (function () {
    function ContentHeaderComponent() {
        this.hideBreadcrumb = false;
        this.hasBgImage = false;
    }
    ContentHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('icon'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('desc'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "desc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hideBreadcrumb'),
        __metadata("design:type", Boolean)
    ], ContentHeaderComponent.prototype, "hideBreadcrumb", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hasBgImage'),
        __metadata("design:type", Boolean)
    ], ContentHeaderComponent.prototype, "hasBgImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('class'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "class", void 0);
    ContentHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-header',
            template: __webpack_require__(/*! ./content-header.component.html */ "./src/app/shared/content-header/content-header.component.html"),
            styles: [__webpack_require__(/*! ./content-header.component.scss */ "./src/app/shared/content-header/content-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentHeaderComponent);
    return ContentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-panel/custom-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/custom-panel/custom-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel\n        class=\"mat-elevation-z8\"\n        [class.test-black]=\"appSetting.settings.theme == 'red-light'\"\n        [class.test-orange]=\"appSetting.settings.theme == 'pink-dark'\"\n        hideToggle\n        [expanded]=\"extended\"\n        (opened)=\"open = true\"\n        (closed)=\"open = false\"\n        #panel=\"matExpansionPanel\">\n    <mat-expansion-panel-header expandedHeight=\"47px\" collapsedHeight=\"47px\">\n        <div fxFlex=\"90\">\n            <mat-panel-title fxFlex=\"30\">\n                <span><strong>{{title}}&nbsp;</strong></span>\n            </mat-panel-title>\n            <mat-panel-description fxFlex>{{subtitle}}</mat-panel-description>\n        </div>\n            <mat-icon *ngIf=\"!open\" fxLayoutAlign=\"end center\" fxFlex=\"10\">add</mat-icon>\n            <mat-icon *ngIf=\"open\" fxLayoutAlign=\"end center\" fxFlex=\"10\">remove</mat-icon>\n    </mat-expansion-panel-header>\n    <ng-content></ng-content>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/shared/custom-panel/custom-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/custom-panel/custom-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-orange mat-expansion-panel-header {\n  color: white !important;\n  background-color: #f27d1a !important; }\n\n.test-orange mat-expansion-panel-headermat-expanded,\n.test-orange at-expansion-panel-header.mat-expanded:focus {\n  background-color: #f27d1a !important; }\n\n.test-orange .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=\"true\"]) {\n  background-color: #f27d1a !important; }\n\n.test-orange .mat-expansion-panel.mat-expanded mat-expansion-panel-header:hover:not([aria-disabled=\"true\"]) {\n  background-color: #f27d1a !important; }\n\n.mat-expansion-panel .mat-expansion-panel-header-title {\n  color: white;\n  align-items: center; }\n\n.mat-expansion-panel .mat-expansion-panel-header-description {\n  font-weight: lighter;\n  color: white; }\n\n.test-black mat-expansion-panel-header {\n  color: white !important;\n  background-color: #000001 !important; }\n\n.test-black mat-expansion-panel-headermat-expanded,\n.test-black at-expansion-panel-header.mat-expanded:focus {\n  background-color: #000001 !important; }\n\n.test-black .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=\"true\"]) {\n  background-color: #000001 !important; }\n\n.test-black .mat-expansion-panel.mat-expanded mat-expansion-panel-header:hover:not([aria-disabled=\"true\"]) {\n  background-color: #000001 !important; }\n\n.mat-expansion-panel:not(.mat-expanded) {\n  border-radius: 8px !important;\n  margin: 0 0; }\n\n.mat-expansion-panel.mat-expanded .mat-expansion-panel-header {\n  border-radius: 8px 8px 0 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbS1wYW5lbC9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbS1wYW5lbFxcY3VzdG9tLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCO0VBQ3ZCLG9DQUE2QyxFQUFBOztBQUhqRDs7RUFRSSxvQ0FBNkMsRUFBQTs7QUFSakQ7RUFZSSxvQ0FBNkMsRUFBQTs7QUFaakQ7RUFnQkksb0NBQTZDLEVBQUE7O0FBSWpEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBR2Q7RUFHSSx1QkFBdUI7RUFDdkIsb0NBQTZDLEVBQUE7O0FBSmpEOztFQVNJLG9DQUE2QyxFQUFBOztBQVRqRDtFQWFJLG9DQUE2QyxFQUFBOztBQWJqRDtFQWlCSSxvQ0FBNkMsRUFBQTs7QUFNakQ7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVyxFQUFBOztBQUdiO0VBQ0UscUNBQXFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3VzdG9tLXBhbmVsL2N1c3RvbS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0LW9yYW5nZSB7XHJcbiAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2YyN2QxYSwgMSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVybWF0LWV4cGFuZGVkLFxyXG4gIGF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2YyN2QxYSwgMSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZjI3ZDFhLCAxKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwubWF0LWV4cGFuZGVkIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2YyN2QxYSwgMSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGVzdC1ibGFjayB7XHJcblxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwMDAxLCAxKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJtYXQtZXhwYW5kZWQsXHJcbiAgYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwMDAxLCAxKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAwMDEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC5tYXQtZXhwYW5kZWQgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwMDAxLCAxKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC5tYXQtZXhwYW5kZWQgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/custom-panel/custom-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/custom-panel/custom-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPanelComponent", function() { return CustomPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomPanelComponent = /** @class */ (function () {
    function CustomPanelComponent(host, appSettings) {
        this.host = host;
        this.appSettings = appSettings;
        this.extended = false;
        this.open = false;
        this.color = '#000011';
        this.appSetting = appSettings;
    }
    CustomPanelComponent.prototype.ngOnChanges = function (changes) {
        if ('theme' in changes) {
            this.color = this.theme === 'primary' ? '#000011' : '#110000';
            this.host.nativeElement.style.setProperty("--color", this.color);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomPanelComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomPanelComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomPanelComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomPanelComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomPanelComponent.prototype, "extended", void 0);
    CustomPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-panel',
            template: __webpack_require__(/*! ./custom-panel.component.html */ "./src/app/shared/custom-panel/custom-panel.component.html"),
            styles: [__webpack_require__(/*! ./custom-panel.component.scss */ "./src/app/shared/custom-panel/custom-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], CustomPanelComponent);
    return CustomPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _custom_panel_custom_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-panel/custom-panel.component */ "./src/app/shared/custom-panel/custom-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"]
            ],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _custom_panel_custom_panel_component__WEBPACK_IMPORTED_MODULE_7__["CustomPanelComponent"]
            ],
            declarations: [
                _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _custom_panel_custom_panel_component__WEBPACK_IMPORTED_MODULE_7__["CustomPanelComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-purple\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-indigo\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-blue\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-orange\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-green\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-pink\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-brown\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-red\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-gray\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applications {\n  width: 260px; }\n  .applications .mat-card {\n    padding: 0; }\n  .applications .mat-card .mat-button {\n      height: 100%;\n      line-height: 1.7;\n      font-weight: 400;\n      width: 100%;\n      border-radius: 0; }\n  .applications .mat-card .mat-button .mat-button-wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n  .applications .mat-card .mat-button .mat-button-wrapper .mat-icon {\n          padding: 8px;\n          color: #fff;\n          border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBO0VBRGhCO0lBR1EsVUFBVSxFQUFBO0VBSGxCO01BS1ksWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBVDVCO1FBV2dCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CLEVBQUE7RUFibkM7VUFlb0IsWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
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

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/theme/components/applications/applications.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorites-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <div *ngIf=\"favorites\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"\">\r\n        <div class=\"mx-1\" *ngFor=\"let favorite of favorites\" [matTooltip]=\"favorite.title\" matTooltipPosition=\"below\">\r\n          <a *ngIf=\"favorite.href\" mat-icon-button [attr.href]=\"favorite.href\" [attr.target]=\"favorite.target\"><mat-icon>{{favorite.icon}}</mat-icon></a>\r\n          <a *ngIf=\"favorite.routerLink\" mat-icon-button [routerLink]=\"[favorite.routerLink]\"><mat-icon>{{favorite.icon}}</mat-icon></a>\r\n        </div>        \r\n    </div>\r\n    <mat-form-field matTooltip=\"Click to add/remove shortcut\" matTooltipPosition=\"below\">\r\n        <mat-select placeholder=\"Select favorite\" [(value)]=\"favorites\" multiple>\r\n            <mat-option *ngFor=\"let item of menuItems\" [value]=\"item\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>{{item.title}}</span><mat-icon class=\"secondary-text-color\">{{item.icon}}</mat-icon>\r\n              </div>              \r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorites-container {\n  position: relative;\n  font-size: 14px; }\n  .favorites-container:after {\n    font-family: 'Material Icons';\n    content: \"\\e87d\";\n    font-size: 24px;\n    position: absolute;\n    right: -14px;\n    top: 12px;\n    pointer-events: none;\n    cursor: pointer; }\n  .favorites-container .mat-form-field {\n    width: 0 !important;\n    margin: 0 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGZhdm9yaXRlc1xcZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUZuQjtJQUlRLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7RUFYdkI7SUFjUSxtQkFBa0I7SUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlcy1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICAgICAgY29udGVudDogXCJcXGU4N2RcIjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTRweDtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(menuService) {
        this.menuService = menuService;
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems().filter(function (menu) { return menu.routerLink != null || menu.href != null; });
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/theme/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/theme/components/favorites/favorites.component.scss")]
        }),
        __metadata("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">  \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px; }\n\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxmbGFncy1tZW51XFxmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUh6QjtFQU1RLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZ3N7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
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


var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__(/*! ./flags-menu.component.html */ "./src/app/theme/components/flags-menu/flags-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
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

var document = window.document;
var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"center center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" fxLayoutAlign=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu mat-elevation-z1\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-menu-item {\n  position: relative;\n  width: 100%; }\n  .horizontal-menu-item .mat-button {\n    height: 64px;\n    font-weight: 400;\n    border-radius: 0; }\n  .horizontal-menu-item .mat-button.parent-item .mat-button-wrapper {\n      display: flex;\n      align-items: center;\n      width: 100%; }\n  .horizontal-menu-item .mat-button.parent-item .horizontal-menu-icon {\n      padding: 7px;\n      border-radius: 50%; }\n  .horizontal-menu-item .horizontal-menu-icon {\n    margin-right: 8px; }\n  .horizontal-menu-item .horizontal-sub-menu {\n    position: absolute;\n    width: 190px;\n    max-height: 0;\n    overflow: hidden;\n    z-index: 2;\n    transition: max-height 0.25s ease-out; }\n  .horizontal-menu-item .horizontal-sub-menu .mat-button {\n      width: 100%;\n      height: 36px; }\n  .horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible; }\n  .horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcaG9yaXpvbnRhbC1tZW51XFxob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUZmO0lBSVEsWUNGcUI7SURHckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBTnhCO01BU2dCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0VBWDNCO01BY2dCLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQWZsQztJQW9CUSxpQkFBaUIsRUFBQTtFQXBCekI7SUF1QlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFHVixxQ0FBcUMsRUFBQTtFQTlCN0M7TUFnQ1ksV0FBVztNQUNYLFlBQVksRUFBQTtFQUl4QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLFVBQVU7RUFDVixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAkaG9yaXpvbnRhbC1tZW51LWhlaWdodDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgJi5wYXJlbnQtaXRlbXsgICAgICAgIFxyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1tZW51LWljb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtbWVudS1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7IFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufSIsIiRtYWluLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogNjRweDsgXHJcbiRmb290ZXItdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xyXG4kY29tcGFjdC1zaWRlbmF2LXdpZHRoOiAxNzBweDtcclxuJG1pbmktc2lkZW5hdi13aWR0aDogNjZweDsiXX0= */"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuParentId", void 0);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__(/*! ./horizontal-menu.component.html */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    };
    MenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id == menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    MenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    MenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id == menuId; })[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(function (item) {
                if (item.id != menuId) {
                    var subMenu = document.getElementById('sub-menu-' + item.id);
                    var menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    };
    MenuService.prototype.closeAllSubMenus = function () {
        var menu = document.getElementById("vertical-menu");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

var verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](111, 'Customers', '/customers', null, 'group', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1111, 'Search', '/customers/search', null, 'person_search', null, false, 111),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1112, 'Create Customer', '/customers/create-customer', null, 'person_add', null, false, 111),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](222, 'Contracts', '/contracts', null, 'description', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2221, 'Search', '/contracts/search', null, 'plagiarism', null, false, 222),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2222, 'Create Contract', '/contracts/create-contract', null, 'note_add', null, false, 222),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Search', '/search', null, 'search', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Schedule', '/schedule', null, 'event_note', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder_open', null, true, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder_open', null, true, 141),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder_open', null, true, 142),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](201, 'Artigos', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](202, 'Categorias', null, null, 'view_module', null, true, 201),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](203, 'Nova Categoria', '/categorias/nova', null, 'work', null, false, 202),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](204, 'Listar Categorias', '/categorias', null, 'view_list', null, false, 202)
    /*  new Menu (202, 'Categorias', '/categorias', null, 'folder_open', null, false, 201),
     new Menu (203, 'Subcategorias', '/subcategorias', null, 'folder_open', null, false, 201),
     new Menu (204, 'Produtos', '/produtos', null, 'store', null, false, 201),
     new Menu (205, 'Nova Categoria', '/categorias/nova', null, 'work', null, false, 201) */
];
var horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Search', '/search', null, 'search', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Schedule', '/schedule', null, 'event_note', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)
];


/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px; }\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 100%;\n  font-weight: 400;\n  border-radius: 0; }\n\n.menu-item .mat-button .menu-icon {\n    margin-right: 12px;\n    padding: 7px;\n    border-radius: 50%; }\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n    transform: rotate(180deg); }\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px; }\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out; }\n\n.sub-menu .sub-menu .mat-button {\n    padding-left: 40px; }\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 60px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 80px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 100px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 120px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 140px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 160px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 180px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 200px; }\n\n.sub-menu .mat-button {\n    padding-left: 20px; }\n\n.sub-menu.show {\n    max-height: 900px;\n    transition: max-height 0.25s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHZlcnRpY2FsLW1lbnVcXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdiO0VBRVEsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFQeEI7SUFTWSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQVg5QjtJQWlCZ0IseUJBQXlCLEVBQUE7O0FBakJ6QztFQXNCUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFFSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBR2hCLHFDQUFxQyxFQUFBOztBQU56QztJQ3pCZ0Isa0JBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0Isa0JBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0Isa0JBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQ3pCZ0IsbUJBQXVCLEVBQUE7O0FEeUJ2QztJQVFRLGtCQUFrQixFQUFBOztBQVIxQjtJQVdRLGlCQUFpQjtJQUdqQixvQ0FBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTNweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiAwOyAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAubWVudS1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    VerticalMenuComponent.prototype.onClick = function (menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuParentId", void 0);
    VerticalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__(/*! ./vertical-menu.component.html */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text secondary-text-color\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\" [ngClass]=\"meeting.bgColor\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text secondary-text-color\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px; }\n\n.messages .content {\n  padding: 0;\n  height: 260px; }\n\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n  border-radius: 50%; }\n\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px; }\n\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px; }\n\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left; }\n\n.messages .mat-button {\n  padding: 8px; }\n\n.messages .mat-button .mat-button-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: start; }\n\n.messages .mat-button .mat-icon {\n    height: 16px;\n    font-size: 12px;\n    width: 12px;\n    vertical-align: middle; }\n\n.messages .row-1 {\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFIcEI7RUFNUSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQVByQjtFQVVRLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBWjFCO0VBZVEsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFqQnpCO0VBb0JRLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBdEJ6QjtFQXlCUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUE1QnhCO0VBK0JRLFlBQVksRUFBQTs7QUEvQnBCO0lBaUNZLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBbkM5QjtJQXNDWSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUF6Q2xDO0VBNkNRLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXN7XHJcbiAgICAubWF0LXRhYi1sYWJlbHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIHNwYW4ubmFtZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLmluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH0gIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdy0xe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTNweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.openMessagesMenu = function () {
        this.trigger.openMenu();
        this.selectedTab = 0;
    };
    MessagesComponent.prototype.onMouseLeave = function () {
        this.trigger.closeMenu();
    };
    MessagesComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], MessagesComponent.prototype, "trigger", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/theme/components/messages/messages.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/theme/components/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'annular.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                bgColor: 'gradient-purple'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                bgColor: 'gradient-indigo'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                bgColor: 'gradient-teal'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                bgColor: 'gradient-red'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                bgColor: 'gradient-orange'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-menu-outer\" [perfectScrollbar]=\"psConfig\" [disabled]=\"settings.fixedSidenavUserContent\">    \r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block\" [class.py-3]=\"settings.menuType != 'mini'\" [class.py-2]=\"settings.menuType == 'mini'\">\r\n        <img src=\"assets/img/users/default-avatar.png\" alt=\"user-image\">\r\n        <h2 *ngIf=\"settings.menuType != 'mini'\" class=\"mt-2\">ADMX</h2>\r\n        <p *ngIf=\"settings.menuType == 'default'\" class=\"secondary-text-color\">ADMX EB23</p>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div id=\"vertical-menu\" [perfectScrollbar]=\"psConfig\" [disabled]=\"!settings.fixedSidenavUserContent\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-block img {\n  border-radius: 50%;\n  width: 95px;\n  height: 95px;\n  border: 1px solid rgba(0, 0, 0, 0.12); }\n\n.user-block h2 {\n  font-size: 16px;\n  font-weight: 400; }\n\n.user-block p {\n  font-size: 13px; }\n\n.sidenav-menu-outer {\n  height: 100%; }\n\n#vertical-menu.ps {\n  height: calc(100% - 180px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQWlDLEVBQUE7O0FBTHpDO0VBUVEsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQVR4QjtFQVlRLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJsb2Nre1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG4uc2lkZW5hdi1tZW51LW91dGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxufVxyXG4jdmVydGljYWwtbWVudS5wc3tcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.psConfig = {
            wheelPropagation: true
        };
        this.settings = this.appSettings.settings;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems();
    };
    SidenavComponent.prototype.ngDoCheck = function () {
        if (this.settings.fixedSidenav) {
            if (this.psConfig.wheelPropagation == true) {
                this.psConfig.wheelPropagation = false;
            }
        }
        else {
            if (this.psConfig.wheelPropagation == false) {
                this.psConfig.wheelPropagation = true;
            }
        }
    };
    SidenavComponent.prototype.closeSubMenus = function () {
        var menu = document.getElementById("vertical-menu");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/theme/components/sidenav/sidenav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/theme/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/top-info-content/top-info-content.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/components/top-info-content/top-info-content.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"info-content has-bg-image\" [class.show]=\"showInfoContent\">\r\n    <button mat-mini-fab color=\"warn\" class=\"close-btn\" (click)=\"closeInfoContent(showInfoContent)\"><mat-icon>close</mat-icon></button>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"py-3 col\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/img/users/user.jpg\" class=\"mat-elevation-z2\" alt=\"\">\r\n            <div class=\"user-details px-4\">\r\n                <h2>Xavier Francisco</h2>\r\n                <h3 class=\"secondary-text-color\">Senior developer</h3>\r\n                <p class=\"secondary-text-color mt-1\">Member since May. 2016</p>\r\n                <div class=\"secondary-text-color\">\r\n                    <button mat-icon-button matTooltip=\"Facebook\" class=\"mx-1\">\r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                        </svg>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Twitter\" class=\"mx-1\">\r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                        </svg>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Google\" class=\"mx-1\">\r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\r\n                        </svg>\r\n                    </button>\r\n                </div>\r\n            </div> \r\n        </div>                          \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"35\" fxFlex.sm=\"50\" ngClass.xs=\"pb-4\" class=\"top-contact-form col\">\r\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\" class=\"px-2\">            \r\n            <div fxFlex=\"100\" class=\"\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Subject\" formControlName=\"subject\" required>\r\n                    <mat-error *ngIf=\"contactForm.controls.subject.errors?.required\">Subject is required</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Message\" formControlName=\"message\" required>\r\n                    <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\r\n                </mat-form-field>\r\n            </div> \r\n            <div class=\"w-100 mt-1 text-center\">\r\n                <button mat-raised-button color=\"accent\" type=\"submit\">\r\n                    <mat-icon class=\"mr-2\">send</mat-icon>Send\r\n                </button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxShow=\"false\" fxShow.gt-xs class=\"py-3 col\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"controls secondary-text-color\">\r\n            <mat-checkbox *ngFor=\"let control of controls\" class=\"my-1\" [(ngModel)]=\"control.checked\" labelPosition=\"after\">\r\n                {{control.name}}\r\n            </mat-checkbox>\r\n        </div>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/top-info-content/top-info-content.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/components/top-info-content/top-info-content.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-content {\n  font-size: 14px;\n  max-height: 0px !important;\n  text-align: center;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out; }\n  .info-content .col {\n    opacity: 0;\n    transition: 1s; }\n  .info-content .close-btn {\n    position: absolute;\n    top: 8px;\n    right: 8px; }\n  .info-content .user-details h2, .info-content .user-details h3 {\n    font-weight: 400; }\n  .info-content .user-details p {\n    font-size: 13px; }\n  .info-content img {\n    border-radius: 50%;\n    width: 130px;\n    height: 130px; }\n  .info-content.show {\n    max-height: 500px !important;\n    transition: max-height 0.2s ease-in; }\n  .info-content.show .col {\n      opacity: 1; }\n  .info-content.show img, .info-content.show .close-btn {\n      animation: scale 0.6s ease-out; }\n  .info-content.has-bg-image {\n    background-image: url('header-bg.png');\n    background-blend-mode: overlay;\n    background-size: 300px; }\n  .info-content .top-contact-form {\n    border-style: solid;\n    border-width: 0 1px; }\n  .info-content .top-contact-form form {\n      max-width: 280px;\n      margin: 0 auto; }\n  .info-content .controls {\n    width: 120px;\n    margin: 0 auto; }\n  @keyframes scale {\n  5% {\n    transform: scale(0.5); }\n  50% {\n    transform: scale(1.1); }\n  100% {\n    transform: scale(1); } }\n  @media screen and (min-width: 960px) {\n  .info-content.has-bg-image {\n    background-size: 480px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy90b3AtaW5mby1jb250ZW50L0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFx0b3AtaW5mby1jb250ZW50XFx0b3AtaW5mby1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQyxFQUFBO0VBTHhDO0lBT1EsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQVJ0QjtJQVdRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVSxFQUFBO0VBYmxCO0lBaUJZLGdCQUFnQixFQUFBO0VBakI1QjtJQW9CWSxlQUFlLEVBQUE7RUFwQjNCO0lBd0JRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBMUJyQjtJQTZCUSw0QkFBNEI7SUFDNUIsbUNBQW1DLEVBQUE7RUE5QjNDO01BZ0NZLFVBQVUsRUFBQTtFQWhDdEI7TUFxQ1ksOEJBQThCLEVBQUE7RUFyQzFDO0lBeUNRLHNDQUFpRTtJQUNqRSw4QkFBOEI7SUFDOUIsc0JBQXNCLEVBQUE7RUEzQzlCO0lBOENRLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQS9DM0I7TUFpRFksZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTtFQWxEMUI7SUFzRFEsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQTRCdEI7RUFDSTtJQUNJLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0kscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxtQkFBbUIsRUFBQSxFQUFBO0VBSzNCO0VBQ0k7SUFDSSxzQkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdG9wLWluZm8tY29udGVudC90b3AtaW5mby1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1heC1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIH1cclxuICAgIC5jbG9zZS1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1kZXRhaWxze1xyXG4gICAgICAgIGgyLCBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAuY29se1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcsIC5jbG9zZS1idG57XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZSAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogc2NhbGUgMC42cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZSAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuaGFzLWJnLWltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7IFxyXG4gICAgfVxyXG4gICAgLnRvcC1jb250YWN0LWZvcm17ICAgICAgICBcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxcHg7XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRyb2xze1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNjYWxlIHsgXHJcbiAgICA1JSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUgeyBcclxuICAgIDUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUgeyBcclxuICAgIDUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgeyAgICBcclxuICAgIC5pbmZvLWNvbnRlbnQuaGFzLWJnLWltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDgwcHg7ICAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/top-info-content/top-info-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/components/top-info-content/top-info-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopInfoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopInfoContentComponent", function() { return TopInfoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopInfoContentComponent = /** @class */ (function () {
    function TopInfoContentComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.showInfoContent = false;
        this.onCloseInfoContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.controls = [
            { name: 'Notifications', checked: true },
            { name: 'Tasks', checked: true },
            { name: 'Events', checked: false },
            { name: 'Downloads', checked: true },
            { name: 'Messages', checked: true },
            { name: 'Updates', checked: false },
            { name: 'Settings', checked: true }
        ];
    }
    TopInfoContentComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    TopInfoContentComponent.prototype.onContactFormSubmit = function (values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    };
    TopInfoContentComponent.prototype.closeInfoContent = function (event) {
        this.onCloseInfoContent.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showInfoContent'),
        __metadata("design:type", Boolean)
    ], TopInfoContentComponent.prototype, "showInfoContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TopInfoContentComponent.prototype, "onCloseInfoContent", void 0);
    TopInfoContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-info-content',
            template: __webpack_require__(/*! ./top-info-content.component.html */ "./src/app/theme/components/top-info-content/top-info-content.component.html"),
            styles: [__webpack_require__(/*! ./top-info-content.component.scss */ "./src/app/theme/components/top-info-content/top-info-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TopInfoContentComponent);
    return TopInfoContentComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->        \r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info p-0\">\r\n            <img [src]=\"userImage\" alt=\"user-image\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h2>ADMX</h2>\r\n                <h3 class=\"secondary-text-color\">Senior developer</h3>\r\n                <p class=\"secondary-text-color\">Member since May. 2016</p>\r\n            </div>\r\n        </mat-card>  \r\n        <mat-divider></mat-divider>\r\n        <a mat-menu-item routerLink=\"profile\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <mat-divider></mat-divider>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu .user-info {\n  height: 100px;\n  width: 250px;\n  box-shadow: none !important; }\n  .user-menu .user-info img {\n    border-radius: 50%;\n    width: 80px;\n    height: 80px;\n    border: 1px solid rgba(0, 0, 0, 0.12); }\n  .user-menu .user-info h2 {\n    font-size: 16px;\n    font-weight: 400; }\n  .user-menu .user-info h3 {\n    font-size: 14px;\n    font-weight: 400; }\n  .user-menu .user-info p {\n    font-size: 12px; }\n  .user-menu .mat-menu-item {\n  font-size: 14px;\n  height: 36px;\n  line-height: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTtFQUpuQztJQU1ZLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQyxFQUFBO0VBVGpEO0lBWVksZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBYjVCO0lBZ0JZLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQWpCNUI7SUFvQlksZUFBZSxFQUFBO0VBcEIzQjtFQXdCUSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyAgICAgICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
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

var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
        this.userImage = "assets/img/users/default-avatar.png";
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/theme/components/user-menu/user-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/pipes/pagination/pagination.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    };
    PaginationPipe.prototype.paginate = function (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    PaginationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pagination'
        })
    ], PaginationPipe);
    return PaginationPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.pipe */ "./src/app/theme/pipes/pagination/pagination.pipe.ts");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ],
            exports: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (user) {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    };
    UserSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/theme/utils/app-validators.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]));



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
    production: false,
    // apiUrl: '${API_URL}'
    apiUrl: 'http://localhost:8083'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\malek.gridah\Desktop\projects\orange-care-microservices\orange-care-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map