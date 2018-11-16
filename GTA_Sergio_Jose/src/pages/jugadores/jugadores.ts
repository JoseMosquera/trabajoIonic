import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  listjugadores:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private jugadores: DatosProvider) {
    this.listjugadores = jugadores.jugadores;
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }  
}
