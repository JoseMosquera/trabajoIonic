import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { JugadoresPage } from "../jugadores/jugadores";

@IonicPage()
@Component({
  selector: 'page-edit-jugador',
  templateUrl: 'edit-jugador.html',
})
export class EditJugadorPage {

  nombre:any;
  id:any;
  idEquipo:any;
  j:any;
  g:any;
  e:any;
  p:any;
  c:any;
  f:any;
  ptos:any;
  jugador:{} = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private jugadores: DatosProvider) {
    this.jugador = this.navParams.get("jugador");
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJugadorPage');
  }

  actializarJugador(){
    let jugadorN = {nombre:this.nombre, id:this.id, idEquipo:this.idEquipo, j:this.j,
                    g:this.g, e:this.e, p:this.p, c:this.c, f:this.f, ptos:this.ptos, titular:false};

    for (let i = 0; i < this.jugadores.jugadores.length; i++) {
      if (this.id == this.jugadores.jugadores[i].id) {
        this.jugadores.jugadores[i] = jugadorN;
        console.log(this.jugadores.jugadores[i]);
      }
    }

    // this.jugadores.jugadores.sort(function (a, b) {
    //   if (a.ptos > b.ptos) {
    //     console.log(a.ptos+" a>b "+b.ptos);
    //     return -1;
    //   }
    //   if (a.ptos < b.ptos) {
    //     console.log(b.ptos+" b>a "+a.ptos);
    //     return 1;
    //   }
    //   console.log(a.ptos+" a=b "+b.ptos);
    //   return 0;
    // });;

    this.navCtrl.push(JugadoresPage); 
  }
}
