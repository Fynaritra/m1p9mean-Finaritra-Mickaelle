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
  contact: any = "";
  idPlat: string = "";
  idclient: any = "";
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
    this.idclient = localStorage.getItem("idclient");
    this.contact = localStorage.getItem("contact");
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
    plat.quantite = plat.nb;
    this.panier.push({
      "idplat": plat._id,
      "quantite": plat.quantite,
      "revient": plat.revient,
      "prix": plat.prixvente,
      "nom": plat.nom,
      "categorie": plat.categorie,
      "description": plat.description
    });
  }

  annuler(){
    this.panier = [];
  }

  finaliser(){
    if(this.panier.length==null){
      alert("Votre panier est vide");
    }else{
      let result = this.service.insertCmd(this.idclient, this.idresto, this.panier, this.token);
      result.subscribe((response: any) => {
        if (response.status != 200) {
          alert(response.data);
        } else {
          alert("Commande enregistrée");
          this.panier = [];
        }
      })
    }
  }
}
