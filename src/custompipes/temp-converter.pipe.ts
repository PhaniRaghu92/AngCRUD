import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  transform(tempInput: number, unit: string = 'F'): string {
    if (unit === 'C') {
      return `${Number(tempInput) - 73} C`;
    } else {
      return `${Number(tempInput)} F`;
    }
  }
}
