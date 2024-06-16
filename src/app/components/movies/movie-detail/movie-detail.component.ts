import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '@app/Model/Movie';
import { ClipboardService } from 'ngx-clipboard';
import { ConfigData } from '@app/services/config-data';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

/** Custom options the configure the tooltip's default show/hide delays. */
// export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
//   showDelay: 1000,
//   hideDelay: 1000,
//   touchendHideDelay: 1000,
// };

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
  
  constructor(
    public configData: ConfigData,
    public router: Router,
    private activeRoute: ActivatedRoute,
    private clipboardService: ClipboardService
  ) { }

  ngOnInit() {
    // this.activeRoute.data.subscribe((data: Movies) => {
    //   this.movie = data;
    // });
    // this.movie = this.router.getCurrentNavigation().extras.state;
    this.scrollToTop();
    this.streamingPlatforms = {...this.configData.streamingPlatforms};
    this.technicalCast = [...this.configData.technicalCast];
    this.movie = history.state;
    // console.log(this.movie);
  }

  copyToClipboard(movieName: string): void {
    this.clipboardService.copyFromContent(movieName);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
