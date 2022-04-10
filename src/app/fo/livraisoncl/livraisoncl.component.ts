import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-livraisoncl',
  templateUrl: './livraisoncl.component.html',
  styleUrls: ['./livraisoncl.component.css']
})
export class LivraisonclComponent implements OnInit {

  token : any;
  idcommande = "";
  idresto = "";
  adresse = "";
  daty: any;

  constructor(private actRouter:ActivatedRoute, private fonction: FonctionService, private router: Router) {
    this.token = localStorage.getItem("token");
    this.actRouter.queryParams.subscribe((params: Params) => {
      this.idresto = params['idresto'],
      this.idcommande = params['id']
    });
   }

  ngOnInit(): void {
  }

  livrer(){
    let result = this.fonction.insertLiv("", this.idresto, this.adresse, this.daty, this.idcommande, this.token)
      result.subscribe((response: any) => {
        if (response.status != 200) {
          alert(response.data);
        }else{
          alert('Livraison enregistrée');
          this.router.navigate(['client/mescommandes']);
        }
      })
  }

}
