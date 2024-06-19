import { Component, Input } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { CommonService } from '@app/services/common.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movies;
  public isLoading: boolean = false;

  constructor(
    public commonService: CommonService,
  ) { }
  
  ngOnInit() {
    this.isLoading = this.commonService.isLoading;
  }
}
