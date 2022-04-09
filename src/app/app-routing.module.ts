import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { AuthComponent } from './auth/auth.component';
import { AdminGuard } from './guard/admin.guard';
import { RestoGuard } from './guard/resto.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { TdbComponent } from './pages/admin/tdb/tdb.component';
import { PlatsComponent } from './pages/client/plats/plats.component';
import { CommandeComponent } from './pages/resto/commande/commande.component';
import { CrudComponent } from './pages/resto/crud/crud/crud.component';
import { FicheComponent } from './pages/resto/crud/fiche/fiche.component';

const routes: Routes = [
  {path: '', component: PlatsComponent},
  { path: 'authbo', component: AuthBOComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'authfo', component: AuthComponent } ,
  { path: 'admin', children: [
    { path: 'dashboard', component: TdbComponent},
    { path: 'commande', component: CommandeComponent}
  ], canActivate:[AdminGuard]},
  { path: 'resto', children: [
    { path: 'crud', component: CrudComponent}
  ], canActivate:[RestoGuard]}
  ] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
