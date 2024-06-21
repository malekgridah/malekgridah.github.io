(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customers-customers-module"],{

/***/ "./src/app/pages/customers/create-customer/create-customer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/create-customer/create-customer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header\n        icon=\"person_add\"\n        desc=\"Create Customer\"\n        [hideBreadcrumb]=\"false\"\n        [hasBgImage]=\"true\"\n        [class]=\"'pb-2'\"></app-content-header>\n\n<div fxLayout=\"column\" fxLayoutGap=\"14px\" class=\"p-3\">\n        <div *ngIf=\"appSettings.settings.theme == 'pink-dark'\" class=\"w-100\">\n            <mat-card fxFlex=\"100\" [class.bg-accent]=\"appSettings.settings.theme =='pink-dark'\" class=\"w-100  mat-elevation-z8\">\n                <h2 fxLayoutAlign=\"center center\">{{ pageName }}</h2>\n            </mat-card>\n        </div>\n\n    <div fxLayoutGap=\"14px\" fxLayoutAlign=\"start\">\n        <mat-card fxLayout=\"column\" fxFlex=\"22\" class=\"p-0 w-100 mat-elevation-z8\">\n            <span fxLayoutAlign=\"center center\" [class.bg-accent]=\"appSettings.settings.theme =='pink-dark'\" [class.bg-default-black]=\"appSettings.settings.theme =='red-light'\" class=\" test-height bg-accent\">\n                <strong>Steps</strong>\n            </span>\n            <mat-vertical-stepper (selectionChange)=\"getPageName()\" [linear]=\"true\" #stepper1>\n                <mat-step label=\"Contacts\" [editable]=\"isEditable\" [optional]=\"isOptional\">\n                </mat-step>\n                <mat-step label=\"Billing and payment information\" [editable]=\"isEditable\" [optional]=\"isOptional\">\n                </mat-step>\n                <mat-step label=\"Payment arrangement\" [editable]=\"isEditable\" [optional]=\"isOptional\">\n                </mat-step>\n                <mat-step label=\"Additional information\" [editable]=\"isEditable\" [optional]=\"isOptional\">\n                </mat-step>\n                <mat-step [completed]=\"completed\" [state]=\"state\">\n                    <ng-template matStepLabel>Confirm</ng-template>\n                    You are now done.\n                </mat-step>\n            </mat-vertical-stepper>\n        </mat-card>\n\n        <div>\n            <mat-horizontal-stepper class=\"h-100 bg-default-theme\" [linear]=\"true\" #stepper1>\n                <mat-step>\n                    <mat-accordion fxLayout=\"column\" fxLayoutGap=\"14px\" multi>\n                        <app-custom-panel\n                                [extended]=\"true\"\n                                title=\"Contact Information:\"\n                                subtitle=\"Specify the basic information of a certain customer\"\n                                theme=\"primary\">\n                                <form [style.font-size.px]=\"12\" fxFlexOffset=\"15\" fxFlex=\"70\">\n                                <div class=\"p-3\" fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\">\n                                    <div fxFlex=\"100\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Title</mat-label>\n                                            <mat-select [value]=\"'status'\" required>\n                                                <mat-option [value]=\"'Mr'\"> Mr</mat-option>\n                                                <mat-option [value]=\"'Mrs'\"> Mrs</mat-option>\n                                                <mat-option [value]=\"'Company'\"> Company</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"54\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Street</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>House No</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Zip Code</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>City</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>State</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Country</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                class=\"test-black\"\n                                title=\"Customer Information:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                class=\"test-black\"\n                                title=\"Unassigned:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                    </mat-accordion>\n                    <mat-action-row fxLayoutAlign=\"center center\">\n                        <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                            <button (click)=\"goBack()\" mat-raised-button color=\"warn\" mat-button matStepperPrevious>Back</button>\n                            <button (click)=\"goForward()\" mat-raised-button [color]=\"appSettings.settings.theme =='pink-dark' ? 'accent' : 'primary'\" mat-button matStepperNext>Next</button>\n                        </div>\n                    </mat-action-row>\n                </mat-step>\n                <mat-step>\n                    <mat-accordion fxLayout=\"column\" fxLayoutGap=\"14px\" multi>\n                        <app-custom-panel\n                                title=\"Contact Information:\"\n                                subtitle=\"Specify the basic information of a certain customer\"\n                                theme=\"primary\">\n                            <form [style.font-size.px]=\"12\" fxFlexOffset=\"15\" fxFlex=\"70\">\n                                <div class=\"p-3\" fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\">\n                                    <div fxFlex=\"100\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Title</mat-label>\n                                            <mat-select [value]=\"'status'\" required>\n                                                <mat-option [value]=\"'Mr'\"> Mr</mat-option>\n                                                <mat-option [value]=\"'Mrs'\"> Mrs</mat-option>\n                                                <mat-option [value]=\"'Company'\"> Company</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"48\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"54\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Street</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>House No</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Zip Code</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>City</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>State</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Country</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                title=\"Unassigned:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                    </mat-accordion>\n                    <mat-action-row fxLayoutAlign=\"center center\">\n                        <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                            <button (click)=\"goBack()\" mat-raised-button color=\"warn\" mat-button matStepperPrevious>Back</button>\n                            <button (click)=\"goForward()\" mat-raised-button color=\"primary\" mat-button matStepperNext>Next</button>\n                        </div>\n                    </mat-action-row>\n                </mat-step>\n                <mat-step>\n                    <mat-accordion fxLayout=\"column\" fxLayoutGap=\"14px\" multi>\n                        <app-custom-panel\n                                title=\"Contact Information:\"\n                                subtitle=\"Specify the basic information of a certain customer\"\n                                theme=\"primary\">\n                            <form [style.font-size.px]=\"12\" fxFlexOffset=\"15\" fxFlex=\"70\">\n                                <div class=\"p-3\" fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\">\n                                    <div fxFlex=\"100\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Title</mat-label>\n                                            <mat-select [value]=\"'status'\" required>\n                                                <mat-option [value]=\"'Mr'\"> Mr</mat-option>\n                                                <mat-option [value]=\"'Mrs'\"> Mrs</mat-option>\n                                                <mat-option [value]=\"'Company'\"> Company</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"54\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Street</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>House No</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Zip Code</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>City</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>State</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Country</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                title=\"Unassigned:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                    </mat-accordion>\n                    <mat-action-row fxLayoutAlign=\"center center\">\n                        <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                            <button (click)=\"goBack()\" mat-raised-button color=\"warn\" mat-button matStepperPrevious>Back</button>\n                            <button (click)=\"goForward()\" mat-raised-button color=\"primary\" mat-button matStepperNext>Next</button>\n                        </div>\n                    </mat-action-row>\n                </mat-step>\n                <mat-step>\n                    <mat-accordion fxLayout=\"column\" fxLayoutGap=\"14px\" multi>\n                        <app-custom-panel\n                                title=\"Contact Information:\"\n                                subtitle=\"Specify the basic information of a certain customer\"\n                                theme=\"primary\">\n                            <form [style.font-size.px]=\"12\" fxFlexOffset=\"15\" fxFlex=\"70\">\n                                <div class=\"p-3\" fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\">\n                                    <div fxFlex=\"100\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Title</mat-label>\n                                            <mat-select [value]=\"'status'\" required>\n                                                <mat-option [value]=\"'Mr'\"> Mr</mat-option>\n                                                <mat-option [value]=\"'Mrs'\"> Mrs</mat-option>\n                                                <mat-option [value]=\"'Company'\"> Company</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"54\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Street</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>House No</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Zip Code</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>City</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>State</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Country</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                title=\"Unassigned:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                    </mat-accordion>\n                    <mat-action-row fxLayoutAlign=\"center center\">\n                        <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                            <button (click)=\"goBack()\" mat-raised-button color=\"warn\" mat-button matStepperPrevious>Back</button>\n                            <button (click)=\"goForward()\" mat-raised-button color=\"primary\" mat-button matStepperNext>Next</button>\n                        </div>\n                    </mat-action-row>\n                </mat-step>\n                <mat-step>\n                    <mat-accordion fxLayout=\"column\" fxLayoutGap=\"14px\" multi>\n                        <app-custom-panel\n                                title=\"Contact Information:\"\n                                subtitle=\"Specify the basic information of a certain customer\"\n                                theme=\"primary\">\n                            <form [style.font-size.px]=\"12\" fxFlexOffset=\"15\" fxFlex=\"70\">\n                                <div class=\"p-3\" fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\">\n                                    <div fxFlex=\"100\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Title</mat-label>\n                                            <mat-select [value]=\"'status'\" required>\n                                                <mat-option [value]=\"'Mr'\"> Mr</mat-option>\n                                                <mat-option [value]=\"'Mrs'\"> Mrs</mat-option>\n                                                <mat-option [value]=\"'Company'\"> Company</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>First Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Last Name</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"54\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Street</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>House No</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"23\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Zip Code</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>City</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>State</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"33.3\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Country</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Email</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"50\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                                        <mat-form-field appearance=\"outline\">\n                                            <mat-label>Phone</mat-label>\n                                            <input matInput required>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </form>\n                        </app-custom-panel>\n                        <app-custom-panel\n                                title=\"Unassigned:\"\n                                subtitle=\"2 tasks\"\n                                theme=\"primary\">\n                            <p>This is the primary content of the panel.</p>\n                        </app-custom-panel>\n                    </mat-accordion>\n                    <mat-action-row fxLayoutAlign=\"center center\">\n                        <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                            <button (click)=\"goBack()\" mat-raised-button color=\"warn\" mat-button matStepperPrevious>Previous</button>\n                            <button (click)=\"done()\" mat-raised-button color=\"primary\" mat-button>Finish</button>\n                        </div>\n                    </mat-action-row>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/customers/create-customer/create-customer.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/create-customer/create-customer.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important; }\n\n::ng-deep .mat-horizontal-content-container {\n  padding: 0 !important; }\n\n.mat-expansion-panel-header-title {\n  font-size: 1rem; }\n\n.test-height {\n  height: 47px;\n  border-radius: 8px 8px 0 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL2NyZWF0ZS1jdXN0b21lci9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFxwYWdlc1xcY3VzdG9tZXJzXFxjcmVhdGUtY3VzdG9tZXJcXGNyZWF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHFCQUFxQixFQUFBOztBQVF2QjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1oscUNBQXFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0b21lcnMvY3JlYXRlLWN1c3RvbWVyL2NyZWF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLzo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuLy8gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuLy99XHJcblxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi50ZXN0LWhlaWdodCB7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vLm1hdC12ZXJ0aWNhbC1jb250ZW50IHtcclxuLy8gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy99XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/customers/create-customer/create-customer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/customers/create-customer/create-customer.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
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




var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(appSetting) {
        this.appSetting = appSetting;
        this.completed = false;
        this.isEditable = false;
        this.isOptional = false;
        this.pageName = 'Contacts';
        this.appSettings = appSetting;
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent.prototype.goBack = function () {
        switch (this.myStepper._getFocusIndex()) {
            case 1:
                this.pageName = 'Contacts';
                break;
            case 2:
                this.pageName = 'Billing and payment information\n';
                break;
            case 3:
                this.pageName = 'Payment arrangement\n';
                break;
            case 4:
                this.pageName = 'Additional information\n';
                break;
            case 5:
                this.pageName = 'Confirm\n';
                break;
        }
        this.myStepper.previous();
    };
    CreateCustomerComponent.prototype.goForward = function () {
        this.myStepper.next();
    };
    CreateCustomerComponent.prototype.done = function () {
        this.state = 'done';
        this.completed = true;
    };
    CreateCustomerComponent.prototype.getPageName = function () {
        console.log(this.myStepper._getFocusIndex());
        switch (this.myStepper._getFocusIndex() + 1) {
            case 0:
                this.pageName = 'Contacts';
                break;
            case 1:
                this.pageName = 'Billing and payment information';
                break;
            case 2:
                this.pageName = 'Payment arrangement';
                break;
            case 3:
                this.pageName = 'Additional information';
                break;
            case 4:
                this.pageName = 'Confirm';
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHorizontalStepper"])
    ], CreateCustomerComponent.prototype, "myStepper", void 0);
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/pages/customers/create-customer/create-customer.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
                }],
            styles: [__webpack_require__(/*! ./create-customer.component.scss */ "./src/app/pages/customers/create-customer/create-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/customers.model.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/customers/customers.model.ts ***!
  \****************************************************/
/*! exports provided: CustomersSearch, CustomersSearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersSearch", function() { return CustomersSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersSearchResult", function() { return CustomersSearchResult; });
var CustomersSearch = /** @class */ (function () {
    function CustomersSearch() {
    }
    return CustomersSearch;
}());

var CustomersSearchResult = /** @class */ (function () {
    function CustomersSearchResult() {
    }
    return CustomersSearchResult;
}());



/***/ }),

