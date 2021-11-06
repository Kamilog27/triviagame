import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  players:Player[]=[
    new Player(1,"Juan",20),
    new Player(2,"Miguel",16),
    new Player(3,"David",10)
  ]
  constructor() { }
}
