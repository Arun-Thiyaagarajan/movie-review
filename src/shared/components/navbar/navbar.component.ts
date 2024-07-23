import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '@app/services/common.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { AuthComponent } from '@app/components/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public navItems = [
    {
      link: 'home',
      text: 'Home' 
    },
    {
      link: 'movies',
      text: 'Movies' 
    },
    {
      link: 'aboutus',
      text: 'About Us' 
    },
  ];

  constructor(
    private router: Router,
    public commonService: CommonService,
    readonly dialog: MatDialog
  ) { }
  
  ngOnInit() {
    // if (this.router.url.includes('/movies/movie')) {
    //   this.backButton = true;
    // } else {
    //   this.backButton = false;
    // }
  }

  openDialog(): void {
    const dialogRef = new MatDialogConfig();
    dialogRef.width = '30%';
    dialogRef.panelClass = 'dialog-container';
    dialogRef.autoFocus = true;

    this.dialog.open(AuthComponent, dialogRef)
      .afterClosed().subscribe(result => {
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }
}
