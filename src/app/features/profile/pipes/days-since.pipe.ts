import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(dateInTimestamp: number): number {
    const currentDate = Date.now();
    const dateDifference = currentDate - dateInTimestamp;
    const millisecondsInDay = 1000 * 60 * 60 * 24

    return Math.floor(dateDifference / millisecondsInDay);
  }

}
