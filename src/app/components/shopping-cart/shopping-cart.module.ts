import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
    , MatButtonModule
    , ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
