import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/components/home/header/header.component';
import { HomeComponent } from '@app/components/home/home.component';
import { FeaturedFilmsComponent } from '@app/components/home/featured-films/featured-films.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviesComponent } from '@app/components/movies/movies.component';
import { MovieDetailComponent } from '@app/components/movies/movie-detail/movie-detail.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { MovieCardComponent } from '@app/components/movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedFilmsComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ClipboardModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
