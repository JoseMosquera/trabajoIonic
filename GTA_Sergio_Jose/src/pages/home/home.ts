import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth, private toast:ToastController,
    public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    this.toast.create({
      message: 'BIENVENIDO A LA APLICACIÓN',
      duration: 4000
    }).present();

  }

  cerrarSesion(){
    this.auth.logout();
  }

  irPaginaCalendario(){
    this.navCtrl.push('CalendarioPage');
  }

  irPaginaEquipo(){
    this.navCtrl.push('EquipoPage');
  }

  irPaginaJugadores(){
    this.navCtrl.push('JugadoresPage');
  }

  irPaginaJornadas(){
    this.navCtrl.push('JornadasPage');
  }



}
