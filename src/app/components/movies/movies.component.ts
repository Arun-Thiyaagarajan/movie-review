import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { MoviesService } from '@app/services/movies.service';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  rightIcon = faChevronRight;
  isLoading: boolean = false;

  moviesList: Movies[] = [];
  moviesService: MoviesService = inject(MoviesService);

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    this.scrollToTop();

    this.isLoading = true;
    this.moviesService.fetchAllMovies().subscribe({
      next: (movies) => {
        this.isLoading = false;
        this.moviesList = movies;
      }
    }); 
  }
}
