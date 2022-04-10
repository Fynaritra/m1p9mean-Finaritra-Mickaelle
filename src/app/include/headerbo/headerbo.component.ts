import { Component, OnInit } from '@angular/core';
import { AuthboService } from 'src/app/service/authbo.service';

@Component({
  selector: 'app-headerbo',
  templateUrl: './headerbo.component.html',
  styleUrls: ['./headerbo.component.css']
})
export class HeaderboComponent implements OnInit {

  
  constructor(private authService: AuthboService) { }

  ngOnInit(): void {

  }

}
