webpackJsonp([0],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEquipoPageModule", function() { return ModalEquipoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_equipo__ = __webpack_require__(711);
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

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(45);
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
    function ModalEquipoPage(navCtrl, navParams, view, listaJugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.listaJugadores = listaJugadores;
        this.jugadores = [];
        this.jugador = [];
    }
    ModalEquipoPage.prototype.ionViewWillLoad = function () {
        this.jugadores = this.navParams.get('data');
        console.log(this.jugadores);
    };
    ModalEquipoPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    ModalEquipoPage.prototype.titular = function () {
        for (var i = 0; i < this.listaJugadores.jugadores.length; i++) {
            if (this.listaJugadores.jugadores[i].id == this.titulares.id) {
                console.log("hola");
            }
        }
        // for (let i = 0; i < this.titulares.length; i++) {
        //   for (let j = 0; j < this.listaJugadores.jugadores.length; j++) {
        //     if(this.titulares[i]==this.listaJugadores.jugadores[i]){
        //       console.log(this.titulares);
        //       console.log(this.listaJugadores.jugadores);
        //       //this.listaJugadores.jugadores[i].titular = true;
        //     }
        //   }
        // }
    };
    ModalEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-equipo',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\modal-editTitular\modal-equipo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Titulares del Equipo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <h1>Titulares</h1>\n        <div *ngFor="let jugador of jugadores">\n          <ion-item  *ngIf=" jugador.titular == true">\n            <ion-label>{{ jugador.nombre }}</ion-label>\n          </ion-item>\n          </div>\n    </ion-list>\n    <ion-list>\n        <h1>Suplentes</h1>\n        <div *ngFor="let jugador of jugadores">\n          <ion-item  *ngIf=" jugador.titular == false">\n            <ion-label>{{ jugador.nombre }}</ion-label>\n          </ion-item>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\modal-editTitular\modal-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], ModalEquipoPage);
    return ModalEquipoPage;
}());

//# sourceMappingURL=modal-equipo.js.map

/***/ })

});
//# sourceMappingURL=0.js.map