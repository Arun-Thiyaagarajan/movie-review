import { Component, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { MoviesService } from '@app/services/movies.service';

@Component({
  selector: 'app-featured-films',
  templateUrl: './featured-films.component.html',
  styleUrl: './featured-films.component.css'
})
export class FeaturedFilmsComponent {

  featuredMoviesList: Movies[];
  moviesService: MoviesService = inject(MoviesService);

  ngOnInit() {
    this.moviesService.fetchAllMovies().subscribe({
      next: (movies) => {
        this.featuredMoviesList = movies;
      }
    });
  }
}
