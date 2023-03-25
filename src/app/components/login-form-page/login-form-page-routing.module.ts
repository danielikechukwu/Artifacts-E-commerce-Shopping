import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormPageComponent } from './login-form-page.component';

const routes: Routes = [{ path: '', component: LoginFormPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFormPageRoutingModule { }
