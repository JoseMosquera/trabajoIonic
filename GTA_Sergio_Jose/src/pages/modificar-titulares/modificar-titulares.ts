import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Jugador } from '../../interfaces/jugador.interfaces';
import { TitularesPage } from '../titulares/titulares';

@IonicPage()
@Component({
  selector: 'page-modificar-titulares',
  templateUrl: 'modificar-titulares.html',
})
export class ModificarTitularesPage {

  jugadores:Array<any>;
  jugador:Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
    this.jugadores = this.navParams.get("jugadores");
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarTitularesPage');
  }

  actualizar(){
    let cont=0;
    for (let i = 0; i < this.jugadores.length; i++) {
      if (this.jugadores[i].titular==true) {
        cont+=1;
        console.log(cont)
      }
    }
    if(cont<=4){
      this.navCtrl.setRoot(TitularesPage, {'jugadores': this.jugadores})
    }else if(cont>4){
      this.toast.create({
        message: 'Solo se pueden seleccionar 4 jugadores titulares.',
        duration: 2000,
        position: 'middle'
      }).present();
    }
  } 
}
