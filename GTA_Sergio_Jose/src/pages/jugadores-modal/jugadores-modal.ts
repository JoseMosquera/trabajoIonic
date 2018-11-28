import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';

@IonicPage()
@Component({
  selector: 'page-jugadores-modal',
  templateUrl: 'jugadores-modal.html',
})
export class JugadoresModalPage {

  titulares:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private titular:DatosProvider) {

    for (let i = 0; i < this.titular.jugadores.length; i++) {
      if (this.titular.jugadores[i].titular==true) {
        console.log(this.titular.jugadores[i]);
        this.titulares.unshift(this.titular.jugadores[i]);
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresModalPage');
  }

}
