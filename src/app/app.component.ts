import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError,  } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'Art Shop';

  Loading;
  
  constructor(private _route: Router) {

    this._route.events.subscribe(ev => {

      if(ev instanceof NavigationStart){
        
        this.Loading = true;

      }

      if(ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError){
        
        this.Loading = false;

      }
    })
  }
}
