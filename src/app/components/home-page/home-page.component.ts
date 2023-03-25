import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';
import { delay } from 'rxjs';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  price: number = 234;

 furnitures: Bug[];

  constructor( private router: Router, private bugService: BugService, private shoppingcart: ShoppingCartServiceService, private route: ActivatedRoute ){

    this.furnitures = this.route.snapshot.data['productlist'];


  }

  ngOnInit(): void {
    
    // this.bugService.getProductList().subscribe((result: any) => {this.furnitures = result; console.log(result)})

    // this.bugService.getProductList().pipe(delay(500))
    // .subscribe({
      // next: (furnitures) => {

      // this.furnitures = furnitures

//     console.log(furnitures)

      // },

      // error: (Response) => {
      //   console.log(Response)
      // }
    // })

  }

  onView(furniture) {

    // to navigate to a new link we will Router
    this.router.navigate(['/product', furniture.id])

  } 

  onEdit(furniture){

    this.router.navigate(['/edit', furniture.id] )
  }

  addItemToCart() {
    alert("Hello you clicked me")
  }

  addToCart(furniture) {
    this.shoppingcart.addToCart(furniture);
    console.log(furniture);
  }


}



// this.bugService.getProductList().pipe(delay(500))
// .subscribe({
//   next: (furnitures) => {

//     this.furnitures = furnitures

//     console.log(furnitures)
//   },

//   error: (Response) => {
//     console.log(Response)
//   }
// })