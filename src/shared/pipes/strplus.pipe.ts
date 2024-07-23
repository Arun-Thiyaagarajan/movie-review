import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strplus'
})
export class StrplusPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').join('+');
  }
}
