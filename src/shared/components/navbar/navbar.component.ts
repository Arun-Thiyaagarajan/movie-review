import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public navItems = [
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
  public backButton: boolean = false;

  constructor(
    private router: Router,
  ) { }
  
  ngOnInit() {
    if (this.router.url.includes('/movies/movie')) {
      this.backButton = true;
    } else {
      this.backButton = false;
    }
  }
}
