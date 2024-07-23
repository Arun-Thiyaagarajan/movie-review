import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  public authForm: FormGroup;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public matcher = new MyErrorStateMatcher();
  public showPassword: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    public diloagRef: MatDialogRef<NavbarComponent>,
  ) { }

  ngOnInit() { 
    this.authForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    
  }
}