/***/ "./src/app/pages/customers/customers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/customers/customers.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-customer/create-customer.component */ "./src/app/pages/customers/create-customer/create-customer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-customer/search-customer.component */ "./src/app/pages/customers/search-customer/search-customer.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers.service */ "./src/app/pages/customers/customers.service.ts");
/* harmony import */ var _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-customer/view-customer.component */ "./src/app/pages/customers/view-customer/view-customer.component.ts");
/* harmony import */ var _view_customer_contract_customer_tab_contract_customer_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-customer/contract-customer-tab/contract-customer-tab.component */ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.ts");
/* harmony import */ var _view_customer_billing_customer_tab_billing_customer_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-customer/billing-customer-tab/billing-customer-tab.component */ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.ts");
/* harmony import */ var _view_customer_customer_details_customer_tab_customer_details_customer_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-customer/customer-details-customer-tab/customer-details-customer-tab.component */ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.ts");
/* harmony import */ var _view_customer_edit_view_customer_edit_view_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-customer/edit-view-customer/edit-view-customer.component */ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_customer_change_status_customer_change_status_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-customer/change-status-customer/change-status-customer.component */ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_5__["SearchCustomerComponent"], data: { breadcrumb: 'Search Customer' } },
    { path: 'create-customer', component: _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomerComponent"], data: { breadcrumb: 'Create Customer' } },
    { path: 'view/:id', component: _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_8__["ViewCustomerComponent"], data: { breadcrumb: 'View Customer' } }
];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_5__["SearchCustomerComponent"],
                _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomerComponent"],
                _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_8__["ViewCustomerComponent"],
                _view_customer_contract_customer_tab_contract_customer_tab_component__WEBPACK_IMPORTED_MODULE_9__["ContractCustomerTabComponent"],
                _view_customer_billing_customer_tab_billing_customer_tab_component__WEBPACK_IMPORTED_MODULE_10__["BillingCustomerTabComponent"],
                _view_customer_customer_details_customer_tab_customer_details_customer_tab_component__WEBPACK_IMPORTED_MODULE_11__["CustomerDetailsCustomerTabComponent"],
                _view_customer_edit_view_customer_edit_view_customer_component__WEBPACK_IMPORTED_MODULE_12__["EditViewCustomerComponent"],
                _view_customer_change_status_customer_change_status_customer_component__WEBPACK_IMPORTED_MODULE_14__["ChangeStatusCustomerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            providers: [
                _customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]
            ],
            entryComponents: [
                _view_customer_edit_view_customer_edit_view_customer_component__WEBPACK_IMPORTED_MODULE_12__["EditViewCustomerComponent"],
                _view_customer_change_status_customer_change_status_customer_component__WEBPACK_IMPORTED_MODULE_14__["ChangeStatusCustomerComponent"]
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/pages/customers/customers.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/customers/customers.service.ts ***!
  \******************************************************/
/*! exports provided: EditCustomer, CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomer", function() { return EditCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCustomer = /** @class */ (function () {
    function EditCustomer() {
    }
    return EditCustomer;
}());

var contractData = [
    { dirNum: '52168629', coCode: 'CONTR0039815090', rpCode: 'Forfait Internet 4G', status: 'd', activationDate: 'Feb 28, 2024' },
    { dirNum: '52184853', coCode: 'CONTR0039815089', rpCode: 'forfait mix 100', status: 'a', activationDate: 'Feb 28, 2024' },
    { dirNum: '52168565', coCode: 'CONTR0039815092', rpCode: 'forfait mix 50', status: 'a', activationDate: 'Feb 28, 2024' },
    { dirNum: '51067371', coCode: 'CONTR0039815844', rpCode: 'forfait mix 50', status: 'o', activationDate: 'Feb 26, 2024' },
    { dirNum: '52169361', coCode: 'CONTR0039815091', rpCode: 'Prepqid mobile', status: 'a', activationDate: 'Feb 28, 2024' },
    { dirNum: '52327645', coCode: 'CONTR0039814518', rpCode: 'forfait mix 20', status: 'a', activationDate: 'Feb 23, 2024' },
    { dirNum: '52182747', coCode: 'CONTR0039815165', rpCode: 'Forfait Internet 4G', status: 's', activationDate: 'Mar 5, 2024' },
    { dirNum: '52168545', coCode: 'CONTR0039815088', rpCode: 'Ghrami Net', status: 'a', activationDate: 'Feb 28, 2024' }
];
var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/bscs/api/customers";
var CustomersService = /** @class */ (function () {
    function CustomersService(httpClient) {
        this.httpClient = httpClient;
    }
    CustomersService.prototype.getContractData = function () {
        return contractData;
    };
    CustomersService.prototype.search = function (searchRequest) {
        console.log(BASE_URL);
        return this.httpClient.post(BASE_URL + '/search', {
            csStatus: searchRequest.csStatus,
            adrLname: searchRequest.adrLname,
            adrFname: searchRequest.adrFname,
            srchCount: searchRequest.srchCount,
            startIndex: searchRequest.startIndex,
            paymentResp: searchRequest.paymentResp,
            csContrResp: searchRequest.csContrResp,
            flagCase: searchRequest.flagCase,
            flagMatchcode: searchRequest.flagMatchcode,
            adrIdno: searchRequest.adrIdno,
            csCode: searchRequest.csCode,
            csIdPub: searchRequest.csIdPub,
            resType: searchRequest.resType,
            resNo: searchRequest.resNo,
            includeResHist: searchRequest.includeResHist
        });
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/pages/customers/search-customer/search-customer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/search-customer/search-customer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header\n        icon=\"person_search\"\n        desc=\"Search For Customer\"\n        [hideBreadcrumb]=\"false\"\n        [hasBgImage]=\"true\"\n        [class]=\"'pb-2'\"></app-content-header>\n\n<div class=\"p-3\">\n    <mat-card class=\"mat-elevation-z4\">\n        <form [formGroup]=\"selectForm\" [style.font-size.px]=\"13\" class=\"filters\" fxLayout=\"row wrap\" fxLayoutGap=\"15px grid\">\n            <div fxFlex=\"25\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                <mat-form-field appearance=\"outline\" matTooltip=\"filter\">\n                    <mat-label>Resource Type</mat-label>\n                    <mat-select formControlName=\"resType\">\n                        <mat-option [value]=\"'smNum'\">Device numbers</mat-option>\n                        <mat-option [value]=\"'devPortNum'\">Device ports</mat-option>\n                        <mat-option [value]=\"'dirNum'\">Directory numbers</mat-option>\n                        <mat-option [value]=\"'portNum'\">Service ports</mat-option>\n                    </mat-select>\n                    <mat-icon matSuffix>sort</mat-icon>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"25\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                <mat-form-field appearance=\"outline\" matTooltip=\"filter\">\n                    <mat-label>Status</mat-label>\n                    <mat-select formControlName=\"csStatus\">\n                        <mat-option [value]=\"'a'\">Active</mat-option>\n                        <mat-option [value]=\"'d'\">Deactive</mat-option>\n                        <mat-option [value]=\"'i'\">Interested</mat-option>\n                        <mat-option [value]=\"'s'\">Suspended</mat-option>\n                    </mat-select>\n                    <mat-icon matSuffix>filter_list</mat-icon>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"25\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                <mat-form-field appearance=\"outline\" matTooltip=\"filter\">\n                    <mat-label>Payment responsible</mat-label>\n                    <mat-select formControlName=\"paymentResp\">\n                        <mat-option [value]=\"'all'\"> All </mat-option>\n                        <mat-option [value]=\"false\"> No </mat-option>\n                        <mat-option [value]=\"true\"> Yes </mat-option>\n                    </mat-select>\n                    <mat-icon matSuffix>reorder</mat-icon>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"25\" fxFlex.xs=\"50\" fxFlex.sm=\"25\">\n                <mat-form-field appearance=\"outline\" matTooltip=\"filter\">\n                    <mat-label>Contract responsible</mat-label>\n                    <mat-select formControlName=\"csContrResp\">\n                        <mat-option [value]=\"'all'\"> All </mat-option>\n                        <mat-option [value]=\"false\"> No </mat-option>\n                        <mat-option [value]=\"true\"> Yes </mat-option>\n                    </mat-select>\n                    <mat-icon matSuffix>list</mat-icon>\n                </mat-form-field>\n            </div>\n        </form>\n        <mat-divider></mat-divider>\n\n<!--        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" fxLayoutGap=\"20px grid\">-->\n\n<!--            <div fxFlex=\"50\" fxFlex.sm=\"50\">-->\n<!--                <div>-->\n<!--                    <mat-form-field [style.font-size.px]=\"14\">-->\n<!--                        <mat-label>Search</mat-label>-->\n<!--                        <input  type=\"text\" matInput #input />-->\n<!--                    </mat-form-field>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div fxFlex=\"50\" fxLayoutAlign=\"end center\">-->\n<!--                <button mat-raised-button color=\"primary\">-->\n<!--        <span matTooltip=\"Search\">Search</span>-->\n<!--                </button>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <mat-divider></mat-divider>-->\n        <div class=\"pt-1\">\n            <div class=\"filters py-3\" fxLayout=\"row wrap\">\n<!--                <h2 fxLayoutAlign=\"center center\" fxFill>Customer Info</h2>-->\n                <div class=\" py-1\" fxFlex=\"68\" fxLayoutGap=\"15px grid\">\n                   <form [formGroup]=\"searchForm\" fxLayoutAlign=\"space-around center\" [style.font-size.px]=\"13\">\n                       <div class=\"filters\" fxLayout=\"row wrap\">\n                           <mat-form-field fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>Resource Number</mat-label>\n                               <input matInput placeholder=\"50000000\" formControlName=\"resNo\">\n                               <mat-hint>Customer last name</mat-hint>\n                           </mat-form-field>\n                           <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>ID document No</mat-label>\n                               <input matInput placeholder=\"01123123\" formControlName=\"adrIdno\">\n                               <mat-hint>Customer last name</mat-hint>\n                           </mat-form-field>\n                           <mat-form-field fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>Last Name</mat-label>\n                               <input matInput placeholder=\"Doe\" formControlName=\"adrLname\">\n                               <mat-hint>Customer last name</mat-hint>\n                           </mat-form-field>\n                           <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>First Name</mat-label>\n                               <input matInput placeholder=\"john\" formControlName=\"adrFname\">\n                               <mat-hint>Customer last name</mat-hint>\n                           </mat-form-field>\n                           <mat-form-field fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>Customer Code</mat-label>\n                               <input matInput placeholder=\"1.10000000\" formControlName=\"csCode\">\n                               <mat-hint>Customer Code</mat-hint>\n                           </mat-form-field>\n                           <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\" appearance=\"outline\">\n                               <mat-label>Public Key</mat-label>\n                               <input matInput placeholder=\"CNT00000001\" formControlName=\"csIdPub\">\n                               <mat-hint>Customer public key</mat-hint>\n                           </mat-form-field>\n                       </div>\n                   </form>\n                </div>\n                <form fxFlexOffset=\"5\" [formGroup]=\"optionForm\">\n                    <div fxLayout=\"column\">\n                        <h3>Search Option</h3>\n                        <span class=\"p-1 example-list-section\">\n                        <ul fxFlexOffset=\"15\">\n                            <li>\n                                <mat-checkbox formControlName=\"flagMatchcode\">Matchcode search for last name</mat-checkbox>\n                            </li>\n                            <li>\n                                <mat-checkbox formControlName=\"flagCase\">Match case</mat-checkbox>\n                            </li>\n                            <li>\n                                <mat-checkbox formControlName=\"includeResHist\">Include history of resource</mat-checkbox>\n                            </li>\n                        </ul>\n                    </span>\n                        <h3>Max. search results</h3>\n                        <span class=\"p-1 example-list-section\">\n                        <mat-form-field fxFlexOffset=\"15\">\n                            <mat-label>Search Count</mat-label>\n                            <input formControlName=\"srchCount\" matInput>\n                        </mat-form-field>\n                    </span>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <mat-card-actions fxLayoutAlign=\"center center\">\n            <button  mat-raised-button (click)=\"resetForm()\" color=\"warn\">Reset</button>\n            <button  mat-raised-button (click)=\"viewFormData()\" color=\"primary\">Search</button>\n        </mat-card-actions>\n\n    </mat-card>\n\n    <mat-card *ngIf=\"show\" class=\"mt-3 mat-elevation-z4\">\n        <mat-card-header>\n            <mat-card-title>Search Result</mat-card-title>\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n            <table mat-table [dataSource]=\"dataSource\">\n                <ng-container matColumnDef=\"custCode\">\n                    <th mat-header-cell *matHeaderCellDef width=\"12%\"> Customer Code </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.csCode}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"public\">\n                    <th mat-header-cell *matHeaderCellDef width=\"12%\"> Public key </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.csIdPub}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"customer\">\n                    <th mat-header-cell *matHeaderCellDef width=\"18%\"> Customer </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.adrLname}} {{element.adrFname}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"city\">\n                    <th mat-header-cell *matHeaderCellDef width=\"13%\"> City </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.adrCity}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"street\">\n                    <th mat-header-cell *matHeaderCellDef width=\"22%\"> Street </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.adrStreet}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef width=\"10%\"> Status </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <mat-chip-list>\n              <span>\n                <mat-chip [class.gradient-red]=\"element.csStatus == 'd'\"\n                          [class.gradient-lime]=\"element.csStatus == 's'\"\n                          [class.gradient-gray]=\"element.csStatus == 'i'\"\n                          [class.gradient-green]=\"element.csStatus == 'a'\">{{ element.csStatus == 'a'\n                    ? 'Active' : element.csStatus == 'd' ? 'Deactive' : element.csStatus == 's' ? 'Suspended' : 'Interested' }} </mat-chip>\n              </span>\n                        </mat-chip-list>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef width=\"10%\">Action</th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <button mat-icon-button\n                                color=\"primary\"\n                                matTooltip=\"edit\">\n                            <mat-icon class=\"icon24\">visibility</mat-icon>\n                        </button>&nbsp;\n                        <button mat-icon-button\n                                color=\"accent\"\n                                matTooltip=\"edit\">\n                            <mat-icon class=\"icon24\">create</mat-icon>\n                        </button>\n                    </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <div *ngIf=\"loading\" [class.mt-5]=\"loading\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <mat-spinner strokeWidth=\"3\" [diameter]=\"50\" color=\"primary\"></mat-spinner>\n            </div>\n\n            <div class=\"mt-5\" *ngIf=\"!loading && (dataSource.data == null || dataSource.data?.length==0)\" fxLayoutAlign=\"center center\">\n                <h3>No Data</h3>\n            </div>\n        </mat-card-content>\n        <mat-card-footer>\n            <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25]\" showFirstLastButtons></mat-paginator>\n        </mat-card-footer>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/customers/search-customer/search-customer.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/search-customer/search-customer.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters .mat-form-field {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\n.example-section {\n  margin: 12px 0; }\n\n.example-margin {\n  margin: 0 12px; }\n\nul {\n  list-style-type: none;\n  margin-top: 4px; }\n\n.section-container {\n  border: 1px solid #c4c6d0;\n  border-radius: 12px; }\n\nmat-form-field {\n  padding: 0 !important; }\n\nform {\n  padding: 0 !important; }\n\n.search-spinner {\n  height: 20px;\n  width: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL3NlYXJjaC1jdXN0b21lci9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFxwYWdlc1xcY3VzdG9tZXJzXFxzZWFyY2gtY3VzdG9tZXJcXHNlYXJjaC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVcsRUFBQTs7QUFJZjtFQUNFLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy9zZWFyY2gtY3VzdG9tZXIvc2VhcmNoLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcnMge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNmQwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLXNwaW5uZXJ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/customers/search-customer/search-customer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/customers/search-customer/search-customer.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustomerComponent", function() { return SearchCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customers.service */ "./src/app/pages/customers/customers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customers_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customers.model */ "./src/app/pages/customers/customers.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchCustomerComponent = /** @class */ (function () {
    function SearchCustomerComponent(appSettings, customersService, fb) {
        this.appSettings = appSettings;
        this.customersService = customersService;
        this.fb = fb;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.show = false;
        this.loading = false;
        this.displayedColumns = ['custCode', 'public', 'customer', 'city', 'street', 'status', 'action'];
        this.settings = this.appSettings.settings;
        this.setInitialForm();
    }
    SearchCustomerComponent.prototype.viewFormData = function () {
        var _this = this;
        this.dataSource.data = [];
        this.show = true;
        this.loading = true;
        this.customersSearch = new _customers_model__WEBPACK_IMPORTED_MODULE_5__["CustomersSearch"]();
        this.customersSearch.adrFname = this.searchForm.get('adrFname').value;
        this.customersSearch.adrLname = this.searchForm.get('adrLname').value;
        this.customersSearch.adrIdno = this.searchForm.get('adrIdno').value;
        this.customersSearch.csCode = this.searchForm.get('csCode').value;
        this.customersSearch.csIdPub = this.searchForm.get('csIdPub').value;
        this.customersSearch.resNo = this.searchForm.get('resNo').value;
        if (this.selectForm.get('csContrResp').value !== 'all') {
            this.customersSearch.csContrResp = this.selectForm.get('csContrResp').value;
        }
        if (this.selectForm.get('paymentResp').value !== 'all') {
            this.customersSearch.paymentResp = this.selectForm.get('paymentResp').value;
        }
        this.customersSearch.csStatus = this.selectForm.get('csStatus').value;
        this.customersSearch.resType = this.selectForm.get('resType').value;
        this.customersSearch.srchCount = this.optionForm.get('srchCount').value;
        this.customersSearch.flagMatchcode = this.optionForm.get('flagMatchcode').value;
        this.customersSearch.flagCase = this.optionForm.get('flagCase').value;
        this.customersSearch.includeResHist = this.optionForm.get('includeResHist').value;
        this.customersService.search(this.customersSearch).subscribe(function (res) {
            console.log(res);
            if (res != null) {
                _this.dataSource.data = res;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                _this.dataSource.data = [];
            }
            _this.loading = false;
        });
    };
    SearchCustomerComponent.prototype.resetForm = function () {
        this.show = false;
        this.loading = false;
        this.setInitialForm();
        this.dataSource.data = [];
    };
    SearchCustomerComponent.prototype.setInitialForm = function () {
        this.selectForm = this.fb.group({
            resType: ['dirNum', []],
            paymentResp: ['all', []],
            csContrResp: ['all', []],
            csStatus: ['a', []],
        });
        this.searchForm = this.fb.group({
            resNo: [null, []],
            adrLname: [null, []],
            adrFname: [null, []],
            adrIdno: [null, []],
            csCode: [null, []],
            csIdPub: [null, []]
        });
        this.optionForm = this.fb.group({
            srchCount: [null, []],
            includeResHist: [false, []],
            flagCase: [false, []],
            flagMatchcode: [true, []],
        });
    };
    SearchCustomerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SearchCustomerComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SearchCustomerComponent.prototype, "sort", void 0);
    SearchCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-customer',
            template: __webpack_require__(/*! ./search-customer.component.html */ "./src/app/pages/customers/search-customer/search-customer.component.html"),
            styles: [__webpack_require__(/*! ./search-customer.component.scss */ "./src/app/pages/customers/search-customer/search-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SearchCustomerComponent);
    return SearchCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  billing-customer-tab works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy92aWV3LWN1c3RvbWVyL2JpbGxpbmctY3VzdG9tZXItdGFiL2JpbGxpbmctY3VzdG9tZXItdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: BillingCustomerTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingCustomerTabComponent", function() { return BillingCustomerTabComponent; });
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

var BillingCustomerTabComponent = /** @class */ (function () {
    function BillingCustomerTabComponent() {
    }
    BillingCustomerTabComponent.prototype.ngOnInit = function () {
    };
    BillingCustomerTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-customer-tab',
            template: __webpack_require__(/*! ./billing-customer-tab.component.html */ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.html"),
            styles: [__webpack_require__(/*! ./billing-customer-tab.component.scss */ "./src/app/pages/customers/view-customer/billing-customer-tab/billing-customer-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BillingCustomerTabComponent);
    return BillingCustomerTabComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between\">\n    <h2 mat-dialog-title>Change Customer Status</h2>\n    <button class=\"close\" mat-icon-button (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <p><strong>Customer: </strong>Malek Gridah</p>\n    <p><strong>Billing Address: </strong>01 Ennasr , Cite Ennasr 3180, Kairouan Tunisia</p>\n    <p fxLayout=\"row \"><strong>Current Status: </strong><mat-chip-list>\n        <mat-chip class=\"gradient-green\">Active</mat-chip>\n    </mat-chip-list></p>\n    <div class=\"mt-2\" fxLayout=\"column\">\n        <mat-form-field [style.font-size.px]=\"12.5\" appearance=\"outline\">\n            <mat-label>Status</mat-label>\n            <mat-hint>New Status</mat-hint>\n            <mat-select [value]=\"'en'\" required>\n                <mat-option [value]=\"'fr'\">French</mat-option>\n                <mat-option [value]=\"'en'\">English</mat-option>\n            </mat-select>\n            <mat-icon matSuffix>face</mat-icon>\n        </mat-form-field>\n        <mat-form-field [style.font-size.px]=\"12.5\" appearance=\"outline\">\n            <mat-label>Reason</mat-label>\n            <mat-hint>Reason for status change</mat-hint>\n            <mat-select [value]=\"'grand'\" required>\n                <mat-option [value]=\"'grand'\">Grand Public</mat-option>\n                <mat-option [value]=\"'grand'\">Customer VIP</mat-option>\n            </mat-select>\n            <mat-icon matSuffix>face</mat-icon>\n        </mat-form-field>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutGap=\"10px\">\n\n    <button mat-flat-button color=\"primary\">Confirm</button>\n    <button mat-flat-button mat-dialog-close color=\"warn\">Cancel</button>\n\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy92aWV3LWN1c3RvbWVyL2NoYW5nZS1zdGF0dXMtY3VzdG9tZXIvY2hhbmdlLXN0YXR1cy1jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ChangeStatusCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusCustomerComponent", function() { return ChangeStatusCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../customers.service */ "./src/app/pages/customers/customers.service.ts");
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



var ChangeStatusCustomerComponent = /** @class */ (function () {
    function ChangeStatusCustomerComponent(dialogRef, customer) {
        this.dialogRef = dialogRef;
        this.customer = customer;
    }
    ChangeStatusCustomerComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ChangeStatusCustomerComponent.prototype.ngOnInit = function () {
    };
    ChangeStatusCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-status-customer',
            template: __webpack_require__(/*! ./change-status-customer.component.html */ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.html"),
            styles: [__webpack_require__(/*! ./change-status-customer.component.scss */ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _customers_service__WEBPACK_IMPORTED_MODULE_2__["EditCustomer"]])
    ], ChangeStatusCustomerComponent);
    return ChangeStatusCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>-->\n<!--  <strong>{{customerId}}</strong>-->\n<!--</p>-->\n\n<mat-card class=\"mt-1 p-0\">\n    <mat-card-header>\n        <mat-card-title>Contracts</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n    <mat-divider></mat-divider>\n        <table mat-table [dataSource]=\"dataSource\">\n            <!-- Checkbox Column -->\n            <ng-container matColumnDef=\"#\">\n                <th mat-header-cell *matHeaderCellDef width=\"7%\">\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                                  [aria-label]=\"checkboxLabel()\">\n                    </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                  (change)=\"$event ? selection.toggle(row) : null\"\n                                  [checked]=\"selection.isSelected(row)\"\n                                  [aria-label]=\"checkboxLabel(row)\">\n                    </mat-checkbox>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"dirNum\">\n                <th mat-header-cell *matHeaderCellDef height=\"30px\" width=\"10%\"> Directory Number </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.dirNum}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"coCode\">\n                <th mat-header-cell *matHeaderCellDef width=\"15%\"> Contract Code </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.coCode}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"rpCode\">\n                <th mat-header-cell *matHeaderCellDef width=\"15%\"> Rate Plan </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.rpCode}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef width=\"13%\"> Contract Status </th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <mat-chip-list>\n              <span>\n                <mat-chip [class.gradient-red]=\"element.status == 'd'\"\n                          [class.gradient-lime]=\"element.status == 's'\"\n                          [class.gradient-gray]=\"element.status == 'o'\"\n                          [class.gradient-green]=\"element.status == 'a'\">{{ element.status == 'a'\n                    ? 'Active' : element.status == 'd' ? 'Deactive' : element.status == 's' ? 'Suspended' : 'Interested' }} </mat-chip>\n              </span>\n                    </mat-chip-list>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"activationDate\">\n                <th mat-header-cell *matHeaderCellDef width=\"20%\"> Activation Date </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.activationDate}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef width=\"20%\">Action</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <button mat-icon-button\n                            color=\"primary\"\n                            matTooltip=\"edit\">\n                        <mat-icon class=\"icon24\">visibility</mat-icon>\n                    </button>&nbsp;\n                    <button mat-icon-button\n                            color=\"warn\"\n                            matTooltip=\"delete\">\n                        <mat-icon class=\"icon24\">delete</mat-icon>\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\ntd {\n  height: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL3ZpZXctY3VzdG9tZXIvY29udHJhY3QtY3VzdG9tZXItdGFiL0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0b21lcnNcXHZpZXctY3VzdG9tZXJcXGNvbnRyYWN0LWN1c3RvbWVyLXRhYlxcY29udHJhY3QtY3VzdG9tZXItdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL3ZpZXctY3VzdG9tZXIvY29udHJhY3QtY3VzdG9tZXItdGFiL2NvbnRyYWN0LWN1c3RvbWVyLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogIDEwMCU7XHJcbn1cclxuXHJcbnRkIHtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ContractCustomerTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractCustomerTabComponent", function() { return ContractCustomerTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../customers.service */ "./src/app/pages/customers/customers.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContractCustomerTabComponent = /** @class */ (function () {
    function ContractCustomerTabComponent(appSettings, customersService) {
        this.appSettings = appSettings;
        this.customersService = customersService;
        this.displayedColumns = ['#', 'dirNum', 'coCode', 'rpCode', 'status', 'activationDate', 'action'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.customersService.getContractData());
    }
    /** Whether the number of selected elements matches the total number of rows. */
    ContractCustomerTabComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ContractCustomerTabComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ContractCustomerTabComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + row.dirNum;
    };
    ContractCustomerTabComponent.prototype.ngOnInit = function () {
    };
    ContractCustomerTabComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('customerId'),
        __metadata("design:type", String)
    ], ContractCustomerTabComponent.prototype, "customerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContractCustomerTabComponent.prototype, "paginator", void 0);
    ContractCustomerTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contract-customer-tab',
            template: __webpack_require__(/*! ./contract-customer-tab.component.html */ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.html"),
            styles: [__webpack_require__(/*! ./contract-customer-tab.component.scss */ "./src/app/pages/customers/view-customer/contract-customer-tab/contract-customer-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]])
    ], ContractCustomerTabComponent);
    return ContractCustomerTabComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-details-customer-tab works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy92aWV3LWN1c3RvbWVyL2N1c3RvbWVyLWRldGFpbHMtY3VzdG9tZXItdGFiL2N1c3RvbWVyLWRldGFpbHMtY3VzdG9tZXItdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CustomerDetailsCustomerTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsCustomerTabComponent", function() { return CustomerDetailsCustomerTabComponent; });
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

var CustomerDetailsCustomerTabComponent = /** @class */ (function () {
    function CustomerDetailsCustomerTabComponent() {
    }
    CustomerDetailsCustomerTabComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsCustomerTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details-customer-tab',
            template: __webpack_require__(/*! ./customer-details-customer-tab.component.html */ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.html"),
            styles: [__webpack_require__(/*! ./customer-details-customer-tab.component.scss */ "./src/app/pages/customers/view-customer/customer-details-customer-tab/customer-details-customer-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsCustomerTabComponent);
    return CustomerDetailsCustomerTabComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between\">\n    <h2 mat-dialog-title>Modify Customer Information</h2>\n    <button class=\"close\" mat-icon-button (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n<form [style.font-size.px]=\"12.5\">\n    <div fxLayout=\"row wrap\" fxFlexFill\n         fxLayoutAlign=\"start start\" fxLayoutGap=\"10px grid\">\n\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>First Name</mat-label>\n                <input maxlength=\"20\" id=\"fName\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Last Name</mat-label>\n                <input maxlength=\"20\" id=\"fLame\" matInput required>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n<!--        -->\n        <div fxFlex=\"30\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Street No</mat-label>\n                <input maxlength=\"20\" id=\"streetNumber\" matInput required>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"35\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Street Name</mat-label>\n                <input maxlength=\"20\" id=\"streetName\" matInput required>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"35\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>City</mat-label>\n                <input maxlength=\"20\" id=\"city\" matInput required>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n<!--        -->\n        <div fxFlex=\"33.3\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Zip Code</mat-label>\n                <input maxlength=\"20\" id=\"zip\" matInput required>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"33.3\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>State</mat-label>\n                <input maxlength=\"20\" id=\"state\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"33.3\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Country</mat-label>\n                <input maxlength=\"20\" id=\"country\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n<!--        -->\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Language</mat-label>\n                <mat-select [value]=\"'en'\">\n                    <mat-option [value]=\"'fr'\">French</mat-option>\n                    <mat-option [value]=\"'en'\">English</mat-option>\n                </mat-select>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Customer Group</mat-label>\n                <mat-select [value]=\"'grand'\">\n                    <mat-option [value]=\"'grand'\">Grand Public</mat-option>\n                    <mat-option [value]=\"'grand'\">Customer VIP</mat-option>\n                </mat-select>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n<!--        -->\n        <div fxFlex=\"70\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input maxlength=\"20\" id=\"email\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"30\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input maxlength=\"20\" id=\"password\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n<!--        -->\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Phone</mat-label>\n                <input maxlength=\"20\" id=\"phone\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"50\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Fax</mat-label>\n                <input maxlength=\"20\" id=\"fax\" matInput>\n                <mat-icon matSuffix>face</mat-icon>\n            </mat-form-field>\n        </div>\n    </div>\n</form>\n\n\n\n<mat-dialog-actions fxLayoutGap=\"10px\">\n    <button mat-flat-button color=\"primary\"\n            type=\"submit\">\n        <span>Update</span></button>\n    <button mat-flat-button (click)=\"close()\" color=\"warn\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.close {\n  margin-top: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL3ZpZXctY3VzdG9tZXIvZWRpdC12aWV3LWN1c3RvbWVyL0M6XFxVc2Vyc1xcbWFsZWsuZ3JpZGFoXFxEZXNrdG9wXFxwcm9qZWN0c1xcb3JhbmdlLWNhcmUtbWljcm9zZXJ2aWNlc1xcb3JhbmdlLWNhcmUtdWkvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0b21lcnNcXHZpZXctY3VzdG9tZXJcXGVkaXQtdmlldy1jdXN0b21lclxcZWRpdC12aWV3LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0b21lcnMvdmlldy1jdXN0b21lci9lZGl0LXZpZXctY3VzdG9tZXIvZWRpdC12aWV3LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditViewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViewCustomerComponent", function() { return EditViewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../customers.service */ "./src/app/pages/customers/customers.service.ts");
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



var EditViewCustomerComponent = /** @class */ (function () {
    function EditViewCustomerComponent(dialogRef, customer) {
        this.dialogRef = dialogRef;
        this.customer = customer;
    }
    // editCustomerForm: FormGroup = new FormGroup({
    //   fName: new FormControl('', [Validators.minLength(4)]),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   streetName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   streetNumber: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   city: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   zip: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   country: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   county: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   currency: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   language: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   addressNote: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   customerGroup: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //
    //   phone: new FormControl('', [
    //     Validators.required,
    //     Validators.min(1),
    //     Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    //   ])
    // });
    //
    EditViewCustomerComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    //
    EditViewCustomerComponent.prototype.ngOnInit = function () {
        //   if (this.customer) {
        //     this.editCustomerForm.patchValue(this.customer);
        //   }
    };
    EditViewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-view-customer',
            template: __webpack_require__(/*! ./edit-view-customer.component.html */ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-view-customer.component.scss */ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _customers_service__WEBPACK_IMPORTED_MODULE_2__["EditCustomer"]])
    ], EditViewCustomerComponent);
    return EditViewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/view-customer/view-customer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/view-customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header\n        icon=\"person\"\n        desc=\"Customer Overview - 1.11242661\"\n        [hideBreadcrumb]=\"false\"\n        [hasBgImage]=\"true\"\n        [class]=\"'pb-2'\"></app-content-header>\n<!--desc=\"User: ADMX  Customer: MALEK GRIDAH  CustomerCode: 1.11242661  Customer public key: CNT6483692\"-->\n\n\n<div class=\"div-border p-3\">\n    <mat-card class=\"div-border mat-elevation-z4\">\n        <mat-card-header>\n            <mat-chip-list>\n                <mat-chip class=\"gradient-green\">Active</mat-chip>\n            </mat-chip-list>\n            <mat-card-title> Customer Overview - 1.11242661</mat-card-title>\n    <!--        <mat-card-subtitle>test</mat-card-subtitle>-->\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-content class=\"p-2 pt-3\" fxLayout=\"column\">\n            <div [ngClass]=\"appSettings.settings.theme =='pink-dark' ? 'customer-tabs-border-dark':'customer-tabs-border-light'\" class=\"customers-tabs\" fxLayoutAlign=\"space-between\" fxLayout=\"row wrap\">\n                <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"customer-block\">\n                    <span class=\"gradient-orange\">{{this.getNameAvatar('malek', 'gridah')}}</span>\n                    <h2 class=\"mt-2\">Malek Gridah</h2>\n                </div>\n                <mat-divider [vertical]=\"true\"></mat-divider>\n                <div fxFlex=\"65\">\n                    <!--                <h5>Customer Info</h5>-->\n                    <ul class=\"mt-3\" fxLayout=\"row wrap\">\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Customer:</span> \tBEN AYCHA, SAMED</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">ID doc:</span> 05587591</li>\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Address:</span> rue Senghor Immeuble Yomen Apt 3</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">Password:</span> - </li>\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Status:</span> Active</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">Language:</span> French</li>\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Status valid from:</span> Jan 10, 2011, 12:00:00 AM</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">Nationality:</span> Tunisia</li>\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Customer group:</span> Grand Public</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">Birth date:</span> Jul 2, 1982</li>\n                        <li fxFlex=\"60\"><span fxFlex=\"35\">Billing cycle:</span> Prepaid73</li>\n                        <li fxFlex=\"40\"><span fxFlex=\"30\">Email:</span> - </li>\n                    </ul>\n                    <mat-card-actions>\n                        <button mat-raised-button (click)=\"openDialog()\" color=\"primary\">Edit</button>\n                        <button mat-raised-button (click)=\"openDialogChangeStatus()\" color=\"primary\">Change Status</button>\n                    </mat-card-actions>\n                </div>\n            </div>\n\n\n    <div class=\"mt-3\" fxFlex=\"100\">\n        <mat-tab-group [ngClass]=\"appSettings.settings.theme =='pink-dark' ? 'customer-tabs-border-dark':'customer-tabs-border-light'\" class=\"customers-tabs pb-1\" mat-stretch-tabs>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"mr-2\">description</mat-icon>\n                    Contracts\n                </ng-template>\n                <app-contract-customer-tab [customerId]=\"'1.112234'\"></app-contract-customer-tab>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"mr-2\">payments</mat-icon>\n                    Billing\n                </ng-template>\n                <app-billing-customer-tab></app-billing-customer-tab>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"mr-2\">badge</mat-icon>\n                    Customer Details\n                </ng-template>\n                <app-customer-details-customer-tab>   </app-customer-details-customer-tab> </mat-tab>\n        </mat-tab-group>\n    </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/view-customer.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/view-customer.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  margin-bottom: 10px;\n  font-size: 100%; }\n\nmat-tab-group {\n  width: 100%; }\n\nli span {\n  font-weight: bold;\n  font-size: 105%; }\n\n.customer-block {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.customer-block span {\n  position: relative;\n  /* Ensures the pseudo-element is positioned relative to the span */\n  width: 7rem;\n  height: 7rem;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  /* Adjust as needed */ }\n\n.customer-block span::before {\n  position: absolute;\n  color: white;\n  /* Text color */ }\n\n.customers-tabs {\n  border-radius: 12px;\n  margin-top: 20px; }\n\n.div-border {\n  border-radius: 12px; }\n\n::ng-deep.mat-divider.mat-divider.mat-divider-vertical {\n  border-right: 1px solid #c4c6d0; }\n\n::ng-deep.mat-divider {\n  border-right: 1px solid #c4c6d0; }\n\n.customer-tabs-border-light {\n  border: 1px solid #c4c6d0; }\n\n.full-border-light {\n  border: 1px solid #c4c6d0; }\n\n.customer-tabs-border-dark {\n  border: 1px solid rgba(255, 255, 255, 0.12); }\n\n::ng-deep.mat-tab-label.mat-tab-label-active:not(.mat-tab-disabled),\n::ng-deep.mat-tab-label.mat-tab-label-active.cdk-keyboard-focused:not(.mat-tab-disabled) {\n  color: #ff7900;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL3ZpZXctY3VzdG9tZXIvQzpcXFVzZXJzXFxtYWxlay5ncmlkYWhcXERlc2t0b3BcXHByb2plY3RzXFxvcmFuZ2UtY2FyZS1taWNyb3NlcnZpY2VzXFxvcmFuZ2UtY2FyZS11aS9zcmNcXGFwcFxccGFnZXNcXGN1c3RvbWVyc1xcdmlldy1jdXN0b21lclxcdmlldy1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFBRSxrRUFBQTtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQUUscUJBQUEsRUFBc0I7O0FBRzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFBRSxlQUFBLEVBQWdCOztBQUdoQztFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwyQ0FBMkMsRUFBQTs7QUFHN0M7O0VBRUUsY0FBYztFQUNkLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy92aWV3LWN1c3RvbWVyL3ZpZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5saSBzcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEwNSU7XHJcbn1cclxuXHJcbi5jdXN0b21lci1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b21lci1ibG9jayBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuc3VyZXMgdGhlIHBzZXVkby1lbGVtZW50IGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIHNwYW4gKi9cclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi5jdXN0b21lci1ibG9jayBzcGFuOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgKi9cclxufVxyXG5cclxuLmN1c3RvbWVycy10YWJzIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5kaXYtYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWRpdmlkZXIubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM2ZDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZGl2aWRlcntcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzRjNmQwO1xyXG59XHJcblxyXG4uY3VzdG9tZXItdGFicy1ib3JkZXItbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM2ZDA7XHJcbn1cclxuXHJcbi5mdWxsLWJvcmRlci1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzZkMDtcclxufVxyXG5cclxuLmN1c3RvbWVyLXRhYnMtYm9yZGVyLWRhcmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLm1hdC10YWItbGFiZWwtYWN0aXZlOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXHJcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLm1hdC10YWItbGFiZWwtYWN0aXZlLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xyXG4gIGNvbG9yOiAjZmY3OTAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/customers/view-customer/view-customer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/customers/view-customer/view-customer.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerComponent", function() { return ViewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_view_customer_edit_view_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-view-customer/edit-view-customer.component */ "./src/app/pages/customers/view-customer/edit-view-customer/edit-view-customer.component.ts");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customers.service */ "./src/app/pages/customers/customers.service.ts");
/* harmony import */ var _change_status_customer_change_status_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-status-customer/change-status-customer.component */ "./src/app/pages/customers/view-customer/change-status-customer/change-status-customer.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewCustomerComponent = /** @class */ (function () {
    function ViewCustomerComponent(dialog, appSetting) {
        this.dialog = dialog;
        this.appSetting = appSetting;
        this.appSettings = appSetting;
    }
    ViewCustomerComponent.prototype.ngOnInit = function () {
    };
    ViewCustomerComponent.prototype.getNameAvatar = function (firstName, lastName) {
        return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    };
    ViewCustomerComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_edit_view_customer_edit_view_customer_component__WEBPACK_IMPORTED_MODULE_2__["EditViewCustomerComponent"], {
            width: '600px',
            data: new _customers_service__WEBPACK_IMPORTED_MODULE_3__["EditCustomer"](),
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                console.log('44');
            }
        });
    };
    ViewCustomerComponent.prototype.openDialogChangeStatus = function () {
        var dialogRef = this.dialog.open(_change_status_customer_change_status_customer_component__WEBPACK_IMPORTED_MODULE_4__["ChangeStatusCustomerComponent"], {
            width: '420px',
            data: new _customers_service__WEBPACK_IMPORTED_MODULE_3__["EditCustomer"](),
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                console.log('44');
            }
        });
    };
    ViewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customer',
            template: __webpack_require__(/*! ./view-customer.component.html */ "./src/app/pages/customers/view-customer/view-customer.component.html"),
            styles: [__webpack_require__(/*! ./view-customer.component.scss */ "./src/app/pages/customers/view-customer/view-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], ViewCustomerComponent);
    return ViewCustomerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-customers-customers-module.js.map