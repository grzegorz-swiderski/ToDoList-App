import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stoper'
})
export class StoperPipe implements PipeTransform {

  leadingZero(i) {
    return (i < 10)? '0'+i : i;
  } 

  transform(value: number, args?: any): any {

    let hours = Math.floor(value/60/60);
    let minutes = Math.floor(value/60 % 60);
    let secunds = (value % 60);
    return this.leadingZero(hours) + ":" + this.leadingZero(minutes) + ":" + this.leadingZero(secunds);;
  }

}
