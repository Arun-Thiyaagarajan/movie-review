import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  template: `
    <!-- <fa-icon [icon]="icon" [styles]="{'color': color}"></fa-icon> -->
    <fa-icon [icon]="icon"></fa-icon>
  `
})
export class FaIconComponent {
  @Input() icon: IconProp;
  @Input() color: string;

  constructor() { }
}
