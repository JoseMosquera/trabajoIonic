import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EQUIPOS } from "../../data/data.equipos";
import { Equipo } from "../../interfaces/equipos.interfaces";
import { JUGADORES } from "../../data/data.jugadores";
import { Jugador } from "../../interfaces/jugador.interfaces";

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipos:Equipo[] = [];
  jugadores:Jugador[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipos = EQUIPOS.slice(0);
    this.jugadores = JUGADORES.slice(0);
    console.log(this.equipos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  mostrarJugadores(id){
    console.log(id);
    let jugadoresEquipo:any[] = [];
    for (let i = 0; i < this.jugadores.length; i++) {
      if (this.jugadores[i].idEquipo==id) {
        jugadoresEquipo.push(this.jugadores[i].nombre);
      }
    }
    console.log(jugadoresEquipo);
    return jugadoresEquipo;
  }
}
