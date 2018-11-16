webpackJsonp([16],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJugadorPageModule", function() { return AddJugadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_jugador__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddJugadorPageModule = /** @class */ (function () {
    function AddJugadorPageModule() {
    }
    AddJugadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_jugador__["a" /* AddJugadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_jugador__["a" /* AddJugadorPage */]),
            ],
        })
    ], AddJugadorPageModule);
    return AddJugadorPageModule;
}());

//# sourceMappingURL=add-jugador.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJugadorPage; });
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



var AddJugadorPage = /** @class */ (function () {
    function AddJugadorPage(navCtrl, navParams, jugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = jugadores;
    }
    AddJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJugadorPage');
    };
    AddJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jugador',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>addJugador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n      <ion-label floating>Titulo:</ion-label>\n      <ion-input name="titulo" [navParam]="notas.titulo"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Descropcion:</ion-label>\n      <ion-input name="descripcion" [navParam]="notas.descripcion"></ion-input>\n    </ion-item>\n  \n    <button ion-button block clear (click)="addNotas()">Añadir</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]) === "function" && _c || Object])
    ], AddJugadorPage);
    return AddJugadorPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-jugador.js.map

/***/ })

});
//# sourceMappingURL=16.js.map