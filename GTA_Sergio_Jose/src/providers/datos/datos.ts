import { Injectable } from '@angular/core';
import { EQUIPOS } from '../../data/data.equipos';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from "../../interfaces/jugador.interfaces";

@Injectable()
export class DatosProvider {

  jugadores = JUGADORES.slice(0);
  equipos = EQUIPOS.slice(0);

  constructor() {}
}
