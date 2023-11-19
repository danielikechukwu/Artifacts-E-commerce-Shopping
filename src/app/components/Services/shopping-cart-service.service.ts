import { Injectable, OnInit } from '@angular/core';
import { Bug } from '../interface/bug';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartServiceService implements OnInit {


  cartProducts = new BehaviorSubject<Bug[]>([]);

  cartProducts$ = this.cartProducts.asObservable();

  constructor() { 

  }

  ngOnInit(): void {

  }

  createCartProducts(product: Bug){
    this.cartProducts.next([...this.cartProducts.getValue(), product]);
  }
}
