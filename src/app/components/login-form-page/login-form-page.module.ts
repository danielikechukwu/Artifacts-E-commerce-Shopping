import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormPageRoutingModule } from './login-form-page-routing.module';
import { LoginFormPageComponent } from './login-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormPageComponent],
  imports: [
    CommonModule,
    LoginFormPageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class LoginFormPageModule {}
