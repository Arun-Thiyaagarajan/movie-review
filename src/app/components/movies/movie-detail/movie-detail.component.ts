import { AfterViewInit, Component, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../../../Model/Movie';
import { technicalCast } from '../../../Model/data';
import { ClipboardService } from 'ngx-clipboard';
import { streamingPlatforms } from '../../../Model/data';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  activeRoute: ActivatedRoute = inject((ActivatedRoute));
  router: Router = inject(Router);
  clipboardService: ClipboardService = inject(ClipboardService);

  movie;
  technicalCast;
  streamingPlatforms = { ...streamingPlatforms };

  copyToClipboard(movieName: string): void {
    this.clipboardService.copyFromContent(movieName);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    // this.activeRoute.data.subscribe((data: Movies) => {
    //   this.movie = data;
    // });
    // this.movie = this.router.getCurrentNavigation().extras.state;
    this.scrollToTop();
    this.technicalCast = [...technicalCast];
    this.movie = history.state;
    console.log(this.movie);
  }
}
