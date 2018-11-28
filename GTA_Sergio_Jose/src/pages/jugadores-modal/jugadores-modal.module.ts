import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadoresModalPage } from './jugadores-modal';

@NgModule({
  declarations: [
    JugadoresModalPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadoresModalPage),
  ],
})
export class JugadoresModalPageModule {}
