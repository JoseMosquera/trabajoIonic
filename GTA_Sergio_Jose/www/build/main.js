webpackJsonp([10],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(151);
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
        this.nuevoJugador = {};
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jugador',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>addJugador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nombre:</ion-label>\n    <ion-input [(ngModel)]="nombre" name="nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Equipo(1, 2, 3 o 4):</ion-label>\n    <ion-input type="number" [(ngModel)]="equipo"  name="equipo"></ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="addJugador()">Añadir</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\add-jugador\add-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], AddJugadorPage);
    return AddJugadorPage;
}());

//# sourceMappingURL=add-jugador.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_jugador_add_jugador__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__ = __webpack_require__(152);
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
        jugadores.jugadores.sort(function (a, b) {
            if (a.ptos > b.ptos) {
                return -1;
            }
            if (a.ptos < b.ptos) {
                return 1;
            }
            return 0;
        });
        ;
        // for (let i = 0; i < jugadores.jugadores.length; i++) {
        //   if (i==0) {
        //     i+=1
        //   }
        // }
        this.listjugadores = jugadores.jugadores;
        console.log(this.jugadores);
    }
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
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
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button [navPush]="addJugador">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-3 col-sm>\n\n        Nombre\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        J\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        V\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        E\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        D\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        C\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        F\n\n      </ion-col>\n\n      <ion-col col-2 col-sm>\n\n        Ptos\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let jugador of listjugadores" >\n\n      <ion-col col-3 col-sm >\n\n        {{ jugador.nombre }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.j }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.g }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.e }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.p }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.c }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.f }}\n\n      </ion-col>\n\n      <ion-col col-1 col-sm>\n\n        {{ jugador.ptos }}\n\n      </ion-col>\n\n      <ion-col [navPush]="editJugador" [navParams]="{\'jugador\':jugador}">\n\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n      </ion-col>\n\n      <ion-col (click)="deleteJugador(jugador)">\n\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- <ion-list>\n\n    <ion-item *ngFor="let jugador of listjugadores">\n\n      {{ jugador.nombre }} {{ jugador.j }} {{ jugador.g }} {{ jugador.e }} {{ jugador.p }} {{ jugador.c }} {{ jugador.f }} {{ jugador.ptos }}\n\n    </ion-item>\n\n  </ion-list> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(151);
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
        this.jugador = {};
        this.jugador = this.navParams.get("jugador");
        console.log(this.jugador);
    }
    EditJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditJugadorPage');
    };
    EditJugadorPage.prototype.actializarJugador = function () {
        var jugadorN = { nombre: this.nombre, id: this.id, idEquipo: this.idEquipo, j: this.j,
            g: this.g, e: this.e, p: this.p, c: this.c, f: this.f, ptos: this.ptos, titular: false };
        for (var i = 0; i < this.jugadores.jugadores.length; i++) {
            if (this.id == this.jugadores.jugadores[i].id) {
                this.jugadores.jugadores[i] = jugadorN;
                console.log(this.jugadores.jugadores[i]);
            }
        }
        // this.jugadores.jugadores.sort(function (a, b) {
        //   if (a.ptos > b.ptos) {
        //     console.log(a.ptos+" a>b "+b.ptos);
        //     return -1;
        //   }
        //   if (a.ptos < b.ptos) {
        //     console.log(b.ptos+" b>a "+a.ptos);
        //     return 1;
        //   }
        //   console.log(a.ptos+" a=b "+b.ptos);
        //   return 0;
        // });;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    EditJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-jugador',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\edit-jugador\edit-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>editJugador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input type="text" [(ngModel)]="nombre" name="nombre" value="{{ jugador.nombre }}"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label floating>Equipo(1, 2, 3 o 4):</ion-label>\n    <ion-input type="number" [(ngModel)]="equipo" name="equipo" value="{{ jugador.idEquipo }}"></ion-input>\n  </ion-item>\n    \n  <ion-item>\n    <ion-label floating>Partidos jugados:</ion-label>\n    <ion-input type="number" [(ngModel)]="j" name="equipo" value="{{ jugador.j }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Partidos ganados:</ion-label>\n    <ion-input type="number" [(ngModel)]="g" name="equipo" value="{{ jugador.g }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Partidos empatados:</ion-label>\n    <ion-input type="number" [(ngModel)]="e" name="equipo" value="{{ jugador.e }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Partidos perdidos:</ion-label>\n    <ion-input type="number" [(ngModel)]="p" name="equipo" value="{{ jugador.p }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Partidos en casa:</ion-label>\n    <ion-input type="number" [(ngModel)]="c" name="equipo" value="{{ jugador.c }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Partidos fuera de casa:</ion-label>\n    <ion-input type="number" [(ngModel)]="f" name="equipo" value="{{ jugador.f }}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Puntos:</ion-label>\n    <ion-input type="number" [(ngModel)]="ptos" name="equipo" value="{{ jugador.ptos }}"></ion-input>\n  </ion-item>\n  \n  <ion-input  type="hidden" [(ngModel)]="id" name="nombre" value="{{ jugador.id }}"></ion-input>\n  \n  <button ion-button block clear (click)="actializarJugador()">Actualizar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\edit-jugador\edit-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], EditJugadorPage);
    return EditJugadorPage;
}());

