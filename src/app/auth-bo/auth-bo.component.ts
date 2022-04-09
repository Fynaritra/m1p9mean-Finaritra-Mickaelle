import { Component, OnInit } from '@angular/core';
import { AuthboService } from '../service/authbo.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-bo',
  templateUrl: './auth-bo.component.html',
  styleUrls: ['./auth-bo.component.css']
})
export class AuthBOComponent implements OnInit {

  email:string;
  pwd: string;

  constructor(private serv: AuthboService,
    private cookie: CookieService,
    private route: Router) { 
    this.email = "admin1-ekaly@gmail.com";
    this.pwd = "admin";
  }

  ngOnInit(): void {
  }

  connectbo(){
    this.serv.connect(this.email, this.pwd).subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        localStorage.setItem("token", response.token);
        localStorage.setItem("name", response.data[0].name);
        localStorage.setItem("profil",response.data[0].idprofil);
        this.route.navigate(['admin/commande']);
      }
    })
  }

}
