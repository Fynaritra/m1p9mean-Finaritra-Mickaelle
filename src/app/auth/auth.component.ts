import { Component, OnInit } from '@angular/core';
import { AuthboService } from '../service/authbo.service';
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
    private route: Router) { 
    this.email = "";
    this.pwd = "";
  }

  ngOnInit(): void {
  }

  connect(){
    this.serv.connect(this.email, this.pwd).subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        localStorage.setItem("token", response.token);
        localStorage.setItem("name", response.data[0].name);
          localStorage.setItem("profil",response.data[0].idprofil);
          this.route.navigate(['pages/client/']);
      }
    })
  }
}
