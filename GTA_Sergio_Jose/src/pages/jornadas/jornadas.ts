import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarioPage } from "../calendario/calendario";
import { DatosProvider } from "../../providers/datos/datos";
import { JugadoresModalPage } from "../jugadores-modal/jugadores-modal";
import { Jugador } from '../../interfaces/jugador.interfaces';



@IonicPage()
@Component({
  selector: 'page-jornadas',
  templateUrl: 'jornadas.html',
})
export class JornadasPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private titular:DatosProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasPage');
  }

  goModal(){
    let titulares:Jugador[]=[];
    for (let i = 0; i < this.titular.jugadores.length; i++) {
      if (this.titular.jugadores[i].titular==true && this.titular.jugadores[i].idEquipo==1) {
        console.log(this.titular.jugadores[i]);
        titulares.push(this.titular.jugadores[i]);
      }
    }
    this.navCtrl.setRoot(JugadoresModalPage, {"titulares": titulares});


  }

}
