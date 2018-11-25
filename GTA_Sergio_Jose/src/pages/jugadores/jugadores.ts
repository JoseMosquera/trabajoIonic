import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { AddJugadorPage } from '../add-jugador/add-jugador';
import { EditJugadorPage } from "../edit-jugador/edit-jugador";

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
    this.listjugadores = jugadores.jugadores;
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

  newJugador(){
    this.navCtrl.setRoot(AddJugadorPage);
  }

  editar(jugador:any){
    this.navCtrl.setRoot(EditJugadorPage, {'jugador': jugador});
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