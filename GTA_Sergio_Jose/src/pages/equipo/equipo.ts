import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  jugadoresEquipo:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public datos: DatosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  mostrarJugadores(id){
    for (let i = 0; i < this.datos.jugadores.length; i++) {
      if (this.datos.jugadores[i].idEquipo==id) {
        this.jugadoresEquipo.push(this.datos.jugadores[i]);
      }
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    }

    const modalEquipo = this.modal.create('ModalEquipo', {data: this.jugadoresEquipo}, myModalOptions);
    modalEquipo.present();
  }
}