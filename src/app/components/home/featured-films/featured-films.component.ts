import { Component } from '@angular/core';
import { Movies } from '../../../Model/Movies';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featured-films',
  templateUrl: './featured-films.component.html',
  styleUrl: './featured-films.component.css'
})
export class FeaturedFilmsComponent {

  icon = faStar;
  rightIcon = faChevronRight;

  moviesList: Movies[] = [
      {
        title: 'Good Night',
        language: 'Tamil',
        year: 2023,
        rating: 7.7,
        img: 'https://m.media-amazon.com/images/M/MV5BYmIxMzAzOTEtY2QyZi00YzBkLThiM2ItM2I5YzNhYzM2ZTJlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg',
        desc: '',
      },
      {
        title: 'Taare Zameen Par',
        language: 'hindi',
        year: 2007,
        rating: 8.3,
        img: 'https://m.media-amazon.com/images/M/MV5BYjY0MGU3MmQtMGVhOS00M2IyLWI1MTktZGUxMzBjMTE5ZDA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        desc: '',
      },
      {
        title: 'Anbe Sivam',
        language: 'tamil',
        year: 2003,
        rating: 8.6,
        img: 'https://m.media-amazon.com/images/M/MV5BNDExN2FlYWUtMDUyNi00YTQ2LTljOTMtYjc1MWY4YjMyNTQxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg',
        desc: '',
      },
      {
        title: 'hatchi: a dog\'s tale',
        language: 'English',
        year: 2009,
        rating: 8.2,
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8051212_p_v8_an.jpg',
        desc: '',
      },
      {
        title: 'Inception',
        language: 'English',
        year: 2010,
        rating: 8.8,
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
        desc: '',
      },
      {
        title: 'Peranbu',
        language: 'Tamil',
        year: 2018,
        rating: 8.7,
        img: 'https://m.media-amazon.com/images/S/pv-target-images/5362164ac0bde381764540d899f400b2d5e84a009d76eb1d602e0594fd86abc6.jpg',
        desc: '',
      },
      {
        title: 'Good Night',
        language: 'Tamil',
        year: 2023,
        rating: 7.7,
        img: 'https://m.media-amazon.com/images/M/MV5BYmIxMzAzOTEtY2QyZi00YzBkLThiM2ItM2I5YzNhYzM2ZTJlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg',
        desc: '',
      },
      {
        title: 'Taare Zameen Par',
        language: 'hindi',
        year: 2007,
        rating: 8.3,
        img: 'https://m.media-amazon.com/images/M/MV5BYjY0MGU3MmQtMGVhOS00M2IyLWI1MTktZGUxMzBjMTE5ZDA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        desc: '',
      },
      {
        title: 'Anbe Sivam',
        language: 'tamil',
        year: 2003,
        rating: 8.6,
        img: 'https://m.media-amazon.com/images/M/MV5BNDExN2FlYWUtMDUyNi00YTQ2LTljOTMtYjc1MWY4YjMyNTQxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg',
        desc: '',
      },
      {
        title: 'hatchi: a dog\'s tale',
        language: 'English',
        year: 2009,
        rating: 8.2,
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8051212_p_v8_an.jpg',
        desc: '',
      },
      {
        title: 'Inception',
        language: 'English',
        year: 2010,
        rating: 8.8,
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
        desc: '',
      },
      {
        title: 'Peranbu',
        language: 'Tamil',
        year: 2018,
        rating: 8.7,
        img: 'https://m.media-amazon.com/images/S/pv-target-images/5362164ac0bde381764540d899f400b2d5e84a009d76eb1d602e0594fd86abc6.jpg',
        desc: '',
      },
  ];
}
