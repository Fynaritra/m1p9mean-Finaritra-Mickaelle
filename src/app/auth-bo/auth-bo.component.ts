import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-bo',
  templateUrl: './auth-bo.component.html',
  styleUrls: ['./auth-bo.component.css']
})
export class AuthBOComponent implements OnInit {

  email:string;
  mdp: string;

  constructor() { 
    this.email = "";
    this.mdp = "";
  }

  ngOnInit(): void {
  }

  connectbo(){

  }

}
