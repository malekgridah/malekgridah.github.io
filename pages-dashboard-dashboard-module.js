(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/analytics/analytics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/analytics/analytics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"gradient-purple p-0\">\r\n    <mat-card-content>\r\n        <div class=\"w-100 h-400p\" #resizedDiv>\r\n            <ngx-charts-line-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"analytics\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [autoScale]=\"autoScale\"\r\n                [roundDomains]=\"roundDomains\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-line-chart>             \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Profit';
        this.colorScheme = {
            domain: ['#283593', '#039BE5', '#FF5252']
        };
        this.autoScale = true;
        this.roundDomains = true;
        this.previousWidthOfResizedDiv = 0;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.analytics = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["analytics"];
    };
    AnalyticsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    AnalyticsComponent.prototype.ngAfterViewChecked = function () {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            this.analytics = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_1__["analytics"]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizedDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AnalyticsComponent.prototype, "resizedDiv", void 0);
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/pages/dashboard/analytics/analytics.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header\r\n    icon=\"dashboard\" \r\n    desc=\"Welcome to Dashboard !\"\r\n    [hideBreadcrumb]=\"true\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'py-3'\"></app-content-header>\r\n\r\n<div class=\"p-2\">\r\n    <app-tiles></app-tiles>\r\n    <app-info-cards></app-info-cards>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"45\" class=\"p-2\"> \r\n            <app-disk-space></app-disk-space>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"55\" class=\"p-2\">\r\n            <app-todo></app-todo>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"70\" class=\"p-2\"> \r\n            <app-analytics></app-analytics>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\">\r\n            <div fxFlex=\"100\" class=\"p-2\">\r\n                <mat-card class=\"secondary-text-color p-4\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"\">\r\n                        <h2>25,000</h2>\r\n                        <p class=\"text-truncate mx-1\">Overall Performance</p>\r\n                    </div>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"53\"></mat-progress-bar>\r\n                    <p class=\"mt-3 text-truncate\">53% higher than last month</p>\r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"p-2\">\r\n                <mat-card class=\"secondary-text-color p-4\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"\">\r\n                        <h2>73,500</h2>\r\n                        <p class=\"text-truncate mx-1\">Active Installations</p>\r\n                    </div>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"27\" color=\"warn\"></mat-progress-bar>\r\n                    <p class=\"mt-3 text-truncate\">27% less than last month</p>\r\n                </mat-card>\r\n            </div>       \r\n            <div fxFlex=\"100\" class=\"p-2\">\r\n                <mat-card class=\"secondary-text-color p-4\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"\">\r\n                        <h2>81,750</h2>\r\n                        <p class=\"text-truncate mx-1\">Total downloads</p>\r\n                    </div>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"68\"></mat-progress-bar>\r\n                    <p class=\"mt-3 text-truncate\">68% higher than last month</p>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <app-team></app-team>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.data.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.data.ts ***!
  \***************************************************/
