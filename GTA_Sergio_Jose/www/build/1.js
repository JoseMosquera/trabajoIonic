webpackJsonp([1],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresPageModule", function() { return JugadoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores__ = __webpack_require__(705);
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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
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



var JugadoresPage = /** @class */ (function () {
    function JugadoresPage(navCtrl, navParams, jugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = jugadores;
        this.listjugadores = jugadores.jugadores;
        console.log(this.jugadores);
    }
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage.prototype.addJugador = function () {
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button [navPush]="addJugador">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-3 col-sm>\n\n        Nombre\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        J\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        V\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        E\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        D\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        C\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        F\n\n      </ion-col>\n\n      <ion-col col-2 col-sm>\n\n        Ptos\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let jugador of listjugadores">\n\n      <ion-col col-3 col-sm>\n\n        {{ jugador.nombre }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.j }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.g }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.e }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.p }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.c }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.f }}\n\n      </ion-col>\n\n      <ion-col col-2 col-sm>\n\n        {{ jugador.ptos }}\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]) === "function" && _c || Object])
    ], JugadoresPage);
    return JugadoresPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=jugadores.js.map

/***/ })

});
//# sourceMappingURL=1.js.map