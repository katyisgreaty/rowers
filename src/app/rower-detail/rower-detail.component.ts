import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Rower } from '../rower.model';

@Component({
  selector: 'app-rower-detail',
  templateUrl: './rower-detail.component.html',
  styleUrls: ['./rower-detail.component.css']
})
export class RowerDetailComponent implements OnInit {

  rowerId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.rowerId = parseInt(urlParameters['id']);
    });
  }

}
