import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/service/fonction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-plats',
  templateUrl: './liste-plats.component.html',
  styleUrls: ['./liste-plats.component.css']
})
  
export class ListePlatsComponent implements OnInit {

  listePlats: any = [];
  token: any;
  nom = "";
  minprice = NaN;
  maxprice = NaN;
  limit = 9;
  numpage = 1;

  constructor(private fonction: FonctionService, private router:Router) {
    this.token = localStorage.getItem("token");
    this.getPlats();
  }

  ngOnInit(): void {
    if(localStorage.getItem('panier')!=undefined){
      console.log(JSON.parse(JSON.stringify(localStorage.getItem('panier') || '{}')));
    }
  }
  getPlats(){
    let result = this.fonction.rechercherPlat(this.nom, this.minprice, this.maxprice, this.limit, this.numpage, this.token);
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        this.listePlats = response.data;
      }
    })
  }
  precedent(){
    this.numpage --;
    this.getPlats();
  }

  suivant(){
    this.numpage ++;
    this.getPlats();
  }
}
