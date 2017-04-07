import { Injectable } from '@angular/core';
import { Rower } from './rower.model';
import { ROWERS } from './mock-rowers';

@Injectable()
export class RowerService {

  constructor() { }

  getRowers() {
    return ROWERS;
  }

  getRowerById(rowerId: number) {
    for (var i = 0; i<=ROWERS.length - 1; i++) {
      if (ROWERS[i].id === rowerId) {
        return ROWERS[i];
      }
    }
  }

}
