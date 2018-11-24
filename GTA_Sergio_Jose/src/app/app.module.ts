import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
//import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
//import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { DatosProvider } from '../providers/datos/datos';
import { AddJugadorPage } from "../pages/add-jugador/add-jugador";
import { EditJugadorPage } from "../pages/edit-jugador/edit-jugador";
import { TitularesPage } from "../pages/titulares/titulares";

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
    AddJugadorPage,
    EditJugadorPage,
    TitularesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddJugadorPage,
    EditJugadorPage,
    TitularesPage
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
