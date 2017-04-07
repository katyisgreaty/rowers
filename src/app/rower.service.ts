import { Injectable } from '@angular/core';
import { Rower } from './rower.model';
import { ROWERS } from './mock-rowers';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RowerService {
  rowers: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.rowers = angularFire.database.list('rowers');
  }

  getRowers() {
    return this.rowers;
  }

  getRowerById(rowerId: number) {
    for (var i = 0; i<=ROWERS.length - 1; i++) {
      if (ROWERS[i].id === rowerId) {
        return ROWERS[i];
      }
    }
  }

}
