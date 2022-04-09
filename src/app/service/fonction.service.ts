import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  constructor(private http:HttpClient) { }

  //PLATS
  //recherche par nom de plat, par id resto
  recherchePlatResto(idresto:string, name:string){
    
  }
  //recherche multi-critère
  rechercherPlat(nom:string, minprice:number, maxprice:number, limit:number, numpage:number, token:string){
    return this.http.get(`${apiEndpoint}/api/plat/search?&nom=${nom}&minprice=${minprice}&maxprice=${maxprice}&limit=${limit}&numpage=${numpage}&token=${token}`);
  }
  getAllPlats(token:string){
    return this.http.get(`${apiEndpoint}/api/plat/all&token=${token}`);
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
  insertResto(name:string, address:string, spec:string, accueil:string){
    let body = {
      "name": name,
      "address": address,
      "spec": spec,
      "accueil": accueil
    }
    return this.http.post(`${apiEndpoint}/api/resto/insert`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
  updateResto(id:string, address:string, spec:string, accueil:string){
    let body = {
      "id": id,
      "address": address,
      "spec": spec,
      "accueil": accueil
    }
    return this.http.put(`${apiEndpoint}/api/resto/update`, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }
}
