import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(dateInTimestamp: number): number {
    if (dateInTimestamp === 0) return 0;

    const currentDate = Date.now();
    const dateDifference = currentDate - dateInTimestamp;
    const millisecondsInDay = 24 * 60 * 60 * 1000;

    return Math.ceil(dateDifference / millisecondsInDay);
  }

}
