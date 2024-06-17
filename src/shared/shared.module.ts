import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/icon.module';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    IconModule,
    MatProgressBarModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
