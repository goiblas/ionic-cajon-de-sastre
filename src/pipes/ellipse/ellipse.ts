import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EllipsePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ellipse',
})
export class EllipsePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return (value.length > 10 ? value.substring(0, 10) + '...' : value);
  }
}
