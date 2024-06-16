import { Component } from '@angular/core';
import { ConfigData } from '@app/services/config-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public currentYear: number;

  constructor(
  public configData: ConfigData
  ) { }
  
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
