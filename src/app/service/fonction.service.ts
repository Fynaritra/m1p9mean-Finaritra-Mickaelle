import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  isLoading = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //LOADER PAGE

  showLoading(){
    this.isLoading.next(true);
  }

  hideLoading(){
    this.isLoading.next(false);
  }

  //END LOADER PAGE

  //PLATS
  insertPlat(idresto:string, categorie:string, nom:string, description:string, prixvente:number, revient:number, token:string){
    let body = {
      "idresto": idresto,
      "categorie": categorie,
      "nom": nom,
      "desciprion": description,
      "prixvente": prixvente,
      "revient": revient,
      "token": token
    }
    return this.http.post(`${apiEndpoint}/api/plat/insert`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  //setVisible true
  visibleTrue(idresto:string, idplat:string, token:string){
    let body = {
      "idresto": idresto,
      "idplat": idplat,
      "token": token
    }
    return this.http.put(`${apiEndpoint}/api/plat/visible`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  //setVisible false
  visibleFalse(idresto:string, idplat:string, token:string){
    let body = {
      "idresto": idresto,
      "idplat": idplat,
      "token": token
    }
    return this.http.put(`${apiEndpoint}/api/plat/nonvisible`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  //update prix 
  updatePlat(idresto:string, idplat:string, prixvente:number, prixrevient:number, token:string){
    let body = {
      "idresto": idresto,
      "idplat": idplat,
      "prixrevient": prixrevient,
      "prixvente": prixvente,
      "token": token
    }
    return this.http.put(`${apiEndpoint}/api/plat/prix`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  //recherche par nom de plat, par id resto
  recherchePlatResto(idresto:string, name:string, token:string){
    return this.http.get(`${apiEndpoint}/api/plat/resto?idresto=${idresto}&name=${name}&token=${token}`);
  }
  //recherche multi-critère
  rechercherPlat(nom:string, minprice:number, maxprice:number, limit:number, numpage:number, token:string){
    return this.http.get(`${apiEndpoint}/api/plat/search?nom=${nom}&minprice=${minprice}&maxprice=${maxprice}&limit=${limit}&numpage=${numpage}&token=${token}`);
  }
  //fichePlat
  fichePlat(id:string, token:string){
    return this.http.get(`${apiEndpoint}/api/plat/fiche?id=${id}&token=${token}`);
  }

  getAllPlats(token:string){
    return this.http.get(`${apiEndpoint}/api/plat/all?token=${token}`);
  }

  //CRUD RESTO
  getListeResto(limit:number, numpage:number, token:string){
    return this.http.get(`${apiEndpoint}/api/resto/liste?limit=${limit}&numpage=${numpage}&token=${token}`);
  }
  getPlatsResto(idresto:string, limit:number, numpage:number, token:string){
    return this.http.get(`${apiEndpoint}/api/resto/plat?idresto=${idresto}&limit=${limit}&numpage=${numpage}&token=${token}`);
  }
  getFicheResto(idresto:string, token:string){
    return this.http.get(`${apiEndpoint}/api/resto/fiche?id=${idresto}`);
  }
  insertResto(name:string, address:string, spec:string, accueil:string, token:string){
    let body = {
      "name": name,
      "address": address,
      "spec": spec,
      "accueil": accueil,
      "token": token
    }
    return this.http.post(`${apiEndpoint}/api/resto/insert`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  updateResto(id:string, address:string, spec:string, accueil:string, token: string){
    let body = {
      "id": id,
      "address": address,
      "spec": spec,
      "accueil": accueil,
      "token": token
    }
    return this.http.put(`${apiEndpoint}/api/resto/update`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
}
