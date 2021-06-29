import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AportesService {
  private URL='http://localhost:3000/api/auth';

  constructor(private http:HttpClient) { }
  getAporte(): Observable<any>{
    return this.http.get(this.URL+'/aportelogro')
  }
}
