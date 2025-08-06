import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(dateInTimestamp?: number): string {
    if (dateInTimestamp === 0 || !dateInTimestamp) return '';

    const currentDate = Date.now();
    const dateDifference = currentDate - dateInTimestamp;
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.ceil(dateDifference / millisecondsInDay);

    return daysPassed + ` dia${daysPassed <= 1 ? '' : 's'}`;
  }

}