//# sourceMappingURL=edit-jugador.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-jugador/add-jugador.module": [
		697,
		9
	],
	"../pages/calendario/calendario.module": [
		699,
		4
	],
	"../pages/edit-jugador/edit-jugador.module": [
		698,
		8
	],
	"../pages/equipo/equipo.module": [
		700,
		3
	],
	"../pages/home/home.module": [
		701,
		2
	],
	"../pages/jornadas/jornadas.module": [
		703,
		1
	],
	"../pages/jugadores/jugadores.module": [
		702,
		7
	],
	"../pages/login/login.module": [
		705,
		6
	],
	"../pages/modal-equipo/modal-equipo.module": [
		704,
		0
	],
	"../pages/popover-equipo/popover-equipo.module": [
		706,
		5
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(86);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>INICIO DE SESIÓN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <form>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input\n\n          [(ngModel)]="user.email"\n\n          name="email"\n\n          type="text"\n\n          autocapitalize="off"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input\n\n          [(ngModel)]="user.password"\n\n          name="password"\n\n          type="password"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <button ion-button icon-start (click)="login(user)" medium round>\n\n    <ion-icon name="unlock"></ion-icon>\n\n    Iniciar Sesión\n\n  </button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverEquipoPage = /** @class */ (function () {
    function PopoverEquipoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverEquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverEquipoPage');
    };
    PopoverEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-equipo',template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\popover-equipo\popover-equipo.html"*/'<!--\n  Generated template for the PopoverEquipoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>popoverEquipo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\pages\popover-equipo\popover-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PopoverEquipoPage);
    return PopoverEquipoPage;
}());

//# sourceMappingURL=popover-equipo.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_popover_equipo_popover_equipo__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_datos_datos__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_jugador_add_jugador__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_jugador_edit_jugador__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { LoginPage } from '../pages/login/login';


//import { HomePage } from '../pages/home/home';





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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popover_equipo_popover_equipo__["a" /* PopoverEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-jugador/add-jugador.module#AddJugadorPageModule', name: 'AddJugadorPage', segment: 'add-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-jugador/edit-jugador.module#EditJugadorPageModule', name: 'EditJugadorPage', segment: 'edit-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-equipo/modal-equipo.module#ModalEquipoPageModule', name: 'ModalEquipo', segment: 'modal-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover-equipo/popover-equipo.module#PopoverEquipoPageModule', name: 'PopoverEquipoPage', segment: 'popover-equipo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popover_equipo_popover_equipo__["a" /* PopoverEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_datos_datos__["a" /* DatosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 377:
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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORES; });
var JUGADORES = [
    { nombre: "Pepe", id: 1, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 3, titular: true },
    { nombre: "Juan", id: 2, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 4, titular: true },
    { nombre: "Paco", id: 3, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 6, titular: true },
    { nombre: "Jose", id: 4, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 2, titular: true },
    { nombre: "Maria", id: 5, idEquipo: 1, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 9, titular: false },
    { nombre: "Sergio", id: 6, idEquipo: 2, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 6, titular: false },
    { nombre: "Raul", id: 7, idEquipo: 3, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 9, titular: false },
    { nombre: "Marta", id: 8, idEquipo: 4, j: 0, g: 0, e: 0, p: 0, c: 0, f: 0, ptos: 4, titular: false }
    // {nombre:"Laura", id:9, idEquipo:1, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Alfredo", id:10, idEquipo:2, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Mario", id:11, idEquipo:3, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Luis", id:12, idEquipo:4, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Jesus", id:13, idEquipo:1, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Manuel", id:14, idEquipo:2, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Carmen", id:15, idEquipo:3, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Pablo", id:16, idEquipo:4, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Fernando", id:17, idEquipo:0, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Cristina", id:18, idEquipo:0, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Antonio", id:19, idEquipo:0, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false},
    // {nombre:"Pilar", id:20, idEquipo:0, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false}
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_equipos__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__ = __webpack_require__(378);
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
    // jugadores = this.jugadores1.sort(function (a, b) {
    //   if (a.ptos > b.ptos) {
    //     return -1;
    //   }
    //   if (a.ptos < b.ptos) {
    //     return 1;
    //   }
    //   return 0;
    // });
    function DatosProvider() {
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__["a" /* JUGADORES */].slice(0);
        this.equipos = __WEBPACK_IMPORTED_MODULE_1__data_data_equipos__["a" /* EQUIPOS */].slice(0);
    }
    DatosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatosProvider);
    return DatosProvider;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(350);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = 'HomePage';
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\josem\Desktop\ionic\trabajoIonicAjedrez\trabajoIonic\GTA_Sergio_Jose\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(153);
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

/***/ })

},[352]);
//# sourceMappingURL=main.js.map