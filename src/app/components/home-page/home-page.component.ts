import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../interface/bug';
import { BugService } from '../Services/bug.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  price: number = 234;

  furnitures!: Bug[];

  sub: Subscription | undefined;

  constructor(
    private router: Router,
    private bugService: BugService,
    private route: ActivatedRoute,
    private _bugService: BugService
  ) {
    //reading the resolver with snapshot and the data name same with the KEY defined in the app-routing.module.ts
    // this.furnitures = this.route.snapshot.data['productList'];
  }

  ngOnInit(): void {
    // ________________________________________________________________
    // |All the below codes have to be commented out since we are now   |
    // |using Resolver to fetch the data first before displaying them.  |
    // |________________________________________________________________|
    this.sub = this.bugService.getProductList().subscribe({
      next: (furnit) => {
        this.furnitures = furnit;
      },
      error: (Response) => {
        console.log(Response);
      },
      complete: () => console.log('Observer got a complete notification.'),
    });
    // timer(0, 100).subscribe(() => {
    //   console.log(this.lisfilter);
    // });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onView(furniture: Bug) {
    this.router.navigate([
      '/product',
      furniture.id,
      furniture.name,
      furniture.price,
    ]);
  }

  onEdit(furniture: Bug) {
    this.router.navigate([
      '/edit',
      furniture.id,
      furniture.name,
      { outlets: { popup: null } },
    ]);
  }

  addItemToCart() {
    alert('Hello you clicked me');
  }

  addToCart(furniture: Bug) {
    alert('Hello you clicked me');
  }
}
