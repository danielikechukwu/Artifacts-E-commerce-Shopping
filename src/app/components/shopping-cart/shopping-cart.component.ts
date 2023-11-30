import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { Bug } from '../interface/bug';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, map, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  title = 'Shopping Cart';

  items: Bug[] | undefined;
  totalCartAmount!: number;
  cartProductsSubscription!: Subscription;
  cartProductsAmountSubscription!: Subscription;

  constructor(
    private shoppingcart: ShoppingCartServiceService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    if (this.cartProductsSubscription) {
      this.cartProductsSubscription.unsubscribe();
    }

    if (this.cartProductsAmountSubscription) {
      this.cartProductsAmountSubscription.unsubscribe;
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

    this.cartProductsAmountSubscription = this.shoppingcart.cartProducts$
      .pipe(
        map((item) =>
          item.reduce((total: number, value: Bug) => {
            return total + value.price;
          }, 0)
        )
      )
      .subscribe({
        next: (response: number) => {
          this.totalCartAmount = response;
        },
        error: () => {
          this.matSnackBar.open(
            'Oops!!!, Sorry cummulated amount could not be resolved',
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
