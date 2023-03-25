import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormPageRoutingModule } from './signup-form-page-routing.module';
import { SignupFormPageComponent } from './signup-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    SignupFormPageComponent
  ],

  imports: [
    CommonModule,
    SignupFormPageRoutingModule,
    ReactiveFormsModule

  ]
  
})
export class SignupFormPageModule { }
