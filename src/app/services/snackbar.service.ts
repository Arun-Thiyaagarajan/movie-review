import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackbar(message: string, positions?: Object, duration: number = 3000) {
    this._snackBar.open(
      message,
      '',
      {
        duration: duration,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      }
    );
  }
}
