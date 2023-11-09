import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form-page',
  templateUrl: './signup-form-page.component.html',
  styleUrls: ['./signup-form-page.component.css']
})

export class SignupFormPageComponent implements OnInit {

  signinform!: FormGroup;

  ngOnInit(): void {

    this.signinform = new FormGroup({

      fullname : new FormControl('', Validators.required),

      email : new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
      
      username : new FormControl('', [Validators.required, Validators.minLength(5)]),

      password : new FormControl('', [Validators.required, Validators.minLength(8)])

    })
    
  }

  get fullname() { return this.signinform.get('fullname')}

  get email() { return this.signinform.get('email')}

  get username() { return this.signinform.get('username')}

  get password() {return this.signinform.get('password')}


  onSubmit() {
    console.log(this.signinform.value)
  }

}
