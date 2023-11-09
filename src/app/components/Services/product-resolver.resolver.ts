import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BugService } from './bug.service';
import { Bug, BugResolved } from '../interface/bug';

@Injectable({
  providedIn: 'root'
})

export class ProductResolverResolver implements Resolve<Bug[]> {

  constructor(private bugService: BugService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug[]> {

    return this.bugService.getProductList();    
    
  }

}


@Injectable({
  providedIn: 'root'
})

export class ProductViewResolverResolver implements Resolve<Bug> {

  constructor(private bugService: BugService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {

    const id = route.paramMap.get('id');

    return this.bugService.getSingleProductList(id!);    
    
  }

}
