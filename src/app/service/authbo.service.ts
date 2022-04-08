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
  isNotLogged() {
    if (localStorage.getItem('session') == null) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profil');
    localStorage.removeItem('name');
  }
  isLivreur() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2603") {
      return true;
    } else {
      return false;
    }
  }
  isResto() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2602") {
      return true;
    } else {
      return false;
    }
  }
  isAdmin() {
    if (localStorage.getItem("profil") == "624ee3b4720708c9e53a2604") {
      return true;
    } else {
      return false;
    }
  }

}
