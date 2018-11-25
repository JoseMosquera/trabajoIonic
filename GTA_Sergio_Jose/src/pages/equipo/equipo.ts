import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { DatosProvider } from "../../providers/datos/datos";
import { Jugador } from '../../interfaces/jugador.interfaces';
import { TitularesPage } from "../titulares/titulares";

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  listaEquipos:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modal: ModalController, public equipos: DatosProvider) {
    this.listaEquipos = equipos.equipos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  mostrarJugadores(id){
    let jugadoresEquipo:Jugador[] = [];
    for (let i = 0; i < this.equipos.jugadores.length; i++) {
      if (this.equipos.jugadores[i].idEquipo==id) {
        console.log(this.equipos.jugadores[i]);
        jugadoresEquipo.push(this.equipos.jugadores[i]);
      }
    }

    console.log(jugadoresEquipo);

    this.navCtrl.setRoot(TitularesPage, {"jugadores": jugadoresEquipo }); 
  }
}