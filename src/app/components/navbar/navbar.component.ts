import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    {
      link: 'home',
      text: 'Home' 
    },
    {
      link: 'movies',
      text: 'Movies' 
    },
    {
      link: 'aboutus',
      text: 'About Us' 
    },
  ];
}
