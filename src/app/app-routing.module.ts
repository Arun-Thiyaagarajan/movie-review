import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  {
    path: 'movies',
    children: [
      { path: 'movie/:id', component: MovieDetailComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
