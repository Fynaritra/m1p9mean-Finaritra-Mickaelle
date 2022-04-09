import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  restoList : any;
 
  limit = 5;
  numpage = 1;
  token:any;

  constructor(private fonction: FonctionService) { 
    this.token = localStorage.getItem("token");
    
  }

  ngOnInit(): void {
    this.getResto();
  }

  getResto(){
    let result = this.fonction.getListeResto(this.limit, this.numpage, this.token);
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        this.restoList = response.data;
      }
    })
  }

  precedent(){
    this.numpage --;
    this.getResto();
  }

  suivant(){
    this.numpage ++;
    this.getResto();
  }

}
