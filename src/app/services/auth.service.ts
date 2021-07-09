import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { User, userResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL= 'http://localhost:3000/api/auth/';

  constructor( private http: HttpClient) { }
  login(authData:User): Observable<userResponse | void>{
    return this.http
    .post<userResponse>(`${this.URL}` ,authData)
    .pipe(
      map((res : userResponse) =>{
        console.log(res); 

        
       }),
       catchError((err) => this. handlerError(err))
     );

     
  }
  private handlerError(err:any): Observable<never> {
    let errorMessage = 'Error data';
    if(err){
      errorMessage = `Error: code ${err.message} `;

    }
    window.alert(errorMessage);
    return throwError(errorMessage);

    
  }

}
 