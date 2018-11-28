webpackJsonp([12],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(48);
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
        this.idJugador = jugadores.jugadores.length + 1;
    }
    AddJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJugadorPage');
    };
    AddJugadorPage.prototype.addJugador = function () {
        var jugador = { nombre: this.nombre, id: this.idJugador, idEquipo: this.equipo, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false };
        console.log(jugador);
        this.jugadores.jugadores.push(jugador);
        console.log(this.jugadores.jugadores);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n      icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>addJugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre:</ion-label>\n\n    <ion-input [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Equipo(1, 2, 3 o 4):</ion-label>\n\n    <ion-input type="number" [(ngModel)]="equipo"  name="equipo"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block clear (click)="addJugador()">Añadir</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], AddJugadorPage);
    return AddJugadorPage;
}());

//# sourceMappingURL=add-jugador.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditJugadorPage = /** @class */ (function () {
    function EditJugadorPage(navCtrl, navParams, jugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = jugadores;
        this.jugador = this.navParams.get("jugador");
        console.log(this.jugador);
    }
    EditJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditJugadorPage');
    };
    EditJugadorPage.prototype.actualizarJugador = function () {
        var jugadorN = { nombre: this.nombre, id: this.id, idEquipo: this.idEquipo, j: this.j,
            g: this.g, e: this.e, p: this.p, c: this.c, f: this.f, ptos: this.ptos, titular: false };
        for (var i = 0; i < this.jugadores.jugadores.length; i++) {
            if (this.id == this.jugadores.jugadores[i].id) {
                this.jugadores.jugadores[i] = jugadorN;
                console.log(this.jugadores.jugadores[i]);
            }
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    EditJugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    EditJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\edit-jugador\edit-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n      icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>editJugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" [(ngModel)]="nombre" name="nombre" value="{{ jugador.nombre }}"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>Equipo(1, 2, 3 o 4):</ion-label>\n\n    <ion-input type="number" [(ngModel)]="equipo" name="equipo" value="{{ jugador.idEquipo }}"></ion-input>\n\n  </ion-item>\n\n    \n\n  <ion-item>\n\n    <ion-label floating>Partidos jugados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="j" name="equipo" value="{{ jugador.j }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos ganados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="g" name="equipo" value="{{ jugador.g }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos empatados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="e" name="equipo" value="{{ jugador.e }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos perdidos:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="p" name="equipo" value="{{ jugador.p }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos en casa:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="c" name="equipo" value="{{ jugador.c }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos fuera de casa:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="f" name="equipo" value="{{ jugador.f }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Puntos:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="ptos" name="equipo" value="{{ jugador.ptos }}"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-input  type="hidden" [(ngModel)]="id" name="nombre" value="{{ jugador.id }}"></ion-input>\n\n  \n\n  <button ion-button block clear (click)="actualizarJugador()">Actualizar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\edit-jugador\edit-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], EditJugadorPage);
    return EditJugadorPage;
}());

//# sourceMappingURL=edit-jugador.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarTitularesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__titulares_titulares__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificarTitularesPage = /** @class */ (function () {
    function ModificarTitularesPage(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.jugadores = this.navParams.get("jugadores");
        console.log(this.jugadores);
    }
    ModificarTitularesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarTitularesPage');
    };
    ModificarTitularesPage.prototype.actualizar = function () {
        var cont = 0;
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].titular == true) {
                cont += 1;
                console.log(cont);
            }
        }
        if (cont <= 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__titulares_titulares__["a" /* TitularesPage */], { 'jugadores': this.jugadores });
        }
        else if (cont > 4) {
            this.toast.create({
                message: 'Solo se pueden seleccionar 4 jugadores titulares.',
                duration: 2000,
                position: 'middle'
            }).present();
        }
    };
    ModificarTitularesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modificar-titulares',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\modificar-titulares\modificar-titulares.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Seleccionar titulares</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores">\n\n        <ion-label>{{ jugador.nombre }}</ion-label>\n\n        <ion-checkbox *ngIf="jugador.titular==true; else noTitular" [(ngModel)]="jugador.titular" checked="true"></ion-checkbox>\n\n        <ng-template #noTitular>\n\n            <ion-checkbox *ngIf="jugador.titular==false; else noTitular" [(ngModel)]="jugador.titular" checked="false"></ion-checkbox>\n\n        </ng-template>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button (click)="actualizar()">Actualizar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\modificar-titulares\modificar-titulares.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModificarTitularesPage);
    return ModificarTitularesPage;
}());

