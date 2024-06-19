import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/icon.module';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SlugifyPipe } from './pipes/slugify.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SlugifyPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    IconModule,
    MatProgressBarModule,
    SlugifyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
