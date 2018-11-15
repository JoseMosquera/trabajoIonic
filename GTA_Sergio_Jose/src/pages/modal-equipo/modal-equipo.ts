import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name:"ModalEquipo"
})
@Component({
  selector: 'page-modal-equipo',
  templateUrl: 'modal-equipo.html',
})
export class ModalEquipoPage {

  jugadores:{} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    this.jugadores = {}; 
    this.jugadores = this.navParams.get('data');
    console.log(this.jugadores);
  }

  cerrarModal(){
    this.view.dismiss();
  }

}
