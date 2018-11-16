webpackJsonp([14],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoPageModule", function() { return EquipoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipo__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EquipoPageModule = /** @class */ (function () {
    function EquipoPageModule() {
    }
    EquipoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__equipo__["a" /* EquipoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__equipo__["a" /* EquipoPage */]),
            ],
        })
    ], EquipoPageModule);
    return EquipoPageModule;
}());

//# sourceMappingURL=equipo.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipoPage = /** @class */ (function () {
    function EquipoPage(navCtrl, navParams, modal, datos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.datos = datos;
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Equipo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let equipo of equipos"\n\n      (click)="mostrarJugadores(equipo.id)">\n\n      <h2>\n\n        {{ equipo.nombre }}\n\n      </h2>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ })

});
//# sourceMappingURL=14.js.map