import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-fiche-plat',
  templateUrl: './fiche-plat.component.html',
  styleUrls: ['./fiche-plat.component.css']
})
export class FichePlatComponent implements OnInit {

  idPlat: string = "";
  token: any;
  fiche: any;


  constructor(private router:ActivatedRoute,
    private service: FonctionService) {
    this.token = localStorage.getItem("token");
    this.router.queryParams.subscribe((params: Params) => {
      this.idPlat = params['id']
    });
  }

  ngOnInit(): void {
    let result = this.service.fichePlat(this.idPlat, this.token);
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        this.fiche = response.data;
        console.log(response.data);
      }
    })
  }

}
