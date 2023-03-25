import { Component, OnInit } from '@angular/core';
import { BugService } from '../Services/bug.service';
import { Bug } from '../interface/bug';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  btnText: string = "Save";

  addProduct: Bug = {

    id: '',
    name: '',
    price: 0,
    url: ''

  }

  constructor(private bugService: BugService, private router: Router) {}

  ngOnInit(): void {}

  addProductDetails(){

    this.bugService.postUserData(this.addProduct)
    .subscribe({
      next: (Response) => {

        this.router.navigate([''])

        this.addProduct = Response;
        console.log(Response)

      },

      error: (Response) => {
        console.log(Response)
      }
    })

  }

}
