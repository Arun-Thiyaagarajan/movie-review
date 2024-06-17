import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
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
  isLoading: boolean = false;

  moviesList: Movies[] = [];
  moviesService: MoviesService = inject(MoviesService);

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  constructor(
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.scrollToTop();

    this.commonService.setLoader(true);
    this.moviesService.fetchAllMovies().subscribe({
      next: (movies) => {
        this.commonService.setLoader(false);
        this.moviesList = movies;
      }
    }); 
  }
}
