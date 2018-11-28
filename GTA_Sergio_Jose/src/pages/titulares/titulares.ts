import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModificarTitularesPage } from "../modificar-titulares/modificar-titulares";
import { DatosProvider } from "../../providers/datos/datos";

@IonicPage()
@Component({
  selector: 'page-titulares',
  templateUrl: 'titulares.html',
})
export class TitularesPage {

  jugadores:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private equipo: DatosProvider) {
    this.jugadores = this.equipo.jugadores;
    console.log(this.jugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitularesPage');
  }

  modificar(){
    this.navCtrl.setRoot(ModificarTitularesPage, {'jugadores': this.jugadores});
  }
}
