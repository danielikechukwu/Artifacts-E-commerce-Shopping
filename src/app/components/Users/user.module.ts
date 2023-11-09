import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'LoginFormPage',
        loadChildren: () =>
          import('../login-form-page/login-form-page.module').then(
            (m) => m.LoginFormPageModule
          ),
      },
    ]),
  ],
})
export class UserModule {}
