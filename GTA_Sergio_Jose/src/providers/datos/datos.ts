import { Injectable } from '@angular/core';
import { EQUIPOS } from '../../data/data.equipos';
import { JUGADORES } from '../../data/data.jugadores';
import _ from 'lodash';

@Injectable()
export class DatosProvider {

  jugadores = JUGADORES.slice(0);
  equipos = EQUIPOS.slice(0);

  constructor() {
    this.jugadores = _.orderBy(this.jugadores, ['ptos'], ['desc']);
  }
}
