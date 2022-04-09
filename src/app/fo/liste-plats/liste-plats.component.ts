import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/service/fonction.service';

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
  limit = NaN;
  numpage = NaN;

  constructor(private fonction: FonctionService) {
    this.token = localStorage.getItem("token");
    this.getPlats();
  }

  ngOnInit(): void {
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
}
