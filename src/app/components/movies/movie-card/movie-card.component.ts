import { Component, Input } from '@angular/core';
import { Movies } from '../../../Model/Movie';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movies;

  icon = faStar;

}
