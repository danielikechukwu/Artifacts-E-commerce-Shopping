import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productEdit: Bug = {
    id: '',
    name: '',
    price: 0,
    url: '',
  };

  errMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private bugService: BugService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // _____________________________________________________
    // |When reading route parameter with Snapshot.      |
    // _____________________________________________________

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.bugService.getSingleProductList(id).subscribe({
        next: (result) => (this.productEdit = result),

        error: (err) => (this.errMessage = err),

        complete: () => console.log('Completed successfully'),
      });
    }

    // _____________________________________________________
    // |When reading route parameter with Observable.      |
    // _____________________________________________________

    // this.route.paramMap.subscribe({

    //   next: (params) => {

    //     const id = params.get('id');

    //     if(id){

    //       this.bugService.getSingleProductList(id).subscribe({

    //         next: (result) => this.productEdit = result,

    //         error: (err) => this.errMessage = err,

    //         complete: () => console.log('Completed successfully')

    //       });
    //     }

    //   }
    // })
  }

  updateProduct() {
    this.bugService
      .updateProduct(this.productEdit.id, this.productEdit)
      .subscribe({
        next: (result: void) => {
          console.log(`${this.productEdit.name}, updated successfully`);

          this.router.navigate(['']);

          console.log(result);
        },
      });
  }
}
