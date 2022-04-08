import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule
  ]
})
export class RestoModule { }
