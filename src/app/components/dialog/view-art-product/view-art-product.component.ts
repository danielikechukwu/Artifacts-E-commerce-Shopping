import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-art-product',
  templateUrl: './view-art-product.component.html',
  styleUrls: ['./view-art-product.component.css']
})

export class ViewArtProductComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, price: string, image: string}) {

   }
   
}
