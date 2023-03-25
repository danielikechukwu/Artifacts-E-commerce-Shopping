import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResolverResolver } from './components/Services/resolver.resolver';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [

  { path: '', component: HomePageComponent, resolve: {productlist: ResolverResolver}},

  { path: 'LoginFormPage', loadChildren: () => import('./components/login-form-page/login-form-page.module').then(m => m.LoginFormPageModule) },

  { path: 'SignupFormPage', loadChildren: () => import('./components/signup-form-page/signup-form-page.module').then(m => m.SignupFormPageModule) },

  { path: 'CreateProduct', component: CreateProductComponent},

  { path: 'product/:id', loadChildren: () => import('./components/view-product/view-product.module').then(m => m.ViewProductModule), resolve: {productview: ResolverResolver}},

  { path: 'edit/:id', loadChildren: () => import('./components/edit-product/edit-product.module').then(m => m.EditProductModule) },

  { path: 'cart', loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }, 

  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ WelcomePageComponent, HomePageComponent, CreateProductComponent, PageNotFoundComponent]

