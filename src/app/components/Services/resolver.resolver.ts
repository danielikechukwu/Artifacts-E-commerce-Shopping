import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bug } from '../interface/bug';
import { BugService } from './bug.service';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ResolverResolver implements Resolve<Bug[]> {

  constructor(private bugServices: BugService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug[]> | Promise<Bug[]> {

    return this.bugServices.getProductList().pipe(delay(9000));

  }
}


export class ViewResolver implements Resolve<Bug> {

  constructor(private bugServices: BugService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> | Promise<Bug> {

    return this.bugServices.getSingleProductList('').pipe(delay(9000));

  }
}
