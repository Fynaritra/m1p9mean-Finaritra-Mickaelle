import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { profiladmin, profilclient, profilliv, profilresto } from 'src/environments/environment';

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
    if (localStorage.getItem("profil") == profilliv) {
      return true;
    } else {
      return false;
    }
  }
  isResto() {
    if (localStorage.getItem("profil") == profilresto) {
      return true;
    } else {
      return false;
    }
  }
  isAdmin() {
    if (localStorage.getItem("profil") == profiladmin) {
      return true;
    } else {
      return false;
    }
  }
  isClient(){
    if (localStorage.getItem("profil") == profilclient) {
      return true;
    } else {
      return false;
    }
  }

}
