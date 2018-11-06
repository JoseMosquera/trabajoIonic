import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { } as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlertSucces() {
    const alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: 'Has iniciado sesión correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertFail() {
    const alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: 'El usuario o contraseña son incorrectos.',
      buttons: ['OK']
    });
    alert.present();
  }

  async login(user:User){

    try{
      await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      this.navCtrl.setRoot('HomePage');
      this.showAlertSucces();

    }catch(e){
      console.log(e);
      this.showAlertFail();

    }

}
}
