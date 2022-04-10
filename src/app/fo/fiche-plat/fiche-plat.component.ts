import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-fiche-plat',
  templateUrl: './fiche-plat.component.html',
  styleUrls: ['./fiche-plat.component.css']
})
export class FichePlatComponent implements OnInit {

  nomPers: any = "";
  idPlat: string = "";
  idclient: string = "";
  idresto: string = "";
  panier: any = [];
  platsResto: any = [];
  token: any;
  fiche: any = {
    categorie: "",
    description: "",
    nom: "",
    prixvente: 0,
    resto_dc: []
  };

  nombreCmd = 1;
  nbCmd = 1;

  constructor(private router: ActivatedRoute,
    private service: FonctionService,
    private route: Router) {
    if (localStorage.getItem("session") != "true") {
      this.route.navigate(['authfo']);
    }
    this.nomPers = localStorage.getItem("name");
    this.token = localStorage.getItem("token");
    this.router.queryParams.subscribe((params: Params) => {
      this.idPlat = params['id']
    });
  }

  ngOnInit(): void {
    let result = this.service.fichePlat(this.idPlat, this.token);
    result.subscribe((response: any) => {
      if (response.status != 200) {
        alert(response.data);
      } else {
        this.fiche = response.data[0];
        this.idresto = response.data[0].idresto;
        this.getPlatResto();
      }
    });
  }

  getPlatResto() {
    if (this.idresto != "") {
      let result = this.service.recherchePlatResto(this.idresto, "", this.token);
      result.subscribe((response: any) => {
        if (response.status != 200) {
          alert(response.data);
        } else {
          this.platsResto = response.data;
          console.log(response.data);
        }
      })
    }
  }

  commander(plat: any) {
    if(this.panier.length!=0 && (plat.idresto!=this.panier[0].idresto)){
      alert("Quelques articles dans le menu d'un autre restaurant ont déjà été ajoutés à votre panier. Merci d'annuler ou de valider la commande précédente");
    }else{
      this.panier.push(plat);
      localStorage.setItem("panier", this.panier);
      console.log(this.panier)
    }
  }

}
