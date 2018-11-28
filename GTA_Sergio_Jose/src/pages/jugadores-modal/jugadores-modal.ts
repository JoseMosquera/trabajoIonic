import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JornadasPage } from '../jornadas/jornadas';
import { PuntosPage } from '../puntos/puntos';
import { Jugador } from '../../interfaces/jugador.interfaces';

@IonicPage()
@Component({
  selector: 'page-jugadores-modal',
  templateUrl: 'jugadores-modal.html',
})
export class JugadoresModalPage {

  titulares:Array<Jugador>;
  resultadoFinal:number = 0;
  result:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulares=this.navParams.get('titulares');
    console.log(this.titulares);
    for (let i = 0; i < this.titulares.length; i++) {
      console.log(this.titulares[i].ptos);
      this.resultadoFinal += this.titulares[i].ptos;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresModalPage');
  }
  
  volver(){
    this.navCtrl.setRoot(JornadasPage);
  }

  puntos(jugador:any){
    this.navCtrl.setRoot(PuntosPage, {'jugador':jugador});
  }
}
