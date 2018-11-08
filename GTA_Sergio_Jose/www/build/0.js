webpackJsonp([0],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoPageModule", function() { return EquipoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipo__ = __webpack_require__(697);
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

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_jugadores__ = __webpack_require__(695);
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
    function EquipoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.equipos = [];
        this.jugadores = [];
        this.equipos = __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__["a" /* EQUIPOS */].slice(0);
        this.jugadores = __WEBPACK_IMPORTED_MODULE_3__data_data_jugadores__["a" /* JUGADORES */].slice(0);
        console.log(this.equipos);
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    EquipoPage.prototype.mostrarJugadores = function (id) {
        console.log(id);
        var jugadoresEquipo = [];
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].idEquipo == id) {
                jugadoresEquipo.push(this.jugadores[i].nombre);
            }
        }
        console.log(jugadoresEquipo);
        return jugadoresEquipo;
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Equipo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let equipo of equipos"\n\n      (click)="mostrarJugadores(equipo.id)">\n\n      <h2>\n\n        {{ equipo.nombre }}\n\n      </h2>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EQUIPOS; });
var EQUIPOS = [
    { id: 1, nombre: "Equipo1" },
    { id: 2, nombre: "Equipo2" },
    { id: 3, nombre: "Equipo3" },
    { id: 4, nombre: "Equipo4" }
];
//# sourceMappingURL=data.equipos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map