webpackJsonp([10],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEquipoPageModule", function() { return ModalEquipoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_equipo__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalEquipoPageModule = /** @class */ (function () {
    function ModalEquipoPageModule() {
    }
    ModalEquipoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_equipo__["a" /* ModalEquipoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_equipo__["a" /* ModalEquipoPage */]),
            ],
        })
    ], ModalEquipoPageModule);
    return ModalEquipoPageModule;
}());

//# sourceMappingURL=modal-equipo.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalEquipoPage = /** @class */ (function () {
    function ModalEquipoPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.jugadores = {};
    }
    ModalEquipoPage.prototype.ionViewWillLoad = function () {
        this.jugadores = {};
        this.jugadores = this.navParams.get('data');
        console.log(this.jugadores);
    };
    ModalEquipoPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    ModalEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-equipo',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\modal-equipo\modal-equipo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Jugadores</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="cerrarModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let jugador of jugadores">\n          <h2>\n            {{ jugador.nombre }}\n          </h2>\n        </button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\modal-equipo\modal-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalEquipoPage);
    return ModalEquipoPage;
}());

//# sourceMappingURL=modal-equipo.js.map

/***/ })

});
//# sourceMappingURL=10.js.map