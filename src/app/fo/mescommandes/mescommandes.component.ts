import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FonctionService } from 'src/app/service/fonction.service';
import { etatcloture } from 'src/environments/environment';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {

  cmd: any = [];
  idclient: any = "";
  token: any = "";
  constructor(private fonctionservice:FonctionService, private router:Router) { 
    this.idclient = localStorage.getItem("idclient")||"";
    this.token = localStorage.getItem("token")||"";
  }

  ngOnInit(): void {
    this.getCmd()
  }

  getCmd(){
    if(localStorage.getItem("idclient")==null || localStorage.getItem("idclient") == undefined){
      alert("Veuillez vous connecter ou créez un compte");
      this.router.navigate(['client/acc']);
    }else{
      let result = this.fonctionservice.mesCommandes(this.idclient, this.token, etatcloture);
      result.subscribe((response:any)=>{
        if(response.status!=200){
          alert(response.data);
        }else{
          console.log(response.data);
          this.cmd = response.data;
        }
      })
    }
  }

}
