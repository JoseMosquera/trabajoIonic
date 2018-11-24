import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { JugadoresPage } from "../jugadores/jugadores";


@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  nombre:string;
  equipo:number;
  nuevoJugador:{} = {};
  idJugador:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public jugadores: DatosProvider ) {
    jugadores.jugadores.sort(function (a, b) {
      if (a.ptos > b.ptos) {
        return -1;
      }
      if (a.ptos < b.ptos) {
        return 1;
      }
      return 0;
    });;
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
    this.navCtrl.push(JugadoresPage); 
  }
}
