import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { AuthComponent } from './auth/auth.component';
import { AdminGuard } from './guard/admin.guard';
import { RestoGuard } from './guard/resto.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { TdbComponent } from './pages/admin/tdb/tdb.component';
import { ListePlatsComponent } from './fo/liste-plats/liste-plats.component';
import { CommandeComponent } from './pages/resto/commande/commande.component';
import { FichePlatComponent } from './fo/fiche-plat/fiche-plat.component';
import { CrudComponent } from './pages/resto/crud/crud/crud.component';
import { FicheComponent } from './pages/resto/crud/fiche/fiche.component';
import { DeconnectionComponent } from './deconnection/deconnection.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ListePlatsComponent},
  { path: 'deco', component: DeconnectionComponent},
  { path: 'client', children:[
    { path: 'acc', component: ListePlatsComponent},
    { path: 'ficheplat', component: FichePlatComponent},
    /*{ path: 'panier', component: PanierComponent},
    { path: 'mescommandes', component: MescommandesComponent}*/
  ]},
  { path: 'authbo', component: AuthBOComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'authfo', component: AuthComponent } ,
  { path: 'admin', children: [
    { path: 'dashboard', component: TdbComponent},
    { path: 'commande', component: CommandeComponent}
  ], canActivate:[AdminGuard]},
  { path: 'resto', children: [
    { path: 'crud', component: CrudComponent},
    { path: 'fiche', component: FicheComponent}
  ], canActivate:[RestoGuard]}
  ] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes), 
  BrowserModule,
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }