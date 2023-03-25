import { Injectable, OnInit } from '@angular/core';
import { Bug } from '../interface/bug';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService implements OnInit {

  items : Bug[] = [];

  constructor() { }

  ngOnInit(): void {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }



}
