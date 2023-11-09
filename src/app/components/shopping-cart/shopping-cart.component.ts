import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { Bug } from '../interface/bug';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  title= "Shopping Cart"

  items: Bug[] | undefined;

  constructor(private shoppingcart: ShoppingCartServiceService){}

  ngOnInit() {
    this.items = this.shoppingcart.getItems();
  }



}
