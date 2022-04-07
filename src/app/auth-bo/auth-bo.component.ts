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
    this.serv.connectbo(this.email, this.pwd).subscribe((data:any)=>{
      if(data.status!=200){
        alert(data.data);
      }else{
        this.cookie.set('tokenbo', data.token);
        this.cookie.set('idprofil', data.data[0].idprofil);
        this.cookie.set('_id', data.data[0]._id);
        this.route.navigate(['/restobo']);
      }
    })
  }

}
