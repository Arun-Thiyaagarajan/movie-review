import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')    // Remove characters that are not word, space, or hyphen
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/--+/g, '-');       // Replace multiple hyphens with single hyphen
  }

}
