import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '@app/Model/Movie';
import { ClipboardService } from 'ngx-clipboard';
import { ConfigData } from '@app/services/config-data';
import { SnackbarService } from '@app/services/snackbar.service';
import { MoviesService } from '@app/services/movies.service';
import { CommonService } from '@app/services/common.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  // providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  public movie: any;
  public technicalCast: any;
  public streamingPlatforms: any;
  public isLoading: boolean = true;
  
  constructor(
    public configData: ConfigData,
    public router: Router,
    private clipboardService: ClipboardService,
    private activeRoute: ActivatedRoute,
    private snackBar: SnackbarService,
    private moviesService: MoviesService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.scrollToTop();
    this.streamingPlatforms = {...this.configData.streamingPlatforms};
    this.technicalCast = [...this.configData.technicalCast];

    const movieId = this.activeRoute.snapshot.paramMap.get('id');
    if (movieId) {
      this.commonService.isLoading = true;
      this.moviesService.fetchMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
        this.commonService.isLoading = false;
        this.isLoading = false;
      });
    }
  }

  public navigateToPlatform(url: string, movieName: string) {
    this.copyToClipboard(movieName);
    window.open(url, '_blank');
  }

  copyToClipboard(movieName: string): void {
    this.clipboardService.copyFromContent(movieName);
    alert("Movie Name Copied To Clipboard!");
  }
}
