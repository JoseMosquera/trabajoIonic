webpackJsonp([0],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendario_calendario__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
        //jornadas: JornadasPage;
    };
    EventModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventModalPage');
    };
    EventModalPage.prototype.cancelar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__calendario_calendario__["a" /* CalendarioPage */]);
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\event-modal\event-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalles del evento</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Empieza: </ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Termina: </ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button full icon-left (click)="save()">\n\n    <ion-icon name="checkmark"></ion-icon> Añadir evento\n\n  </button>\n\n\n\n  <button ion-button full icon-left (click)="cancelar()" color="danger">\n\n      <ion-icon name="close"></ion-icon> Cancelar\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map