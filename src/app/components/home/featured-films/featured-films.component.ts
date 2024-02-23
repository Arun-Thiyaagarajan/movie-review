import { Component, inject } from '@angular/core';
import { Movies } from '../../../Model/Movie';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-featured-films',
  templateUrl: './featured-films.component.html',
  styleUrl: './featured-films.component.css'
})
export class FeaturedFilmsComponent {

  icon = faStar;
  rightIcon = faChevronRight;

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
