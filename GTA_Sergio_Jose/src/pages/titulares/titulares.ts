import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { Jugador } from "../../interfaces/jugador.interfaces";

@IonicPage()
@Component({
  selector: 'page-titulares',
  templateUrl: 'titulares.html',
})
export class TitularesPage {

  jugadores:[] = [];
  titulares:Jugador;
  jugador:[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public listaJugadores: DatosProvider) {
    this.jugadores = this.navParams.get('data');
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitularesPage');
  }

}
