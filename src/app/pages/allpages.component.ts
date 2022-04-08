import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthboService } from '../service/authbo.service';

@Component({
  selector: 'app-allpages',
  templateUrl: './allpages.component.html',
  styleUrls: ['./allpages.component.css']
})
export class AllpagesComponent implements OnInit {
  auth: AuthboService;
  public router: Router;
  constructor(service: AuthboService, router: Router) { 
    this.router = router;
    this.auth = service;
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
