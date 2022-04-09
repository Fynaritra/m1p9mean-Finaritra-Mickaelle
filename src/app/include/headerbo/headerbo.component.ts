import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerbo',
  templateUrl: './headerbo.component.html',
  styleUrls: ['./headerbo.component.css']
})
export class HeaderboComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickLogo(){
    if(this.show == true){
      this.show = false;
    }else{
      this.show = true;
    } 
  }

}
