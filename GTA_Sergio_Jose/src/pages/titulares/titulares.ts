import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModificarTitularesPage } from "../modificar-titulares/modificar-titulares";
import { EquipoPage } from "../equipo/equipo";

@IonicPage()
@Component({
  selector: 'page-titulares',
  templateUrl: 'titulares.html',
})
export class TitularesPage {

  //modificar = ModificarTitularesPage;
  jugadores:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jugadores = this.navParams.get('jugadores');
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitularesPage');
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage);
  }

  modificar(){
    this.navCtrl.setRoot(ModificarTitularesPage, {'jugadores': this.jugadores});
  }
}
