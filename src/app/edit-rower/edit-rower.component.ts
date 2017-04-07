import { Component, Input, OnInit } from '@angular/core';
import { RowerService } from '../rower.service';

@Component({
  selector: 'app-edit-rower',
  templateUrl: './edit-rower.component.html',
  styleUrls: ['./edit-rower.component.css'],
  providers: [RowerService]
})
export class EditRowerComponent implements OnInit {
  @Input() selectedRower;

  constructor(private rowerService: RowerService) { }

  ngOnInit() {
  }

  beginUpdatingRower(rowerToUpdate){
    this.rowerService.updateRower(rowerToUpdate);
  }

}
