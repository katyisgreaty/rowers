import { Component, OnInit } from '@angular/core';
import { Rower } from '../rower.model';
import { Router } from '@angular/router';
import { RowerService } from '../rower.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [RowerService]
})

export class MainComponent implements OnInit {
  rowers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private rowerService: RowerService){}

  ngOnInit() {
    this.rowers = this.rowerService.getRowers();
  }

  goToDetailPage(clickedRower) {
    this.router.navigate(['rowers', clickedRower.$key]);
  };

}
