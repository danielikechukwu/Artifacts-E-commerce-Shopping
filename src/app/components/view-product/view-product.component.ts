import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit{

  productView: Bug = {

    id: '',
    name: '',
    price: 0,
    url: ''

  }

  constructor( private router: Router, private route: ActivatedRoute, private bugService: BugService){

    

     this.productView = this.route.snapshot.data['productview']


  }

  ngOnInit(): void {

    this.route.paramMap.subscribe({

      next: (params) => {

        const id = params.get('id')

        if(id){

          this.bugService.getSingleProductList(id)
          .subscribe({
            next: (result) => {

              this.productView = result;
              console.log(result)
            }
          })
        }
      }
    })

  }

  onSelectHome(){
    this.router.navigate([''])
  }
  
}


// this.route.paramMap.subscribe({

//   next: (params) => {

//     const id = params.get('id')

//     if(id){
      
//       this.bugService.getSingleProductList(id).pipe(delay(500))
//       .subscribe({
//         next: (result) => {

//           this.productView = result;
//           console.log(result)
//         }
//       })
//     }
//   }
// })