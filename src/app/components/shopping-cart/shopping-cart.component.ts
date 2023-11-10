import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { Bug } from '../interface/bug';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  title = 'Shopping Cart';

  items: Bug[] | undefined;
  cartProductsSubscription!: Subscription;

  constructor(
    private shoppingcart: ShoppingCartServiceService,
    private matSnackBar: MatSnackBar
  ) {

  }

  ngOnDestroy(): void {
   if(this.cartProductsSubscription){
    this.cartProductsSubscription.unsubscribe();
   }
  }

  ngOnInit() {
    this.cartProductsSubscription = this.shoppingcart.cartProducts$.subscribe({
      next: (response: Bug[]) => {
        this.items = response;
      },
      error: () => {
        this.matSnackBar.open(
          'Oops, Sorry your selected product could not be retrieved',
          '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['red-snack-bar-color'],
          }
        );
      },
    });
  }
}
