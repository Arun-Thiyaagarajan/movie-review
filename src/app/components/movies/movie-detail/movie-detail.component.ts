import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../../../Model/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  activeRoute: ActivatedRoute = inject((ActivatedRoute));
  router: Router = inject(Router);

  movie;

  ngOnInit() {
    // this.activeRoute.data.subscribe((data: Movies) => {
    //   this.movie = data;
    // });
    // this.movie = this.router.getCurrentNavigation().extras.state;
    
    this.movie = history.state;
    console.log(this.movie);
  }
}
