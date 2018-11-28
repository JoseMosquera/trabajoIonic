import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarioPage } from "../calendario/calendario";
import { DatosProvider } from "../../providers/datos/datos";


@IonicPage()
@Component({
  selector: 'page-jornadas',
  templateUrl: 'jornadas.html',
})
export class JornadasPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasPage');
  }

}
