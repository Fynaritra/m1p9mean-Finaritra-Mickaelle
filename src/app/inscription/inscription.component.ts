import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FonctionService } from '../service/fonction.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  contact: string = "";
  code: string = "E-";

  confirmation = 0;
  error: any = {
    error: "",
    name: "",
    email: "",
    password: "",
    contact: "",
    code: ""
  }

  constructor(private fonction: FonctionService,
    private route: Router) { }

  ngOnInit(): void {
  }

  continue() {
    this.error.error = "";
    this.error.name = "";
    this.error.email = "";
    this.error.password = "";
    this.error.contact = "";
    console.log(this.name);

    if (this.name == "" || this.email == '' || this.password == '' || this.contact == '') {
      this.error.name = (this.name == '') ? 'Nom obligatoire' : '';
      this.error.email = (this.email == '') ? 'Email obligatoire' : '';
      this.error.password = (this.password == '') ? 'Mot de passe obligatoire' : '';
      this.error.contact = (this.contact == '') ? 'Contact obligatoire' : '';
    } else {

      let result = this.fonction.generateCodeInscription(this.email, this.name);
      result.subscribe((response: any) => {
        if (response.status != 200) {
          this.error.error = "Internal Server Error";
        } else {
          this.confirmation = 1;
        }
      })
    }
  }
  inscription() {
    this.error.code = "";
    this.error.error = "";
    if (this.code == '') {
      this.error.code = (this.code == '') ? 'Code obligatoire' : '';
    } else {
      let result = this.fonction.inscription(this.name, this.email, this.password, this.contact, this.code);
      result.subscribe((response: any) => {
        if (response.status == 500) {
          this.error.code = "Email déja utilisé";
        }
        else if (response.status == 400) {
          this.error.code = "Code invalide";
        }
        else if (response.status == 200) {
          alert("Bienvenue sur E-Kaly");
          this.route.navigate(['authfo/']);
        }
      })
    }
  }
}
