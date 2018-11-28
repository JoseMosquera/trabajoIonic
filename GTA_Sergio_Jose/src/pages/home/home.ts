import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';

import {CalendarioPage  } from "../calendario/calendario";
import { TitularesPage } from "../titulares/titulares";
import { JugadoresPage } from '../jugadores/jugadores';
import { JornadasPage } from '../jornadas/jornadas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth:AngularFireAuth,public auth:AuthProvider, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
  }

  cerrarSesion(){
    this.auth.logout();
  }

  irPaginaCalendario(){
    this.navCtrl.setRoot(CalendarioPage);
  }

  irPaginaEquipo(){
    this.navCtrl.setRoot(TitularesPage);
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
