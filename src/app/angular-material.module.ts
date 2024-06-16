import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
