import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';
import { Bug } from '../interface/bug';

@Injectable({
  providedIn: 'root',
})

export class BugService {
  baseurl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-token',
    }),
  };

  //Handling error message
  private HandleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      //The client service or error network occured so handle it accordingly.
      errorMessage = `An error occured: ${error.error}`;
    } else {
      //Backend provided an unsuccessful error code
      //Get a clue from the table on what is wrong.
      errorMessage = `The error status code is ${error.status}, the body is : ${error.message}`;
    }

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }

  constructor(private http: HttpClient) {
    this.baseurl = 'https://localhost:7103';

    console.log('Details given out');
  }

  //Fetch data
  getProductList(): Observable<Bug[]> {
    var oberservable = this.http
      .get<Bug[]>(this.baseurl + '/api/ProductArt')
      .pipe(retry(3), delay(4000), catchError(this.HandleError));

    return oberservable;
  }

  //Create product
  postUserData(productData: Bug): Observable<Bug> {
    productData.id = '00000000-0000-0000-0000-000000000000';

    var oberservable = this.http
      .post<Bug>(
        this.baseurl + '/api/ProductArt',
        productData,
        this.httpOptions
      )
      .pipe(
        tap((data) => console.log(JSON.stringify(data))),
        retry(3),
        catchError(this.HandleError)
      );

    return oberservable;
  }

  getSingleProductList(id: string): Observable<Bug> {

    let getHeaders: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });

    var observable = this.http
      .get<Bug>(this.baseurl + `/api/ProductArt/${id}`, {headers: getHeaders})
      .pipe(
        tap((data) => console.log(JSON.stringify(data))),
        delay(4000),
        catchError(this.HandleError)
      );

    return observable;
  }

  updateProduct(id: string, updatePRDT: Bug): Observable<void> {
    var observable = this.http
      .put<void>(this.baseurl + '/api/ProductArt/' + id, updatePRDT)
      .pipe(
        tap((data) => console.log(JSON.stringify(data))),
        retry(3),
        catchError(this.HandleError)
      );

    return observable;
  }

  DeleteProduct(id: string): Observable<Bug> {
    var observable = this.http
      .delete<Bug>(this.baseurl + '/api/ProductArt/' + id)
      .pipe(
        tap((data) => console.log(JSON.stringify(data))),
        retry(3),
        catchError(this.HandleError)
      );

    return observable;
  }
}

