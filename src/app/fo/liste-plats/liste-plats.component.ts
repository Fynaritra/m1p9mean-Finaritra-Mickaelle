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
  constructor(private fonction: FonctionService) {
    this.token = localStorage.getItem("token");
    this.getPlats();
  }

  ngOnInit(): void {
  }
  getPlats(){
    let result = this.fonction.rechercherPlat("", NaN, NaN, NaN, NaN, this.token);
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        console.log(response.data);
        this.listePlats = response.data;
      }
    })
  }
}
