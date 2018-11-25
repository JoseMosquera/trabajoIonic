import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';

import {CalendarioPage  } from "../calendario/calendario";
import { EquipoPage } from "../equipo/equipo";
import { JugadoresPage } from '../jugadores/jugadores';
import { JornadasPage } from '../jornadas/jornadas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth:AngularFireAuth, private toast:ToastController,
    public auth:AuthProvider, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.toast.create({
      message: 'BIENVENIDO A LA APLICACIÓN',
      duration: 2000,
      position: 'top'
    }).present();
  }

  cerrarSesion(){
    this.auth.logout();
  }

  irPaginaCalendario(){
    this.navCtrl.setRoot(CalendarioPage);
  }

  irPaginaEquipo(){
    this.navCtrl.setRoot(EquipoPage);
  }

  irPaginaJugadores(){
    this.navCtrl.setRoot(JugadoresPage);
  }

  irPaginaJornadas(){
    this.navCtrl.setRoot(JornadasPage);
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  } 
}
