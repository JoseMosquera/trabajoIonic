import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioPage),
    NgCalendarModule
  ],
})
export class CalendarioPageModule {}
