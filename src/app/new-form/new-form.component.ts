import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { RowerService } from '../rower.service';
import { Rower } from '../rower.model';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  providers: [RowerService]
})
export class NewFormComponent implements OnInit {

  constructor(private rowerService: RowerService) { }

  ngOnInit() {
  }

  submitForm(name: string, seat: string, bio: string, height: string) {
    var newRower: Rower = new Rower(name, seat, bio, height);
    this.rowerService.addRower(newRower);
  }

}
