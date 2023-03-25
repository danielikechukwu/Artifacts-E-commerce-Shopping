import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormPageComponent } from './signup-form-page.component';

const routes: Routes = [{ path: '', component: SignupFormPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupFormPageRoutingModule { }
