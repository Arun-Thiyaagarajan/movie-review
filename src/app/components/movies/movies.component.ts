import { Component, inject } from '@angular/core';
import { Movies } from '../../Model/Movies';
import { MoviesService } from '../../services/movies.service';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  icon = faStar;
  rightIcon = faChevronRight;

  moviesList: Movies[];
  moviesService: MoviesService = inject(MoviesService);

  ngOnInit() {
    this.moviesList = this.moviesService.moviesList;
  }
}
