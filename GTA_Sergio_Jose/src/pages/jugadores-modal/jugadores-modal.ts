import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JornadasPage } from '../jornadas/jornadas';
import { DatosProvider } from '../../providers/datos/datos';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-jugadores-modal',
  templateUrl: 'jugadores-modal.html',
})
export class JugadoresModalPage {

  titulares:Array<any>;
  resultadoFinal:number;
  result:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dp:DatosProvider, public alertCtrl: AlertController) {

    this.titulares=this.navParams.get('titulares');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresModalPage');
  }
  
  volver(){
    this.navCtrl.setRoot(JornadasPage);
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
  }

  ganar(id:number){
    this.resultadoFinal+=1;
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
    this.resultadoFinal+=0.5;
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
