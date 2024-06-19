import { Injectable, inject } from '@angular/core';
import { Movies } from '@app/Model/Movie';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  feelGoodMovies: Movies[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  public fetchAllMovies() {
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

  public fetchMovieById(id: string) {
    return this.http.get(`https://movie-review-angular-default-rtdb.firebaseio.com/movie-details/${id}.json`)
      .pipe(map(response => {
        return { ...response, id };
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
