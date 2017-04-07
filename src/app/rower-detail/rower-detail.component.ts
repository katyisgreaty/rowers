import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Rower } from '../rower.model';
import { RowerService } from '../rower.service';

@Component({
  selector: 'app-rower-detail',
  templateUrl: './rower-detail.component.html',
  styleUrls: ['./rower-detail.component.css'],
  providers: [RowerService]
})
export class RowerDetailComponent implements OnInit {

  rowerId: number;
  rowerToDisplay: Rower;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rowerService: RowerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.rowerId = parseInt(urlParameters['id']);
    });
    this.rowerToDisplay = this.rowerService.getRowerById(this.rowerId);
  }

}