/*! exports provided: orders, products, customers, refunds, disk_space, analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders", function() { return orders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customers", function() { return customers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refunds", function() { return refunds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disk_space", function() { return disk_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analytics", function() { return analytics; });
var orders = [
    {
        name: 'Orders',
        series: [
            {
                name: "1980",
                value: 21632
            }
        ]
    }
];
var products = [
    {
        "name": "Product-1",
        "value": 69400
    },
    {
        "name": "Product-2",
        "value": 59400
    },
    {
        "name": "Product-3",
        "value": 82400
    },
    {
        "name": "Product-4",
        "value": 73400
    },
    {
        "name": "Product-5",
        "value": 25400
    },
    {
        "name": "Product-6",
        "value": 23400
    },
    {
        "name": "Product-7",
        "value": 49300
    },
    {
        "name": "Product-8",
        "value": 55400
    },
    {
        "name": "Product-9",
        "value": 37400
    },
    {
        "name": "Product-10",
        "value": 65220
    },
    {
        "name": "Product-11",
        "value": 79400
    },
    {
        "name": "Product-12",
        "value": 58400
    },
    {
        "name": "Product-13",
        "value": 41400
    },
    {
        "name": "Product-14",
        "value": 37400
    },
    {
        "name": "Product-15",
        "value": 33700
    },
    {
        "name": "Product-16",
        "value": 42700
    },
    {
        "name": "Product-17",
        "value": 52700
    },
    {
        "name": "Product-18",
        "value": 62700
    }
];
var customers = [
    {
        name: 'Customers',
        series: [
            {
                name: "2000",
                value: 34502
            }
        ]
    }
];
var refunds = [
    {
        "name": "Item-1",
        "value": 23701
    },
    {
        "name": "Item-2",
        "value": 33701
    },
    {
        "name": "Item-3",
        "value": 63701
    },
    {
        "name": "Item-4",
        "value": 52701
    },
    {
        "name": "Item-5",
        "value": 73701
    },
    {
        "name": "Item-6",
        "value": 43701
    },
    {
        "name": "Item-7",
        "value": 83701
    },
    {
        "name": "Item-8",
        "value": 29701
    },
    {
        "name": "Item-9",
        "value": 69701
    },
    {
        "name": "Item-10",
        "value": 58701
    },
    {
        "name": "Item-11",
        "value": 65701
    },
    {
        "name": "Item-12",
        "value": 47701
    },
    {
        "name": "Item-13",
        "value": 41701
    },
    {
        "name": "Item-14",
        "value": 25701
    },
    {
        "name": "Item-15",
        "value": 35701
    }
];
var disk_space = [
    {
        "name": "Disk C:",
        "value": 178
    },
    {
        "name": "Disk D:",
        "value": 340
    },
    {
        "name": "Disk E:",
        "value": 280
    }
];
var analytics = [
    {
        name: 'Company 1',
        series: [
            {
                name: '2010',
                value: 31632
            },
            {
                name: '2011',
                value: 42589
            },
            {
                name: '2012',
                value: 52458
            },
            {
                name: '2013',
                value: 69632
            },
            {
                name: '2014',
                value: 52305
            },
            {
                name: '2015',
                value: 72412
            },
            {
                name: '2016',
                value: 66285
            },
            {
                name: '2017',
                value: 49855
            }
        ]
    },
    {
        name: 'Company 2',
        series: [
            {
                name: '2010',
                value: 61632
            },
            {
                name: '2011',
                value: 68589
            },
            {
                name: '2012',
                value: 55458
            },
            {
                name: '2013',
                value: 62632
            },
            {
                name: '2014',
                value: 38305
            },
            {
                name: '2015',
                value: 41412
            },
            {
                name: '2016',
                value: 32285
            },
            {
                name: '2017',
                value: 31855
            }
        ]
    },
    {
        name: 'Company 3',
        series: [
            {
                name: '2010',
                value: 55632
            },
            {
                name: '2011',
                value: 63589
            },
            {
                name: '2012',
                value: 70458
            },
            {
                name: '2013',
                value: 79632
            },
            {
                name: '2014',
                value: 59305
            },
            {
                name: '2015',
                value: 56412
            },
            {
                name: '2016',
                value: 49285
            },
            {
                name: '2017',
                value: 38855
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tiles/tiles.component */ "./src/app/pages/dashboard/tiles/tiles.component.ts");
/* harmony import */ var _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info-cards/info-cards.component */ "./src/app/pages/dashboard/info-cards/info-cards.component.ts");
/* harmony import */ var _disk_space_disk_space_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./disk-space/disk-space.component */ "./src/app/pages/dashboard/disk-space/disk-space.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/pages/dashboard/todo/todo.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/pages/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./team/team.component */ "./src/app/pages/dashboard/team/team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_8__["TilesComponent"],
                _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_9__["InfoCardsComponent"],
                _disk_space_disk_space_component__WEBPACK_IMPORTED_MODULE_10__["DiskSpaceComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_12__["AnalyticsComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/disk-space/disk-space.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/disk-space/disk-space.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Disk Space</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">Explode Slices</mat-checkbox>\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">Show Labels</mat-checkbox>\r\n        </div>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-pie-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [legend]=\"showLegend\"\r\n                [explodeSlices]=\"explodeSlices\"\r\n                [labels]=\"showLabels\"\r\n                [doughnut]=\"doughnut\"\r\n                [gradient]=\"gradient\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-chart>   \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/disk-space/disk-space.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/disk-space/disk-space.component.ts ***!
  \********************************************************************/
/*! exports provided: DiskSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskSpaceComponent", function() { return DiskSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var DiskSpaceComponent = /** @class */ (function () {
    function DiskSpaceComponent() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    DiskSpaceComponent.prototype.ngOnInit = function () {
        this.data = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["disk_space"];
    };
    DiskSpaceComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DiskSpaceComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.data = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_1__["disk_space"]); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizedDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DiskSpaceComponent.prototype, "resizedDiv", void 0);
    DiskSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disk-space',
            template: __webpack_require__(/*! ./disk-space.component.html */ "./src/app/pages/dashboard/disk-space/disk-space.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DiskSpaceComponent);
    return DiskSpaceComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/info-cards/info-cards.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/info-cards/info-cards.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" #resizedDiv>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\"> \r\n        <mat-card class=\"p-0 gradient-purple\">\r\n            <div class=\"py-2 px-3\" fxLayoutAlign=\"space-between center\">\r\n                <p>Products profit</p>\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <mat-icon class=\"icon-sm mx-1\">trending_up</mat-icon>\r\n                    <span>38%</span>\r\n                </div>\r\n            </div>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"products\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                   \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\"> \r\n        <mat-card class=\"p-0 gradient-teal\">\r\n            <div class=\"py-2 px-3\" fxLayoutAlign=\"space-between center\">\r\n                <p>Total orders</p>\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <mat-icon class=\"icon-sm mx-1\">trending_up</mat-icon>\r\n                    <span>16%</span>\r\n                </div>\r\n            </div>          \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"orders\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\"> \r\n        <mat-card class=\"p-0 gradient-indigo\">\r\n            <div class=\"py-2 px-3\" fxLayoutAlign=\"space-between center\">\r\n                <p>Refunds</p>\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <mat-icon class=\"icon-sm mx-1\">trending_down</mat-icon>\r\n                    <span>-11%</span>\r\n                </div>\r\n            </div>          \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"refunds\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                     \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\"> \r\n        <mat-card class=\"p-0 gradient-amber\">\r\n            <div class=\"py-2 px-3\" fxLayoutAlign=\"space-between center\">\r\n                <p>Customers</p>\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <mat-icon class=\"icon-sm mx-1\">trending_up</mat-icon>\r\n                    <span>17%</span>\r\n                </div>\r\n            </div>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"customers\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                    \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/info-cards/info-cards.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/info-cards/info-cards.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-chip.info-chip {\n  padding: 4px 8px; }\n  .mat-chip.info-chip .mat-icon {\n    margin-right: 4px; }\n  .h-100p {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2luZm8tY2FyZHMvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcaW5mby1jYXJkc1xcaW5mby1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCLEVBQUE7RUFHekI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvaW5mby1jYXJkcy9pbmZvLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jaGlwLmluZm8tY2hpcHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuLmgtMTAwcHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/info-cards/info-cards.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/info-cards/info-cards.component.ts ***!
  \********************************************************************/
/*! exports provided: InfoCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardsComponent", function() { return InfoCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var InfoCardsComponent = /** @class */ (function () {
    function InfoCardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.colorScheme = {
            domain: ['rgba(255,255,255,0.8)']
        };
        this.autoScale = true;
        this.previousWidthOfResizedDiv = 0;
        this.settings = this.appSettings.settings;
    }
    InfoCardsComponent.prototype.ngOnInit = function () {
        this.orders = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["orders"];
        this.products = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.customers = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["customers"];
        this.refunds = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["refunds"];
        this.orders = this.addRandomValue('orders');
        this.customers = this.addRandomValue('customers');
    };
    InfoCardsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    InfoCardsComponent.prototype.addRandomValue = function (param) {
        switch (param) {
            case 'orders':
                for (var i = 1; i < 30; i++) {
                    this.orders[0].series.push({ "name": 1980 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.orders;
            case 'customers':
                for (var i = 1; i < 15; i++) {
                    this.customers[0].series.push({ "name": 2000 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.customers;
            default:
                return this.orders;
        }
    };
    InfoCardsComponent.prototype.ngOnDestroy = function () {
        this.orders[0].series.length = 0;
        this.customers[0].series.length = 0;
    };
    InfoCardsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.orders = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["orders"]); });
            setTimeout(function () { return _this.products = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["products"]); });
            setTimeout(function () { return _this.customers = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["customers"]); });
            setTimeout(function () { return _this.refunds = __spreadArrays(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["refunds"]); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizedDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InfoCardsComponent.prototype, "resizedDiv", void 0);
    InfoCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-cards',
            template: __webpack_require__(/*! ./info-cards.component.html */ "./src/app/pages/dashboard/info-cards/info-cards.component.html"),
            styles: [__webpack_require__(/*! ./info-cards.component.scss */ "./src/app/pages/dashboard/info-cards/info-cards.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], InfoCardsComponent);
    return InfoCardsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/team/team.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/team/team.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.xl=\"25\" fxFlex.lg=\"25\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-1 gradient-indigo team-member\">\r\n            <img src=\"assets/img/profile/michael.jpg\" alt=\"image\" class=\"mat-elevation-z3\">        \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-100\">\r\n                <h3>michael blair</h3>\r\n                <p class=\"mt-1\">menecer</p>\r\n                <a routerLink=\".\" mat-icon-button>\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n                </a>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.xl=\"25\" fxFlex.lg=\"25\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-1 gradient-green team-member\">\r\n            <img src=\"assets/img/profile/tereza.jpg\" alt=\"image\" class=\"mat-elevation-z3\">        \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-100\">\r\n                <h3>tereza stiles</h3>\r\n                <p class=\"mt-1\">designer</p>\r\n                <a routerLink=\".\" mat-icon-button>\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n                </a>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.xl=\"25\" fxFlex.lg=\"25\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-1 gradient-amber team-member\">\r\n            <img src=\"assets/img/profile/adam.jpg\" alt=\"image\" class=\"mat-elevation-z3\">        \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-100\">\r\n                <h3>adam sandler</h3>\r\n                <p class=\"mt-1\">developer</p>\r\n                <a routerLink=\".\" mat-icon-button>\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n                </a>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.xl=\"25\" fxFlex.lg=\"25\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-1 gradient-red team-member\">\r\n            <img src=\"assets/img/profile/ashley.jpg\" alt=\"image\" class=\"mat-elevation-z3\">        \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-100\">\r\n                <h3>ashley ahlberg</h3>\r\n                <p class=\"mt-1\">support</p>\r\n                <a routerLink=\".\" mat-icon-button>\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n                </a>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/team/team.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/team/team.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-member img {\n  width: 89px;\n  border-radius: 2px; }\n\n.team-member h3 {\n  text-transform: capitalize;\n  font-weight: 400; }\n\n.team-member p {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RlYW0vQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFIMUI7RUFNUSwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBUHhCO0VBVVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tbWVtYmVye1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/team/team.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/team/team.component.ts ***!
  \********************************************************/
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
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/pages/dashboard/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/pages/dashboard/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/tiles/tiles.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/tiles/tiles.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">        \r\n        <mat-card class=\"gradient-green tile p-2\"> \r\n            <mat-icon>monetization_on</mat-icon> \r\n            <h2>$33500</h2>         \r\n            <p>profit</p>            \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">        \r\n        <mat-card class=\"gradient-red tile p-2\"> \r\n            <mat-icon>thumb_up_alt</mat-icon> \r\n            <h2>5300</h2>         \r\n            <p>likes</p>            \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">\r\n        <mat-card class=\"gradient-orange tile p-2\">\r\n            <mat-icon>group</mat-icon> \r\n            <h2>14280</h2>         \r\n            <p>users</p> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">\r\n        <mat-card class=\"gradient-pink tile p-2\">\r\n            <mat-icon>shopping_cart</mat-icon> \r\n            <h2>7520</h2>         \r\n            <p>orders</p> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">\r\n        <mat-card class=\"gradient-gray tile p-2\">\r\n            <mat-icon>pie_chart</mat-icon> \r\n            <h2>$2700</h2>         \r\n            <p>tax</p> \r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-2\">\r\n        <mat-card class=\"gradient-brown tile p-2\">\r\n            <mat-icon>save_alt</mat-icon> \r\n            <h2>12700</h2>         \r\n            <p>downloads</p> \r\n        </mat-card>\r\n    </div>      \r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/tiles/tiles.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/tiles/tiles.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n  text-align: right; }\n  .tile .mat-icon {\n    position: absolute;\n    left: 4px;\n    top: 50%;\n    line-height: 0;\n    font-size: 54px;\n    opacity: 0.3; }\n  .tile h2 {\n    font-weight: 500; }\n  .tile p {\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RpbGVzL0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXHRpbGVzXFx0aWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBO0VBRHJCO0lBR1Esa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFScEI7SUFXUSxnQkFBZ0IsRUFBQTtFQVh4QjtJQWNRLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/tiles/tiles.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/tiles/tiles.component.ts ***!
  \**********************************************************/
/*! exports provided: TilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesComponent", function() { return TilesComponent; });
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

var TilesComponent = /** @class */ (function () {
    function TilesComponent() {
    }
    TilesComponent.prototype.ngOnInit = function () {
    };
    TilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tiles',
            template: __webpack_require__(/*! ./tiles.component.html */ "./src/app/pages/dashboard/tiles/tiles.component.html"),
            styles: [__webpack_require__(/*! ./tiles.component.scss */ "./src/app/pages/dashboard/tiles/tiles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TilesComponent);
    return TilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/todo/todo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/todo/todo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>To Do List</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayoutAlign=\"space-between\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Task to do...\" (keyup)=\"addToDoItem($event)\" [(ngModel)]=\"newTodoText\">\r\n            </mat-form-field>\r\n            <button mat-mini-fab color=\"primary\" (click)=\"addToDoItem($event)\">\r\n               <mat-icon>add</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div perfectScrollbar class=\"todo-list\">\r\n            <mat-selection-list>\r\n                <mat-list-option *ngFor=\"let item of getNotDeleted()\" checkboxPosition=\"before\" (mouseenter)=\"item.isActive=true\" (mouseleave)=\"item.isActive=false\">\r\n                    <div fxLayoutAlign=\"space-between center\">\r\n                        <span class=\"text-truncate\">{{ item.text }}</span>\r\n                        <button mat-icon-button (click)=\"item.deleted = true\" color=\"warn\" *ngIf=\"item.isActive\">\r\n                            <mat-icon>delete_forever</mat-icon> \r\n                        </button>\r\n                    </div>               \r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div>          \r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/todo/todo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/todo/todo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-list {\n  height: 267px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvZG8vQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcdG9kb1xcdG9kby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1saXN0e1xyXG4gICAgaGVpZ2h0OiAyNjdweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/todo/todo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/todo/todo.component.ts ***!
  \********************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/pages/dashboard/todo/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
    }
    TodoComponent.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    TodoComponent.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/pages/dashboard/todo/todo.component.html"),
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]],
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/pages/dashboard/todo/todo.component.scss")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/todo/todo.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/dashboard/todo/todo.service.ts ***!
  \******************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoService = /** @class */ (function () {
    function TodoService() {
        this._todoList = [
            { text: 'Check me out' },
            { text: 'Curabitur dignissim nunc a tellus euismod, quis pretium ipsum convallis' },
            { text: 'Vivamus dapibus pulvinar ipsum, sit amet elementum sapien tincidunt non' },
            { text: 'Praesent viverra nisl a pharetra viverra' },
            { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
            { text: 'Ex has semper alterum, expetenda dignissim' },
            { text: 'Nulla nisl urna, lobortis in leo vel, porta faucibus nulla' },
            { text: 'Simul erroribus ad usu' }
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this._todoList;
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TodoService);
    return TodoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map