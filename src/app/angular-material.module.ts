import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRippleModule
  ]
})
export class AngularMaterialModule { }
