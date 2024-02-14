import { Injectable } from '@angular/core';
import { Movies } from '../Model/Movie';
import { streamingPlatforms } from '../Model/data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesList: Movies[] = [
    {
      id: 1,
      title: 'Good Night',
      language: 'Tamil',
      available_languages: ['tamil', 'malayalam', 'telugu', 'kannada', 'hindi'],
      year: 2023,
      category: ['feel good', 'drama', 'romance', 'comedy'],
      certficate: 'u/a',
      director: ['Vinayak Chandrasekaran'],
      writer: ['Vinayak Chandrasekaran'],
      music_director: ['Sean Roldan'],
      platforms: [
        streamingPlatforms['hotstar'],
        streamingPlatforms['sunnxt'],
        streamingPlatforms['youtube'],
      ],
      rating: 7.7,
      img: 'https://m.media-amazon.com/images/M/MV5BYmIxMzAzOTEtY2QyZi00YzBkLThiM2ItM2I5YzNhYzM2ZTJlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg',
      desc: 'A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl. Follow how the couple overcome his sleeping problem while living together.',
    },
    {
      id: 2,
      title: 'Taare Zameen Par',
      language: 'hindi',
      year: 2007,
      platforms: [streamingPlatforms['netflix']],
      director: ['Aamir Khan', 'Amole Gupte'],
      writer: ['Amole gupte'],
      music_director: ['Shankar-Eshaan-Loy'],
      rating: 8.3,
      category: ['Feel good', 'drama'],
      img: 'https://m.media-amazon.com/images/M/MV5BYjY0MGU3MmQtMGVhOS00M2IyLWI1MTktZGUxMzBjMTE5ZDA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      desc: 'An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.',
    },
    {
      id: 3,
      title: 'Anbe Sivam',
      language: 'tamil',
      year: 2003,
      category: ['Feel good', 'drama', 'comedy'],
      rating: 8.6,
      director: ['Sundar C.'],
      writer: ['Kamal Haasan', 'Madan', 'Mohan Nair'],
      music_director: ['Vidyasagar'],
      platforms: [
        streamingPlatforms['hotstar'],
        streamingPlatforms['prime'],
        streamingPlatforms['youtube'],
        streamingPlatforms['aha'],
      ],
      img: 'https://m.media-amazon.com/images/M/MV5BNDExN2FlYWUtMDUyNi00YTQ2LTljOTMtYjc1MWY4YjMyNTQxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg',
      desc: 'Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fate.',
    },
    {
      id: 4,
      title: 'hatchi: a dog\'s tale',
      language: 'English',
      category: ['Feel good', 'drama', 'biography'],
      platforms: [streamingPlatforms['prime']],
      director: ['Lasse Hallstrom'],
      writer: ['Stephen P. Lindsey', 'Kaneto Shindô'],
      music_director: ['Jan A.P. Kaczmarek'],
      year: 2009,
      rating: 8.2,
      img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8051212_p_v8_an.jpg',
      desc: 'Professor Wilson discovers a lost Akita puppy on his way home. Despite objections from his wife, Hachi endears himself to the family and grows to be Parker\'s loyal companion. As their bond grows deeper, a beautiful relationship unfolds.',
    },
    {
      id: 5,
      title: 'Inception',
      language: 'English',
      year: 2010,
      platforms: [
        streamingPlatforms['netflix'],
        streamingPlatforms['prime'],
        streamingPlatforms['youtube'],
        streamingPlatforms['jiocinema'],
      ],
      director: ['Christopher Nolan'],
      writer: ['Christopher Nolan'],
      music_director: ['Hans Zimmer'],
      category: ['Sci-Fi', 'action', 'adventure'],
      rating: 8.8,
      img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      desc: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    },
    {
      id: 6,
      title: 'Peranbu',
      language: 'Tamil',
      platforms: [streamingPlatforms['prime']],
      director: ['Ram'],
      writer: ['Ram'],
      music_director: ['Yuvan Shankar Raja'],
      year: 2018,
      rating: 8.7,
      img: 'https://m.media-amazon.com/images/S/pv-target-images/5362164ac0bde381764540d899f400b2d5e84a009d76eb1d602e0594fd86abc6.jpg',
      desc: 'A single father tries to raise his daughter, who has cerebral palsy, even as she is beginning to wake up to her sexuality.',
    },
  ];


}
