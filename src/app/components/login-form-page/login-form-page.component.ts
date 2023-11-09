import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.css'],
})
export class LoginFormPageComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }

  onSubmit() {
    this.router.navigate(['/']);
    console.log('Alert me');
  }
}
