import { Injectable } from '@angular/core';
import { EQUIPOS } from '../../data/data.equipos';
import { JUGADORES } from '../../data/data.jugadores';

@Injectable()
export class DatosProvider {

  jugadores = JUGADORES.slice(0);
  equipos = EQUIPOS.slice(0);

  // jugadores = this.jugadores1.sort(function (a, b) {
  //   if (a.ptos > b.ptos) {
  //     return -1;
  //   }
  //   if (a.ptos < b.ptos) {
  //     return 1;
  //   }
  //   return 0;
  // });

  constructor() {}
}
