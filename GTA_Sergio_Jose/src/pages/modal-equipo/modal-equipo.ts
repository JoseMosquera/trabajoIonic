import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { Jugador } from "../../interfaces/jugador.interfaces";

@IonicPage({
  name:"ModalEquipo"
})
@Component({
  selector: 'page-modal-equipo',
  templateUrl: 'modal-equipo.html',
})
export class ModalEquipoPage {

  jugadores:[];
  titulares:Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public listaJugadores: DatosProvider) {
  }

  ionViewWillLoad() {
    this.jugadores = this.navParams.get('data');
    console.log(this.jugadores);
  }

  cerrarModal(){
    this.view.dismiss();
  }

  titular(){
    for (let i = 0; i < this.listaJugadores.jugadores.length; i++) {
      if(this.listaJugadores.jugadores[i].id==this.titulares.id){
        console.log("hola");
      }
    }
    // for (let i = 0; i < this.titulares.length; i++) {
    //   for (let j = 0; j < this.listaJugadores.jugadores.length; j++) {
    //     if(this.titulares[i]==this.listaJugadores.jugadores[i]){
    //       console.log(this.titulares);
    //       console.log(this.listaJugadores.jugadores);
    //       //this.listaJugadores.jugadores[i].titular = true;
    //     }
    //   }
    // }
  }
}
