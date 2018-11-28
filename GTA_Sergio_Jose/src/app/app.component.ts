import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from '../pages/login/login';
import { HomePage } from "../pages/home/home";
import {CalendarioPage  } from "../pages/calendario/calendario";
import { EquipoPage } from "../pages/equipo/equipo";
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { JornadasPage } from '../pages/jornadas/jornadas';
import { MenuController } from 'ionic-angular'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;
  home = HomePage;
  calendario = CalendarioPage;
  equipo = EquipoPage;
  jugadores = JugadoresPage;
  jornadas =JornadasPage;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private auth:AuthProvider,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
    this.auth.Session.subscribe(session=>{
      if(session){
          this.rootPage = HomePage;
      }else{
          this.rootPage = LoginPage;
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina:any){
    this.rootPage = pagina;
    this.menuCtrl.close(); 
  } 
}

