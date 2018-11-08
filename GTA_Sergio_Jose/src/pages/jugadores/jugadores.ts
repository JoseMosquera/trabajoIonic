import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JUGADORES } from "../../data/data.jugadores";
import { Jugador } from "../../interfaces/jugador.interfaces";

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  jugadores:Jugador[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jugadores = JUGADORES.slice(0);
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
