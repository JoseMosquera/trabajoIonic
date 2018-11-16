import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";

@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public jugadores: DatosProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJugadorPage');
  }
}
