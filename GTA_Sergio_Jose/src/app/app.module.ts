import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import {CalendarioPage} from "../pages/calendario/calendario";
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { JornadasPage } from '../pages/jornadas/jornadas';
import { HttpModule } from '@angular/http';
import { DatosProvider } from '../providers/datos/datos';
import { AddJugadorPage } from "../pages/add-jugador/add-jugador";
import { EditJugadorPage } from "../pages/edit-jugador/edit-jugador";
import { TitularesPage } from "../pages/titulares/titulares";
import { ModificarTitularesPage } from "../pages/modificar-titulares/modificar-titulares";
import { NgCalendarModule } from 'ionic2-calendar';
import { JugadoresModalPage } from '../pages/jugadores-modal/jugadores-modal';
import { EventModalPage } from '../pages/event-modal/event-modal';
import { PuntosPage } from "../pages/puntos/puntos";

export const firebaseConfig = {
  apiKey: "AIzaSyB21kexYxz9wrwyAakBGnGOvWm2KpCbwD8",
  authDomain: "fir-auth-f61fc.firebaseapp.com",
  databaseURL: "https://fir-auth-f61fc.firebaseio.com",
  projectId: "fir-auth-f61fc",
  storageBucket: "fir-auth-f61fc.appspot.com",
  messagingSenderId: "136347460235"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JugadoresPage,
    JornadasPage,
    AddJugadorPage,
    EditJugadorPage,
    TitularesPage,
    ModificarTitularesPage,
    LoginPage,
    CalendarioPage,
    JugadoresModalPage,
    PuntosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgCalendarModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JugadoresPage,
    JornadasPage,
    AddJugadorPage,
    EditJugadorPage,
    TitularesPage,
    ModificarTitularesPage,
    LoginPage,
    CalendarioPage,
    JugadoresModalPage,
    PuntosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DatosProvider
  ]
})
export class AppModule {}
