import { Component, OnInit } from '@angular/core';
import { AuthboService } from 'src/app/service/authbo.service';

@Component({
  selector: 'app-headerbo',
  templateUrl: './headerbo.component.html',
  styleUrls: ['./headerbo.component.css']
})
export class HeaderboComponent implements OnInit {

  show = true;
  showMenu = true;
  
  constructor(private authService: AuthboService) { }

  ngOnInit(): void {
    console.log("localStorage", localStorage.getItem('session'));
    if(this.authService.isNotLogged() || this.authService.isClient()){
      this.showMenu = false;
    }
  }

  clickLogo(){
    if(this.show == true){
      this.show = false;
    }else{
      this.show = true;
    } 
  }

}
