import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  checklist : any;
  masterSelected:boolean;
  p=2;
  nbrperpage=5;
  total=18;
  constructor() { 
    this.masterSelected = false;
  }

  ngOnInit(): void {
  }

}
