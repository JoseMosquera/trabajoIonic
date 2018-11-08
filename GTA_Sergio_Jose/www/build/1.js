webpackJsonp([1],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresPageModule", function() { return JugadoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JugadoresPageModule = /** @class */ (function () {
    function JugadoresPageModule() {
    }
    JugadoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jugadores__["a" /* JugadoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jugadores__["a" /* JugadoresPage */]),
            ],
        })
    ], JugadoresPageModule);
    return JugadoresPageModule;
}());

//# sourceMappingURL=jugadores.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORES; });
var JUGADORES = [
    { nombre: "Pepe", id: 1, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Juan", id: 2, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Paco", id: 3, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Jose", id: 4, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Maria", id: 5, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Sergio", id: 6, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Raul", id: 7, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Marta", id: 8, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Laura", id: 9, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Alfredo", id: 10, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Mario", id: 11, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Luis", id: 12, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Jesus", id: 13, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Manuel", id: 14, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Carmen", id: 15, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Pablo", id: 16, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Fernando", id: 17, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Cristina", id: 18, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Antonio", id: 19, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 },
    { nombre: "Pilar", id: 20, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0 }
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JugadoresPage = /** @class */ (function () {
    function JugadoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = [];
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__["a" /* JUGADORES */].slice(0);
        console.log(this.jugadores);
    }
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores">\n\n      <h2>\n\n        {{ jugador.nombre }}\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ })

});
//# sourceMappingURL=1.js.map