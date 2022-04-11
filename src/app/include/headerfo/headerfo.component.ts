import { Component, OnInit } from '@angular/core';
import { AuthboService } from 'src/app/service/authbo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerfo',
  templateUrl: './headerfo.component.html',
  styleUrls: ['./headerfo.component.css']
})
export class HeaderfoComponent implements OnInit {

  showLogIn = false;
  showLogOut = false;
  inPanier = false;

  constructor(private authService: AuthboService, private route: Router) {
    if(localStorage.getItem("panier")!=null){
      this.inPanier = true;
    }
    if(this.authService.isNotLogged()){
      this.showLogIn = true;
    }else if(this.authService.isLogged() && this.authService.isClient()==true){
      this.showLogOut = true;
    }
  }
  ngOnInit(): void {
    
  }
  deconnection(){
    this.authService.logout();
    location.reload();
    this.route.navigate(['client/acc/']);
  } 
  connection(){
    this.authService.logout();
    this.route.navigate(['authfo/']);
  }
}
