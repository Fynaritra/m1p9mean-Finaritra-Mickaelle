import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livraisoncl',
  templateUrl: './livraisoncl.component.html',
  styleUrls: ['./livraisoncl.component.css']
})
export class LivraisonclComponent implements OnInit {

  adresse = "";
  daty: any;

  constructor(private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  livrer(){
    
  }

}
