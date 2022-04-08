import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FicheplatComponent } from './plats/ficheplat/ficheplat.component';
import { PanierComponent } from './plats/panier/panier.component';


@NgModule({
  declarations: [
    FicheplatComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
