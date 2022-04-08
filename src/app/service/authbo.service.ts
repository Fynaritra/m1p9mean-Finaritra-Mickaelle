import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthboService {

  constructor(private http:HttpClient) {}

  connect(email:string, pwd: string){
    let body = {
      "email": email,
      "pwd": pwd
    }
    return this.http.post(`${apiEndpoint}/api/login`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }

}
