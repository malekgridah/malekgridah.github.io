(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./src/app/pages/chat/chat.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header     \r\n    [title]=\"'Chat'\" \r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-5'\"></app-content-header>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"px-2 chat-toolbar\">\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n            <mat-icon>list</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"currentChat\">\r\n        <mat-list class=\"p-0\">\r\n            <mat-list-item>\r\n                <img matListAvatar [src]=\"currentChat.image\" class=\"author-img\">\r\n            </mat-list-item>\r\n        </mat-list>\r\n        <span class=\"author-name\">{{currentChat.author}}</span>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"personMenu\" #personMenuTrigger=\"matMenuTrigger\">\r\n            <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #personMenu=\"matMenu\" xPosition=\"before\">\r\n            <span (mouseleave)=\"personMenuTrigger.closeMenu()\">\r\n                <button mat-menu-item (click)=\"personInfo.toggle()\">\r\n                    <mat-icon>account_circle</mat-icon>\r\n                    <span>Contact info</span>\r\n                </button>\r\n                <button mat-menu-item>\r\n                    <mat-icon>volume_mute</mat-icon>\r\n                    <span>Mute</span>\r\n                </button>\r\n                <button mat-menu-item> \r\n                    <mat-icon>delete_forever</mat-icon>\r\n                    <span>Clear chat</span>\r\n                </button>\r\n            </span>\r\n        </mat-menu>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\"> \r\n        <mat-card class=\"p-0 chat\">\r\n            <mat-drawer-container class=\"chat-container\">\r\n                <mat-drawer #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"chat-sidenav mat-elevation-z1\" autoFocus=\"false\">\r\n                    <mat-nav-list class=\"p-0 chat-sidenav-list\" perfectScrollbar>\r\n                        <mat-list-item *ngFor=\"let chat of chats\" (click)=\"getChat(chat)\">\r\n                            <img matListAvatar [src]=\"chat.image\">\r\n                            <h6 matLine> {{chat.author}} </h6>\r\n                            <p matLine fxLayout=\"row\" fxLayoutAlign=\"none center\" class=\"secondary-text-color\">\r\n                                <span [ngSwitch]=\"chat.authorStatus\">\r\n                                    <mat-icon *ngSwitchCase=\"'Online'\" class=\"chat-status-icon\">check_circle</mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Offline'\" class=\"chat-status-icon\">highlight_off</mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Away'\" class=\"chat-status-icon\">schedule</mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Do not disturb'\" class=\"chat-status-icon\">not_interested</mat-icon>\r\n                                </span>\r\n                                <span class=\"author-status\">{{chat.authorStatus}}</span>\r\n                            </p>\r\n                        </mat-list-item>\r\n                    </mat-nav-list>\r\n                </mat-drawer>\r\n                \r\n                <div>\r\n                    <div class=\"chat-content\"  [class.actions-visible]=\"talks\" perfectScrollbar>\r\n                        <mat-list *ngIf=\"talks\" class=\"p-0\" >\r\n                            <mat-list-item *ngFor=\"let talk of talks\" class=\"talk-item\">\r\n                                <img matListAvatar [src]=\"talk.image\">\r\n                                <p matLine class=\"message\">\r\n                                    <span [ngClass]=\"(talk.my) ? 'bg-primary' : 'bg-accent'\">{{talk.text}}</span>\r\n                                </p>                             \r\n                                <p matLine class=\"message-date\">\r\n                                    <small>{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>\r\n                                </p> \r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        <div *ngIf=\"!talks\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                            <mat-icon>chat</mat-icon>            \r\n                            <p>Select a interlocutor for talk</p>\r\n                        </div> \r\n                    </div>\r\n                    <mat-card *ngIf=\"talks\" class=\"chat-actions\"> \r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Enter your text...\" (keyup)=\"sendMessage($event)\" [(ngModel)]=\"newMessage\">\r\n                            </mat-form-field>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"scenter center\">\r\n                                <button mat-icon-button type=\"button\">\r\n                                    <mat-icon>attach_file</mat-icon>\r\n                                </button>\r\n                                <button mat-mini-fab color=\"primary\" type=\"button\" (click)=\"sendMessage($event)\">\r\n                                    <mat-icon>send</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                            </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <mat-drawer #personInfo mode=\"over\" position=\"end\" class=\"person-info-sidenav mat-elevation-z1\" autoFocus=\"false\">\r\n                    <div class=\"p-0 h-100\" perfectScrollbar>\r\n\r\n                        <div class=\"bg-primary w-100 text-center\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-2\">\r\n                                <h2>Contact Info</h2>\r\n                                <button mat-icon-button (click)=\"personInfo.toggle()\"><mat-icon>close</mat-icon></button>\r\n                            </div>  \r\n                            <img *ngIf=\"currentChat\" [src]=\"currentChat.image\" class=\"py-2\">\r\n                            <h2 *ngIf=\"currentChat\" class=\"pb-3\">{{currentChat.author}}</h2>\r\n                        </div> \r\n                        <mat-list>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                                <h3 matLine>author@gmail.com</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">call</mat-icon>\r\n                                <h3 matLine>(202) 756-9756</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">location_on</mat-icon>\r\n                                <h3 matLine>2903 Avenue Z, Brooklyn, NY</h3>\r\n                            </mat-list-item>\r\n                        </mat-list>                       \r\n                    </div>\r\n                </mat-drawer>\r\n            \r\n            </mat-drawer-container>\r\n        </mat-card>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-container {\n  height: calc(100vh - (56px + 56px + 148px)); }\n\n.chat-toolbar {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px; }\n\n.chat-toolbar .author-img {\n    width: 34px;\n    height: 34px; }\n\n.chat-toolbar .author-name {\n    font-size: 16px;\n    font-weight: 400; }\n\n.chat {\n  border-radius: 0; }\n\n.chat .chat-actions {\n    padding: 12px; }\n\n.chat .talk-item {\n    padding: 6px 0;\n    height: 100%; }\n\n.chat .message {\n    white-space: unset;\n    text-overflow: unset; }\n\n.chat .message span {\n      padding: 6px 10px;\n      border-radius: 4px;\n      display: inline-block;\n      font-size: 14px; }\n\n.chat .message-date {\n    opacity: 0.8; }\n\n.chat .empty mat-icon {\n    font-size: 220px;\n    height: 220px;\n    width: 220px;\n    opacity: 0.4; }\n\n.chat .empty p {\n    font-size: 18px;\n    opacity: 0.8; }\n\n.chat-status-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px; }\n\n.author-status {\n  font-size: 13px; }\n\n.chat-sidenav {\n  border-right: 1px solid transparent;\n  overflow: hidden; }\n\n.chat-content {\n  padding: 12px;\n  height: calc(100vh - (56px + 56px + 174px)); }\n\n.chat-content.actions-visible {\n    height: calc(100vh - (56px + 56px + 254px)); }\n\n.chat-sidenav-list {\n  height: 100%; }\n\n.person-info-sidenav {\n  width: 280px; }\n\n.person-info-sidenav h2 {\n    font-weight: 400; }\n\n.person-info-sidenav img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%; }\n\n@media (max-width: 960px) {\n  .chat-container {\n    height: calc(100vh - (56px + 56px + 130px)); }\n  .chat-content {\n    height: calc(100vh - (56px + 56px + 154px)); }\n    .chat-content.actions-visible {\n      height: calc(100vh - (56px + 56px + 236px)); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9DOlxcVXNlcnNcXG1hbGVrLmdyaWRhaFxcRGVza3RvcFxccHJvamVjdHNcXG9yYW5nZS1jYXJlLW1pY3Jvc2VydmljZXNcXG9yYW5nZS1jYXJlLXVpL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJDQUFrRixFQUFBOztBQUV0RjtFQUNJLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSHJCO0lBS1EsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFOcEI7SUFTUSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBR1EsYUFBYSxFQUFBOztBQUhyQjtJQU1RLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBUHBCO0lBVVEsa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBOztBQVg1QjtNQWFZLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGVBQWUsRUFBQTs7QUFoQjNCO0lBb0JRLFlBQVksRUFBQTs7QUFwQnBCO0lBd0JZLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUEzQnhCO0lBOEJZLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBSXhCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQ0FBbUM7RUFDbkMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLDJDQUFrRixFQUFBOztBQUZ0RjtJQUlRLDJDQUFrRixFQUFBOztBQUcxRjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUE7O0FBRGhCO0lBR1EsZ0JBQWdCLEVBQUE7O0FBSHhCO0lBTVEsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUFLMUI7RUFDSTtJQUNJLDJDQUFrRixFQUFBO0VBRXRGO0lBQ0ksMkNBQWtGLEVBQUE7SUFEdEY7TUFHUSwyQ0FBa0YsRUFBQSxFQUNyRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uY2hhdC1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JGZvb3Rlci10b29sYmFyLWhlaWdodH0gKyAxNDhweCkpO1xyXG59XHJcbi5jaGF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAuYXV0aG9yLWltZ3tcclxuICAgICAgICB3aWR0aDogMzRweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aG9yLW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAgXHJcbn1cclxuLmNoYXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLmNoYXQtYWN0aW9uc3tcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfSAgICBcclxuICAgIC50YWxrLWl0ZW17XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2V7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0OyAgICAgICBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1kYXRle1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICAgIC5lbXB0eXtcclxuICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY2hhdC1zdGF0dXMtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG4uYXV0aG9yLXN0YXR1c3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uY2hhdC1zaWRlbmF2e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgIFxyXG59XHJcbi5jaGF0LWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMTc0cHgpKTtcclxuICAgICYuYWN0aW9ucy12aXNpYmxle1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDI1NHB4KSk7XHJcbiAgICB9XHJcbn1cclxuLmNoYXQtc2lkZW5hdi1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucGVyc29uLWluZm8tc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7IFxyXG4gICAgLmNoYXQtY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDEzMHB4KSk7XHJcbiAgICB9XHJcbiAgICAuY2hhdC1jb250ZW50e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDE1NHB4KSk7XHJcbiAgICAgICAgJi5hY3Rpb25zLXZpc2libGV7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDIzNnB4KSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.model */ "./src/app/pages/chat/chat.model.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.service */ "./src/app/pages/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(appSettings, chatService) {
        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chats = this.chatService.getChats();
        if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
        }
    };
    ChatComponent.prototype.onWindowResize = function () {
        (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
    };
    ChatComponent.prototype.getChat = function (obj) {
        if (this.talks) {
            this.talks.length = 2;
        }
        this.talks = this.chatService.getTalk();
        this.talks.push(obj);
        this.currentChat = obj;
        this.talks.forEach(function (talk) {
            if (!talk.my) {
                talk.image = obj.image;
            }
        });
        if (window.innerWidth <= 768) {
            this.sidenav.close();
        }
    };
    ChatComponent.prototype.sendMessage = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
                this.talks.push(new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
                this.newMessage = '';
                var chatContainer_1 = document.querySelector('.chat-content');
                if (chatContainer_1) {
                    setTimeout(function () {
                        var nodes = chatContainer_1.querySelectorAll('.mat-list-item');
                        var newChatTextHeight = nodes[nodes.length - 1];
                        chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
                    });
                }
            }
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.talks)
            this.talks.length = 2;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onWindowResize", null);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/chat/chat.component.html"),
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]],
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.model.ts":
/*!******************************************!*\
  !*** ./src/app/pages/chat/chat.model.ts ***!
  \******************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(image, author, authorStatus, text, date, my) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.my = my;
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: routes, ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.component */ "./src/app/pages/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], pathMatch: 'full' }
];
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.model */ "./src/app/pages/chat/chat.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false)
];
var talks = [
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Annular Admin Template?', new Date(year, month, day - 2, hour, minute + 3), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, Annular is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), true)
];
var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    ChatService.prototype.getChats = function () {
        return chats;
    };
    ChatService.prototype.getTalk = function () {
        return talks;
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module.js.map