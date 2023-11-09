import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
} from '@angular/router';
import { BugService } from './components/Services/bug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  text: string = 'Hello';
  // showLoadingIndicator: boolean = true;

  constructor(private _router: Router, private _bugService: BugService) {
    //the instanceof returns boolean, so it checks if it is an instance of NavigationStart or NavigationEnd.

    // this._router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     this.showLoadingIndicator = true;
    //   }

    //   if (
    //     routerEvent instanceof NavigationEnd ||
    //     routerEvent instanceof NavigationCancel ||
    //     routerEvent instanceof NavigationCancel
    //   ) {
    //     this.showLoadingIndicator = false;
    //   }
    // });
  }

  ngOnInit(): void {

  }
}