//# sourceMappingURL=modificar-titulares.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipo_equipo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jugadores_jugadores__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, afAuth, toast, auth, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.toast.create({
            message: 'BIENVENIDO A LA APLICACIÓN',
            duration: 2000,
            position: 'top'
        }).present();
    };
    HomePage.prototype.cerrarSesion = function () {
        this.auth.logout();
    };
    HomePage.prototype.irPaginaCalendario = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */]);
    };
    HomePage.prototype.irPaginaEquipo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__equipo_equipo__["a" /* EquipoPage */]);
    };
    HomePage.prototype.irPaginaJugadores = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    HomePage.prototype.irPaginaJornadas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__["a" /* JornadasPage */]);
    };
    HomePage.prototype.mostrarMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n        <button ion-button\n\n        icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title>Menú Principal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item (click)="irPaginaCalendario()">\n\n        <ion-icon name="calendar" item-start></ion-icon>\n\n          Calendario\n\n      </ion-item>\n\n\n\n      <ion-item (click)="irPaginaEquipo()">\n\n        <ion-icon name="people" item-start></ion-icon>\n\n          Equipo\n\n      </ion-item>\n\n\n\n      <ion-item (click)="irPaginaJugadores()">\n\n        <ion-icon name="person" item-start></ion-icon>\n\n          Jugadores\n\n      </ion-item>\n\n\n\n      <ion-item (click)="irPaginaJornadas()">\n\n        <ion-icon name="clipboard" item-start></ion-icon>\n\n          Jornadas\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <br>\n\n\n\n    <button ion-button icon-start (click)="cerrarSesion()" full round color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n      Cerrar Sesión\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jornadas_jornadas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_datos_datos__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JugadoresModalPage = /** @class */ (function () {
    function JugadoresModalPage(navCtrl, navParams, dp, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dp = dp;
        this.alertCtrl = alertCtrl;
        this.titulares = this.navParams.get('titulares');
    }
    JugadoresModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresModalPage');
    };
    JugadoresModalPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__jornadas_jornadas__["a" /* JornadasPage */]);
    };
    JugadoresModalPage.prototype.guardar = function (id) {
        if (this.result == 'ganar') {
            this.ganar(id);
        }
        else if (this.result == 'empatar') {
            this.empatar(id);
        }
        else if (this.result == 'perder') {
            this.perder(id);
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'Selecciona una opcion antes de guardar cambios!',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    JugadoresModalPage.prototype.ganar = function (id) {
        this.resultadoFinal += 1;
        for (var i = 0; i < this.dp.jugadores.length; i++) {
            if (this.dp.jugadores[i].id == id) {
                this.dp.jugadores[i].ptos += 1;
                this.dp.jugadores[i].j += 1;
                this.dp.jugadores[i].g += 1;
                console.log(this.dp.jugadores[i]);
            }
        }
    };
    JugadoresModalPage.prototype.empatar = function (id) {
        this.resultadoFinal += 0.5;
        for (var i = 0; i < this.dp.jugadores.length; i++) {
            if (this.dp.jugadores[i].id == id) {
                this.dp.jugadores[i].ptos += 1;
                this.dp.jugadores[i].j += 1;
                this.dp.jugadores[i].e += 1;
                console.log(this.dp.jugadores[i]);
            }
        }
    };
    JugadoresModalPage.prototype.perder = function (id) {
        for (var i = 0; i < this.dp.jugadores.length; i++) {
            if (this.dp.jugadores[i].id == id) {
                this.dp.jugadores[i].j += 1;
                this.dp.jugadores[i].p += 1;
                console.log(this.dp.jugadores[i]);
            }
        }
    };
    JugadoresModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-modal',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores-modal\jugadores-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button\n\n          icon-only (click)="volver()">\n\n            <ion-icon name="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>jugadores-modal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h2>Titulares para esta jornada</h2>\n\n    <ion-list>\n\n    <div *ngFor="let jugador of titulares">\n\n      <ion-item>\n\n        <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-select [(ngModel)]="result">\n\n              <ion-option value="ganar">Ha ganado</ion-option>\n\n              <ion-option value="empatar">Ha empatado</ion-option>\n\n              <ion-option value="perder">Ha perdido</ion-option>\n\n          </ion-select>      \n\n          <input type="hidden" value="jugador.id">\n\n      </ion-item>\n\n    </div>\n\n    <button ion-button (click)="guardar(jugador.id)">Guardar Cambios</button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores-modal\jugadores-modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_datos_datos__["a" /* DatosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_datos_datos__["a" /* DatosProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], JugadoresModalPage);
    return JugadoresModalPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=jugadores-modal.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireAuth } from 'angularfire2/auth';


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.user = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showAlertSucces = function () {
        var alert = this.alertCtrl.create({
            title: 'Info!',
            subTitle: 'Has iniciado sesión correctamente',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "El usuario o contraseña son incorrectos.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>INICIO DE SESIÓN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <form>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input\n\n          [(ngModel)]="user.email"\n\n          name="email"\n\n          type="text"\n\n          autocapitalize="off"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input\n\n          [(ngModel)]="user.password"\n\n          name="password"\n\n          type="password"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <button ion-button icon-start (click)="login(user)" medium round>\n\n    <ion-icon name="unlock"></ion-icon>\n\n    Iniciar Sesión\n\n  </button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-jugador/add-jugador.module": [
		842,
		11
	],
	"../pages/calendario/calendario.module": [
		852,
		10
	],
	"../pages/edit-jugador/edit-jugador.module": [
		843,
		9
	],
	"../pages/equipo/equipo.module": [
		844,
		8
	],
	"../pages/event-modal/event-modal.module": [
		845,
		0
	],
	"../pages/home/home.module": [
		846,
		7
	],
	"../pages/jornadas/jornadas.module": [
		847,
		6
	],
	"../pages/jugadores-modal/jugadores-modal.module": [
		848,
		5
	],
	"../pages/jugadores/jugadores.module": [
		849,
		4
	],
	"../pages/login/login.module": [
		850,
		3
	],
	"../pages/modificar-titulares/modificar-titulares.module": [
		851,
		2
	],
	"../pages/titulares/titulares.module": [
		853,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_equipos__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosProvider = /** @class */ (function () {
    function DatosProvider() {
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__["a" /* JUGADORES */].slice(0);
        this.equipos = __WEBPACK_IMPORTED_MODULE_1__data_data_equipos__["a" /* EQUIPOS */].slice(0);
        this.jugadores = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.orderBy(this.jugadores, ['ptos'], ['desc']);
    }
    DatosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatosProvider);
    return DatosProvider;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_jugador_add_jugador__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__ = __webpack_require__(159);
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
        this.addJugador = __WEBPACK_IMPORTED_MODULE_3__add_jugador_add_jugador__["a" /* AddJugadorPage */];
        this.editJugador = __WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__["a" /* EditJugadorPage */];
        this.listjugadores = jugadores.jugadores;
        console.log(this.jugadores);
    }
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage.prototype.newJugador = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_jugador_add_jugador__["a" /* AddJugadorPage */]);
    };
    JugadoresPage.prototype.editar = function (jugador) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__["a" /* EditJugadorPage */], { 'jugador': jugador });
    };
    JugadoresPage.prototype.deleteJugador = function (jugador) {
        console.log(jugador);
        for (var i = 0; i < this.jugadores.jugadores.length; i++) {
            if (jugador == this.jugadores.jugadores[i]) {
                console.log(this.jugadores.jugadores[i]);
                this.jugadores.jugadores.splice(i, 1);
            }
        }
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n      icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="newJugador()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-3 col-sm>\n\n        Nombre\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        J\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        V\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        E\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        D\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        C\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        F\n\n      </ion-col>\n\n      <ion-col col-2 col-sm>\n\n        Ptos\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let jugador of listjugadores" >\n\n      <ion-col col-3 col-sm >\n\n        {{ jugador.nombre }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.j }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.g }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.e }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.p }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.c }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.f }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.ptos }}\n\n      </ion-col>\n\n      <ion-col (click)="editar(jugador)">\n\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n      </ion-col>\n\n      <ion-col (click)="deleteJugador(jugador)">\n\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calendario_calendario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_equipo_equipo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_jugadores_jugadores__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_jornadas_jornadas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_jugador_add_jugador__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_jugador_edit_jugador__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_titulares_titulares__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modificar_titulares_modificar_titulares__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_jugadores_modal_jugadores_modal__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyB21kexYxz9wrwyAakBGnGOvWm2KpCbwD8",
    authDomain: "fir-auth-f61fc.firebaseapp.com",
    databaseURL: "https://fir-auth-f61fc.firebaseio.com",
    projectId: "fir-auth-f61fc",
    storageBucket: "fir-auth-f61fc.appspot.com",
    messagingSenderId: "136347460235"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_titulares_titulares__["a" /* TitularesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modificar_titulares_modificar_titulares__["a" /* ModificarTitularesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_jugadores_modal_jugadores_modal__["a" /* JugadoresModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-jugador/add-jugador.module#AddJugadorPageModule', name: 'AddJugadorPage', segment: 'add-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-jugador/edit-jugador.module#EditJugadorPageModule', name: 'EditJugadorPage', segment: 'edit-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-modal/jugadores-modal.module#JugadoresModalPageModule', name: 'JugadoresModalPage', segment: 'jugadores-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modificar-titulares/modificar-titulares.module#ModificarTitularesPageModule', name: 'ModificarTitularesPage', segment: 'modificar-titulares', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/titulares/titulares.module#TitularesPageModule', name: 'TitularesPage', segment: 'titulares', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_titulares_titulares__["a" /* TitularesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modificar_titulares_modificar_titulares__["a" /* ModificarTitularesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_jugadores_modal_jugadores_modal__["a" /* JugadoresModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_datos_datos__["a" /* DatosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 510:
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

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORES; });
var JUGADORES = [
    { nombre: "Pepe", id: 1, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 3, titular: true },
    { nombre: "Juan", id: 2, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 4, titular: true },
    { nombre: "Paco", id: 3, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 6, titular: true },
    { nombre: "Jose", id: 4, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 2, titular: true },
    { nombre: "Maria", id: 5, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 9, titular: true },
    { nombre: "Sergio", id: 6, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 6, titular: true },
    { nombre: "Raul", id: 7, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 9, titular: true },
    { nombre: "Marta", id: 8, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 4, titular: true },
    { nombre: "Laura", id: 9, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Alfredo", id: 10, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Mario", id: 11, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Luis", id: 12, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Jesus", id: 13, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Manuel", id: 14, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Carmen", id: 15, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Pablo", id: 16, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Fernando", id: 17, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Cristina", id: 18, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Antonio", id: 19, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Pilar", id: 20, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Luisa", id: 21, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Pedro", id: 22, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Felix", id: 23, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Pili", id: 24, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Rober", id: 25, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Quino", id: 26, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Raulito", id: 27, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Irene", id: 28, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Celia", id: 29, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false },
    { nombre: "Julia", id: 30, idEquipo: 0, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 0, titular: false }
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bm": 232,
	"./bm.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-il": 251,
	"./en-il.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es-us": 256,
	"./es-us.js": 256,
	"./es.js": 254,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./gu": 269,
	"./gu.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it.js": 277,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./tg": 325,
	"./tg.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./ug-cn": 333,
	"./ug-cn.js": 333,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 513;

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__titulares_titulares__ = __webpack_require__(93);
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
    function EquipoPage(navCtrl, navParams, modal, equipos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.equipos = equipos;
        this.listaEquipos = equipos.equipos;
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    EquipoPage.prototype.mostrarJugadores = function (id) {
        var jugadoresEquipo = [];
        for (var i = 0; i < this.equipos.jugadores.length; i++) {
            if (this.equipos.jugadores[i].idEquipo == id) {
                console.log(this.equipos.jugadores[i]);
                jugadoresEquipo.push(this.equipos.jugadores[i]);
            }
        }
        console.log(jugadoresEquipo);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__titulares_titulares__["a" /* TitularesPage */], { "jugadores": jugadoresEquipo });
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n      icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Equipo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let equipo of listaEquipos"\n\n      (click)="mostrarJugadores(equipo.id)">\n\n      <h2>\n\n        {{ equipo.nombre }}\n\n\n\n        \n\n      </h2>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_modal_jugadores_modal__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JornadasPage = /** @class */ (function () {
    function JornadasPage(navCtrl, navParams, titular) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titular = titular;
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage.prototype.goModal = function () {
        var titulares = [];
        for (var i = 0; i < this.titular.jugadores.length; i++) {
            if (this.titular.jugadores[i].titular == true && this.titular.jugadores[i].idEquipo == 1) {
                console.log(this.titular.jugadores[i]);
                titulares.push(this.titular.jugadores[i]);
            }
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_modal_jugadores_modal__["a" /* JugadoresModalPage */], { "titulares": titulares });
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jornadas\jornadas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button\n\n          icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>Jornadas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-item (click)="goModal()">\n\n    <h2 >\n\n      Jornada 1\n\n    </h2> \n\n</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calendario_calendario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_equipo_equipo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jugadores_jugadores__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jornadas_jornadas__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, menuCtrl) {
        var _this = this;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.calendario = __WEBPACK_IMPORTED_MODULE_7__pages_calendario_calendario__["a" /* CalendarioPage */];
        this.equipo = __WEBPACK_IMPORTED_MODULE_8__pages_equipo_equipo__["a" /* EquipoPage */];
        this.jugadores = __WEBPACK_IMPORTED_MODULE_9__pages_jugadores_jugadores__["a" /* JugadoresPage */];
        this.jornadas = __WEBPACK_IMPORTED_MODULE_10__pages_jornadas_jornadas__["a" /* JornadasPage */];
        platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.abrirPagina = function (pagina) {
        this.rootPage = pagina;
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n    <ion-header>\n\n        <ion-toolbar color="morado">\n\n        <ion-title>Menú Principal</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list> \n\n            <ion-item (click)="abrirPagina(calendario)">\n\n                <ion-icon name="calendar" item-start></ion-icon>\n\n                    Calendario\n\n            </ion-item>\n\n        \n\n            <ion-item (click)="abrirPagina(equipo)">\n\n                <ion-icon name="people" item-start></ion-icon>\n\n                Equipo\n\n            </ion-item>\n\n        \n\n            <ion-item (click)="abrirPagina(jugadores)">\n\n                <ion-icon name="person" item-start></ion-icon>\n\n                Jugadores\n\n            </ion-item>\n\n        \n\n            <ion-item (click)="abrirPagina(jornadas)">\n\n                <ion-icon name="clipboard" item-start></ion-icon>\n\n                Jornadas\n\n            </ion-item>\n\n    </ion-list>\n\n    </ion-content>\n\n</ion-menu> \n\n\n\n<ion-nav [root]="rootPage" #mycontent></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    // Logout de usuario
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
    }
    CalendarioPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarioPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\calendario\calendario.html"*/'<ion-header>\n\n  <ion-navbar>  \n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Calendario de Juego</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addEvent()"> \n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <calendar [eventSource]="eventSource" \n\n  [calendarMode]="calendar.mode" \n\n\n\n  \n\n  [currentDate]="calendar.currentDate" \n\n  (onEventSelected)="onEventSelected($event)" \n\n  (onTitleChanged)="onViewTitleChanged($event)"\n\n  (onTimeSelected)="onTimeSelected($event)" \n\n  step="30" class="calendar"> \n\n  </calendar>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\calendario\calendario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitularesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificar_titulares_modificar_titulares__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TitularesPage = /** @class */ (function () {
    function TitularesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = this.navParams.get('jugadores');
        console.log(this.jugadores);
    }
    TitularesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TitularesPage');
    };
    TitularesPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipo_equipo__["a" /* EquipoPage */]);
    };
    TitularesPage.prototype.modificar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__modificar_titulares_modificar_titulares__["a" /* ModificarTitularesPage */], { 'jugadores': this.jugadores });
    };
    TitularesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-titulares',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\titulares\titulares.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>Titulares del Equipo</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n\n      <ion-list>\n\n          <h2>Titulares</h2>\n\n          <div *ngFor="let jugador of jugadores">\n\n            <ion-item  *ngIf=" jugador.titular == true">\n\n              <ion-label>{{ jugador.nombre }}</ion-label>\n\n            </ion-item>\n\n            </div>\n\n      </ion-list>\n\n      <ion-list>\n\n          <h2>Suplentes</h2>\n\n          <div *ngFor="let jugador of jugadores">\n\n            <ion-item  *ngIf=" jugador.titular == false">\n\n              <ion-label>{{ jugador.nombre }}</ion-label>\n\n            </ion-item>\n\n          </div>\n\n      </ion-list>\n\n      <button ion-button (click)="modificar()">Modificar titulares</button>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\trabajoIonic\trabajoIonic\GTA_Sergio_Jose\src\pages\titulares\titulares.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TitularesPage);
    return TitularesPage;
}());

//# sourceMappingURL=titulares.js.map

/***/ })

},[485]);
//# sourceMappingURL=main.js.map