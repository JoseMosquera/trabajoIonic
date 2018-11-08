import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email:'', password:'' } as User;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController,
    public auth:AuthProvider) {
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

  login()
  {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "El usuario o contraseña son incorrectos.",
        buttons: ['OK']
      });
      alert.present();
    })
  }

  /*
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
  */

}
