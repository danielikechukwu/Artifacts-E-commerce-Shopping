import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  productEdit: Bug = {

    id: '',
    name: '',
    price: 0,
    url: ''

  }

  constructor(private route: ActivatedRoute, private bugService: BugService, private router: Router){}

  ngOnInit(): void {  

    this.route.paramMap.subscribe({
      next: (params) => {

        const id = params.get('id');

        if(id){
          //call api
          this.bugService.getSingleProductList(id).pipe(delay(500))
          .subscribe({
            
            next: (result) =>{

              this.productEdit = result;

              console.log(result)

            }
          });
        }
      }
    })

  }

  updateProduct() {

    this.bugService.updateProduct(this.productEdit.id, this.productEdit)
    .subscribe({
      next: (result) => {

        this.productEdit = result;

        this.router.navigate([''])

        console.log(result)
      }
    })
    
  }

}
