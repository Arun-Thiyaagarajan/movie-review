import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { EFilmCategory } from '@app/Model/common.enum';
import { CommonService } from '@app/services/common.service';
import { MoviesService } from '@app/services/movies.service';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  rightIcon = faChevronRight;
  public isLoading: boolean = false;

  public moviesList: Movies[] = [];
  public feelGoodMoviesList: Movies[] = [];

  constructor(
    private commonService: CommonService,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.commonService.scrollToTop();
    this.commonService.isLoading = true;
    this.moviesService.fetchAllMovies().subscribe({
      next: (movies) => {
        this.commonService.isLoading = false;
        this.moviesList = movies;
        this.filterMovies(EFilmCategory.feelgood);
      }
    }); 
  }

  public filterMovies(genre: string) {
    this.feelGoodMoviesList = this.moviesList.filter(movie => movie.categories.includes(genre));
  }
}
