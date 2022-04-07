import { Component, OnInit } from '@angular/core';
import { AuthboService } from '../service/authbo.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  cmd = [];
  email:string;
  pwd: string;
  constructor(private serv: AuthboService,
    private cookie: CookieService,
    private route: Router) { 
    this.email = "";
    this.pwd = "";
  }

  ngOnInit(): void {
  }

  connect(){
    this.serv.connect(this.email, this.pwd).subscribe((data:any)=>{
      if(data.status!=200){
        alert(data.data);
      }else{
        this.cookie.set('token', data.token);
        this.cookie.set('typecl', data.data[0].idprofil);
        this.cookie.set('_id', data.data[0]._id);
        this.route.navigate(['/platfo/liste']);
      }
    })
  }
}
