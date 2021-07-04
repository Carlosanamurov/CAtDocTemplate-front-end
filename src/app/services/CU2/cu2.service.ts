import { Injectable } from '@angular/core';
import{Observable, Subscription,of} from 'rxjs';
import{HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import{Docente} from '../../models/Docente/docente';
@Injectable({
  providedIn: 'root'
})

export class CU2Service {

  private  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private cu2Url:string = 'http://localhost:3000/iteracion1/gest_usu_part';
  constructor(private  http : HttpClient) { }
getDocentesParticipantes():Observable<Docente[]>{
  return this.http.get<Docente[]>(this.cu2Url+'/list_part');
}

}
