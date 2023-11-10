import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingCartServiceService } from '../../Services/shopping-cart-service.service';
import { Bug } from '../../interface/bug';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-art-product',
  templateUrl: './view-art-product.component.html',
  styleUrls: ['./view-art-product.component.css'],
})
export class ViewArtProductComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { name: string; price: string; image: string; product: Bug },
    private shoppingCartServiceService: ShoppingCartServiceService
    , private matSnackBar: MatSnackBar
  ) {}

  addToCart(): void {
    this.shoppingCartServiceService.createCartProducts(this.data.product);

    this.matSnackBar.open('Product successfully added to cart'
    , 'cancel'
    , {
      duration: 3000
      , verticalPosition: 'top'
      , panelClass: ['success-snack-bar-color']
    })


  }
}
