import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BugService } from '../Services/bug.service';
import { Bug } from '../interface/bug';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
//import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})

export class CreateProductComponent implements OnInit, OnDestroy {
  //communicating with the canDeactive service.
  @ViewChild('form') public createProductForm!: NgForm;
  postUserDataSubscription!: Subscription;

  //isSave: boolean = false;

  btnText: string = 'Save';

  userForm: any;

  addProduct: Bug = {
    id: '',
    name: '',
    price: 0,
    url: '',
  };

  constructor(private bugService: BugService
    , private router: Router) {

    }

    ngOnDestroy(): void {
      
      if(this.postUserDataSubscription){
        this.postUserDataSubscription.unsubscribe;
      }
    }

  ngOnInit(): void {
    // this.addProductForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   url: new FormControl('', Validators.required),
    //   price: new FormControl('', Validators.required),
    // });
  }

  addProductDetails() {
    //this.isSave = true;

    this.postUserDataSubscription = this.bugService.postUserData(this.addProduct)
    .subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: (Response) => console.log(Response),
    });

  }
}
