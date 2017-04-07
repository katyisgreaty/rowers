import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rower',
  templateUrl: './edit-rower.component.html',
  styleUrls: ['./edit-rower.component.css']
})
export class EditRowerComponent implements OnInit {
  @Input() selectedRower;

  constructor() { }

  ngOnInit() {
  }

}
