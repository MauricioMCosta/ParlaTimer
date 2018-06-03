import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Generated class for the TimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timePipe',
})

export class TimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {

    let fmin=Math.floor(value/60);
    let fhrs=Math.floor(fmin/60);

    let sec=Math.floor(value%60);
    let min=Math.floor(fmin%60);

    let stringSec=('0'+sec).slice(-2);
    let stringMin=('0'+min).slice(-2);
    
    let stringTime=`${fhrs}:${stringMin}:${stringSec}`;
    return stringTime;
  }
}
