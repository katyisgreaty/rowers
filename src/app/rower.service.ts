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

  addRower(newRower: Rower) {
    this.rowers.push(newRower);
  }

  getRowerById(rowerId: string) {
    return this.angularFire.database.object('rowers/' + rowerId);
  }

  updateRower(localUpdatedRower){
    var rowerEntryInFirebase = this.getRowerById(localUpdatedRower.$key);
    rowerEntryInFirebase.update({name: localUpdatedRower.name,
                                seat: localUpdatedRower.seat,
                                bio: localUpdatedRower.bio,
                                height: localUpdatedRower.height});
  }

  deleteRower(localRowerToDelete){
    var rowerEntryInFirebase = this.getRowerById(localRowerToDelete.$key);
    rowerEntryInFirebase.remove();
  }

}
