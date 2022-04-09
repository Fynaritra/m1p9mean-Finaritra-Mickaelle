import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/service/fonction.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading: Subject<boolean> = this.fonctionservice.isLoading;

  constructor(private fonctionservice:FonctionService) { }

  ngOnInit(): void {
  }

}
