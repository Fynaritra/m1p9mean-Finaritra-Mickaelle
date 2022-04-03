import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  cmd = []
  constructor(private confS: ConfigService) { 
    
  }

  ngOnInit(): void {
    this.listePlats();
  }

  listePlats() {
    this.confS.getPlat().subscribe((result) => {
      console.log(result.data);
  });
  }
}
