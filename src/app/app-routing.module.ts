import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CreateCanDeactivateProductGuard } from './components/create-product/create-product.guard';
import { UserModule } from './components/Users/user.module';
import {
  ProductResolverResolver,
  ProductViewResolverResolver,
} from './components/Services/product-resolver.resolver';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'welcome',
  //   pathMatch: 'full',
  // },

  {
    path: 'welcome',
    component: WelcomePageComponent,
  },

  {
    path: '',

    component: HomePageComponent,

    // resolve: { productList: ProductResolverResolver },
  },

  {
    path: 'SignupFormPage',
    loadChildren: () =>
      import('./components/signup-form-page/signup-form-page.module').then(
        (m) => m.SignupFormPageModule
      ),
  },
  {
    path: 'CreateProduct',
    component: CreateProductComponent,
    canDeactivate: [CreateCanDeactivateProductGuard],
  },
  {
    path: 'product/:id/:name/:price',

    loadChildren: () =>
      import('./components/view-product/view-product.module').then(
        (m) => m.ViewProductModule
      ),

    resolve: { viewProduct: ProductViewResolverResolver },
  },
  {
    path: 'edit/:id/:name',
    loadChildren: () =>
      import('./components/edit-product/edit-product.module').then(
        (m) => m.EditProductModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  WelcomePageComponent,
  HomePageComponent,
  CreateProductComponent,
  PageNotFoundComponent,
];
