import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth, private toast:ToastController) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
          message: 'BIENVENIDO A LA APLICACION',
          duration: 3000
        }).present();

      }else{
        this.toast.create({
          message: 'Error en la autentificacion.',
          duration: 3000
        }).present();

      }
     
    });
  }

  logout(){
    this.afAuth.auth.signOut();
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
