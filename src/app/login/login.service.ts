import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  
  getCandidates (): Observable<any> {
    let  token = localStorage.getItem("token"); 
    let httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer '+ token
         })
    };
    return this.http.get("#",httpOptions)
    .pipe(map(response => {
      return response;
    },
    error=>{
      return error;
    }))   
    }

    postLogin(user): Observable<any>{       
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
      return this.http.post("#",user,httpOptions)
      .pipe(map(response => {
        return response;
      })) 
    }

}
