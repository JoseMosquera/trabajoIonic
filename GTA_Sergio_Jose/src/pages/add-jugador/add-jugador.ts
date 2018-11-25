import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { JugadoresPage } from "../jugadores/jugadores";
import { Jugador } from "../../interfaces/jugador.interfaces";


@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  nombre:string;
  equipo:number;
  nuevoJugador:Jugador;
  idJugador:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public jugadores: DatosProvider ) {
    this.idJugador = jugadores.jugadores.length+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJugadorPage');
  }

  addJugador(){
    let jugador = {nombre:this.nombre, id:this.idJugador, idEquipo:this.equipo, j:0, g:0, e:0, p:0, c:0, f:0, ptos:0, titular:false};
    console.log(jugador);
    this.jugadores.jugadores.push(jugador);
    console.log(this.jugadores.jugadores);
    this.navCtrl.setRoot(JugadoresPage); 
  }
  
  volver(){
    this.navCtrl.setRoot(JugadoresPage);
  }
}
