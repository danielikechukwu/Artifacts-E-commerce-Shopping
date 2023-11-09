import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  errMessage!: string;

  productView: Bug | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bugService: BugService
  ) {
    //reading the resolver with snapshot and the data name same with the KEY defined in the app-routing.module.ts
    this.productView = this.route.snapshot.data['viewProduct'];
  }

  ngOnInit(): void {

    // ________________________________________________________________
    // |All the below codes have to be commented out since we are now   |
    // |using Resolver to fetch the data first before displaying them.  |
    // |________________________________________________________________|

    //_____________________________________________________________________________________Chosen method.
    // _____________________________________________________
    // |When reading route parameter with Snapshot.         |
    // |____________________________________________________|
    
    // const id = this.route.snapshot.paramMap.get('id');

    // if(id){

    //   this.bugService.getSingleProductList(id).subscribe({

    //     next: (result) => this.productView = result,

    //     error: (err) => this.errMessage = err,

    //     complete: () => console.log("Completed successfully")

    //   })
    // }



    //_______________________________________________________________________________________Second option.
    // _____________________________________________________
    // |When reading route parameter with observable.      |
    // _____________________________________________________

    // this.route.paramMap.subscribe({
    //   next: (para) => {
    //     const ids = para.get('id');

    //     if (ids) {
    //       this.bugService.getSingleProductList(ids).subscribe({
    //         next: (result) => (this.productView = result),

    //         error: (err) => (this.errMessage = err),

    //         complete: () => console.log('Completed successfully'),
    //       });
    //     }
    //   },
    // });

  }

  onSelectHome() {
    this.router.navigate(['']);
  }
}
