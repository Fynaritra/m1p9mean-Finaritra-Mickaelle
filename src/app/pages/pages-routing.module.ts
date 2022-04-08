import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LivreurGuard } from '../guard/livreur.guard';
import { RestoGuard } from '../guard/resto.guard';
import { AllpagesComponent } from './allpages.component';

const routes: Routes = [{
  path: '', component: AllpagesComponent,
  children: [
    { path: 'pages', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    { path: 'admin', canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'livreur', canActivate :[LivreurGuard], loadChildren: () => import('./livreur/livreur.module').then(m => m.LivreurModule,) },
    { path: 'resto',canActivate:[RestoGuard] , loadChildren: () => import('./resto/resto.module').then(m => m.RestoModule) }
  ]
},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
