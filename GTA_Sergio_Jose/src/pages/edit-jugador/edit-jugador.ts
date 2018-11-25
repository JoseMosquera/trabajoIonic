import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { JugadoresPage } from "../jugadores/jugadores";
import { Jugador } from "../../interfaces/jugador.interfaces";

@IonicPage()
@Component({
  selector: 'page-edit-jugador',
  templateUrl: 'edit-jugador.html',
})
export class EditJugadorPage {

  nombre:string;
  id:number;
  idEquipo:number;
  j:number;
  g:number;
  e:number;
  p:number;
  c:number;
  f:number;
  ptos:number;
  jugador:Jugador;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private jugadores: DatosProvider) {
    this.jugador = this.navParams.get("jugador");
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJugadorPage');
  }

  actualizarJugador(){
    let jugadorN = {nombre:this.nombre, id:this.id, idEquipo:this.idEquipo, j:this.j,
                    g:this.g, e:this.e, p:this.p, c:this.c, f:this.f, ptos:this.ptos, titular:false};

    for (let i = 0; i < this.jugadores.jugadores.length; i++) {
      if (this.id == this.jugadores.jugadores[i].id) {
        this.jugadores.jugadores[i] = jugadorN;
        console.log(this.jugadores.jugadores[i]);
      }
    }

    this.navCtrl.setRoot(JugadoresPage); 
  }

  volver(){
    this.navCtrl.setRoot(JugadoresPage);
  }
}