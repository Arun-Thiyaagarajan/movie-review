import { Injectable, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  feelGoodMovies: Movies[] = [];

  // moviesList: Movies[] = [

  //   {
  //     available_languages: ['tamil', 'malayalam', 'telugu', 'kannada', 'hindi'],
  //     cast: ['manikandan', 'ramesh thilak', 'raichal rabecca', 'meetha raghunath', 'balaji sakthivel', 'sree arthi'],
  //     category: ['feel good', 'drama', 'romance', 'comedy'],
  //     certficate: 'u/a',
  //     desc: 'A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl. Follow how the couple overcome his sleeping problem while living together.',
  //     director: ['Vinayak Chandrasekaran'],
  //     image: 'https://m.media-amazon.com/images/M/MV5BYmIxMzAzOTEtY2QyZi00YzBkLThiM2ItM2I5YzNhYzM2ZTJlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg',
  //     language: 'Tamil',
  //     title: 'Good Night',
  //     music_director: ['Sean Roldan'],
  //     platforms: [
  //       streamingPlatforms['hotstar'],
  //       streamingPlatforms['sunnxt'],
  //       streamingPlatforms['youtube'],
  //     ],
  //     rating: 7.7,
  //     writer: ['Vinayak Chandrasekaran'],
  //     year: 2023,
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 'Taare Zameen Par',
  //     language: 'hindi',
  //     certficate: 'u',
  //     available_languages: ['hindi'],
  //     year: 2007,
  //     platforms: [streamingPlatforms['netflix']],
  //     cast: ["Darsheel Safary", "Aamir Khan", "Tanay Chheda"],
  //     director: ['Aamir Khan', 'Amole Gupte'],
  //     writer: ['Amole gupte'],
  //     music_director: ['Shankar-Eshaan-Loy'],
  //     rating: 8.3,
  //     category: ['Feel good', 'drama'],
  //     image: 'https://m.media-amazon.com/images/M/MV5BYjY0MGU3MmQtMGVhOS00M2IyLWI1MTktZGUxMzBjMTE5ZDA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  //     desc: 'An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Anbe Sivam',
  //     language: 'tamil',
  //     certficate: 'u',
  //     available_languages: ['tamil', 'telugu', 'hindi'],
  //     year: 2003,
  //     category: ['Feel good', 'drama', 'comedy'],
  //     rating: 8.6,
  //     cast: ["Kamal Haasan", "Madhavan", "Kiran Rathod", "Nassar", "Santhana Bharathi"],
  //     director: ['Sundar C.'],
  //     writer: ['Kamal Haasan', 'Madan', 'Mohan Nair'],
  //     music_director: ['Vidyasagar'],
  //     platforms: [
  //       streamingPlatforms['hotstar'],
  //       streamingPlatforms['prime'],
  //       streamingPlatforms['youtube'],
  //       streamingPlatforms['aha'],
  //     ],
  //     image: 'https://m.media-amazon.com/images/M/MV5BNDExN2FlYWUtMDUyNi00YTQ2LTljOTMtYjc1MWY4YjMyNTQxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg',
  //     desc: 'Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fate.',
  //   },
  //   {
  //     id: 4,
  //     title: 'hachi: a dog\'s tale',
  //     language: 'English',
  //     certficate: 'u',
  //     available_languages: ['japaneese', 'english'],
  //     category: ['Feel good', 'drama', 'biography'],
  //     platforms: [streamingPlatforms['prime']],
  //     cast: ["Richard Gere", "Joan Allen", "Cary-Hiroyuki Tagawa"],
  //     director: ['Lasse Hallstrom'],
  //     writer: ['Stephen P. Lindsey', 'Kaneto Shindô'],
  //     music_director: ['Jan A.P. Kaczmarek'],
  //     year: 2009,
  //     rating: 8.2,
  //     image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8051212_p_v8_an.jpg',
  //     desc: 'Professor Wilson discovers a lost Akita puppy on his way home. Despite objections from his wife, Hachi endears himself to the family and grows to be Parker\'s loyal companion. As their bond grows deeper, a beautiful relationship unfolds.',
  //   },
  //   {
  //     id: 5,
  //     title: 'Inception',
  //     language: 'English',
  //     certficate: 'u/a',
  //     available_languages: ['english', 'hindi'],
  //     year: 2010,
  //     platforms: [
  //       streamingPlatforms['netflix'],
  //       streamingPlatforms['prime'],
  //       streamingPlatforms['youtube'],
  //       streamingPlatforms['jiocinema'],
  //     ],
  //     cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
  //     director: ['Christopher Nolan'],
  //     writer: ['Christopher Nolan'],
  //     music_director: ['Hans Zimmer'],
  //     category: ['Sci-Fi', 'action', 'adventure'],
  //     rating: 8.8,
  //     image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
  //     desc: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
  //   },
  //   {
  //     id: 6,
  //     title: 'Peranbu',
  //     certficate: 'u/a',
  //     language: 'tamil',
  //     year: 2018,
  //     category: ['drama'],
  //     available_languages: ['tamil'],
  //     platforms: [streamingPlatforms['prime']],
  //     cast: ['Mammootty', 'Sadhana', 'Anjali'],
  //     director: ['Ram'],
  //     writer: ['Ram'],
  //     music_director: ['Yuvan Shankar Raja'],
  //     rating: 8.7,
  //     image: 'https://m.media-amazon.com/images/S/pv-target-images/5362164ac0bde381764540d899f400b2d5e84a009d76eb1d602e0594fd86abc6.jpg',
  //     desc: 'A single father tries to raise his daughter, who has cerebral palsy, even as she is beginning to wake up to her sexuality.',
  //   },
  // ];

  http: HttpClient = inject(HttpClient);

  fetchAllMovies() {
    return this.http.get("https://movie-review-angular-default-rtdb.firebaseio.com/movie-details.json")
      .pipe(map(response => {
        //Transform the data
        let movie = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) { // It make sure that the key is not from prototype
            movie.push({ ...response[key], id: key });
          }
        }
        
        return movie;
      }));
  }

  // filterFeelGoodMovies() {
  //   this.fetchAllMovies().subscribe({
  //     next: (movies) => {
  //       this.feelGoodMovies = movies.filter(movie => {
  //         movie.categories.includes('feel good');
  //       });
  //     }
  //   });
  // }

}
