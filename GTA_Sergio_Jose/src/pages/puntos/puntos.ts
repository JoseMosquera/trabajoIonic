import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../interfaces/jugador.interfaces';
import { DatosProvider } from "../../providers/datos/datos";
import { AlertController } from 'ionic-angular';
import { JugadoresModalPage } from '../jugadores-modal/jugadores-modal';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-puntos',
  templateUrl: 'puntos.html',
})
export class PuntosPage {

  jugador:Jugador;
  result:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dp: DatosProvider, public alertCtrl: AlertController) {
    this.jugador = this.navParams.get('jugador');
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosPage');
  }

  volver(){
    let titulares:Jugador[]=[];
    for (let i = 0; i < this.dp.jugadores.length; i++) {
      if (this.dp.jugadores[i].titular==true && this.dp.jugadores[i].idEquipo==1) {
        console.log(this.dp.jugadores[i]);
        titulares.push(this.dp.jugadores[i]);
      }
    }

    this.dp.jugadores = _.orderBy(this.dp.jugadores, ['ptos'], ['desc']);

    this.navCtrl.setRoot(JugadoresModalPage, {'titulares': titulares});
  }

  guardar(id:number){
    if (this.result=='ganar') {
      this.ganar(id);
    } else if (this.result=='empatar'){
      this.empatar(id);
    }else if(this.result=='perder'){
      this.perder(id);
    }else{
      const alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Selecciona una opcion antes de guardar cambios!',
        buttons: ['OK']
      });
      alert.present();
    }

    let titulares:Jugador[]=[];
    for (let i = 0; i < this.dp.jugadores.length; i++) {
      if (this.dp.jugadores[i].titular==true && this.dp.jugadores[i].idEquipo==1) {
        console.log(this.dp.jugadores[i]);
        titulares.push(this.dp.jugadores[i]);
      }
    }

    this.dp.jugadores = _.orderBy(this.dp.jugadores, ['ptos'], ['desc']);

    this.navCtrl.setRoot(JugadoresModalPage, {'titulares': titulares});
  }

  ganar(id:number){
    for (let i = 0; i < this.dp.jugadores.length; i++) {
      if(this.dp.jugadores[i].id==id){
        this.dp.jugadores[i].ptos+=1;
        this.dp.jugadores[i].j+=1;
        this.dp.jugadores[i].g+=1;
        console.log(this.dp.jugadores[i]);
      } 
  }
}

  empatar(id:number){
    for (let i = 0; i < this.dp.jugadores.length; i++) {
      if(this.dp.jugadores[i].id==id){
        this.dp.jugadores[i].ptos+=1;
        this.dp.jugadores[i].j+=1;
        this.dp.jugadores[i].e+=1;
        console.log(this.dp.jugadores[i]);
      } 
    }
    
  }

  perder(id:number){
    for (let i = 0; i < this.dp.jugadores.length; i++) {
      if(this.dp.jugadores[i].id==id){
        this.dp.jugadores[i].j+=1;
        this.dp.jugadores[i].p+=1;
        console.log(this.dp.jugadores[i]);
      } 
    }
  }
}
