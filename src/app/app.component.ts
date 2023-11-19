import { Component, OnInit } from '@angular/core';
import { Bug } from './components/interface/bug';
import { ShoppingCartServiceService } from './components/Services/shopping-cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  shoppingCartProducts!: Bug[];
  text: string = 'Hello';

  constructor(private shoppingCartServiceService: ShoppingCartServiceService) {}

  ngOnInit(): void {
    this.shoppingCartServiceService.cartProducts$.subscribe((value: Bug[]) => {
      this.shoppingCartProducts = value;
      console.log(this.shoppingCartProducts.length);
    });
  }
}
