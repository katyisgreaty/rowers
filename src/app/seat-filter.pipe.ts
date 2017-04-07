import { Pipe, PipeTransform } from '@angular/core';
import { Rower } from './rower.model';

@Pipe({
  name: 'seatFilter'
})
export class SeatFilterPipe implements PipeTransform {

  transform(input: Rower[], desiredRowerFilter) {
    var output: Rower[] = [];
    if(desiredRowerFilter === "bowFour"){
      for (var i = 0; i<input.length; i++) {
        if (input[i].seat === "1" || input[i].seat === "2" || input[i].seat === "3" || input[i].seat === "4") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRowerFilter === "sternFour") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].seat === "5" || input[i].seat === "6" || input[i].seat === "7" || input[i].seat === "8") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRowerFilter === "coxswains") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].seat === "0") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
