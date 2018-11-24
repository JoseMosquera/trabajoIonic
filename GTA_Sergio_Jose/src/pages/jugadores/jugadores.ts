import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { AddJugadorPage } from '../add-jugador/add-jugador';
import { EditJugadorPage } from "../edit-jugador/edit-jugador";
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  listjugadores:any
  addJugador = AddJugadorPage;
  editJugador = EditJugadorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jugadores: DatosProvider) {
    jugadores.jugadores.sort(function (a, b) {
      if (a.ptos > b.ptos) {
        return -1;
      }
      if (a.ptos < b.ptos) {
        return 1;
      }
      return 0;
    });;
    this.listjugadores = jugadores.jugadores;
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

  deleteJugador(jugador:any){
    console.log(jugador);
    for (let i = 0; i < this.jugadores.jugadores.length; i++) {
      if (jugador == this.jugadores.jugadores[i]) {
        console.log(this.jugadores.jugadores[i]);
        this.jugadores.jugadores.splice(i, 1);
      }
    }
  }
}
