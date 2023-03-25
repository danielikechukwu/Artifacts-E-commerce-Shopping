import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bug } from '../interface/bug';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BugService {

  // Base url
  // baseurl: string = 'https://localhost:7201';

  baseurl: string = 'https://localhost:7103';

  httpOptions = {
    
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    
  };

  constructor(private http: HttpClient) {}

  //Fetch data
  getProductList(): Observable<Bug[]>{

    return this.http.get<Bug[]>( this.baseurl + '/api/ProductArt');

  }

   //Create product
   postUserData(productData: Bug): Observable<Bug> {

    productData.id = '00000000-0000-0000-0000-000000000000';
    
     return this.http.post<Bug>( this.baseurl + '/api/ProductArt', productData, this.httpOptions );

   }

   getSingleProductList(id: string): Observable<Bug>{

    return this.http.get<Bug>(this.baseurl + '/api/ProductArt/' + id )

   }

   updateProduct(id: string, updatePRDT: Bug): Observable<Bug>{
     
    return this.http.put<Bug>(this.baseurl + '/api/ProductArt/' + id, updatePRDT )

   }

  // //Delete data
  // deleteUserById(id: number): Observable<number> {

  //   return this.http.delete<number>( this.baseurl + '/Products' + {id});

  // }


}
