import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes = [];
  limit = 5;
  numpage = 1;
  token:any;

  constructor(private fonction:FonctionService) { }

  ngOnInit(): void {
    this.getAllCmd();
  }

  getAllCmd(){
    let result = this.fonction.getCmd();
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        this.commandes = response.data;
        console.log(response.data);
      }
    })
  }

  precedent(){
    this.numpage --;
    this.getAllCmd();
  }

  suivant(){
    this.numpage ++;
    this.getAllCmd();
  }
}
