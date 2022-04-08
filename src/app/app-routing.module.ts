import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CmdComponent } from './pages/admin/cmd/cmd.component';
import { TdbComponent } from './pages/admin/tdb/tdb.component';
import { ClientComponent } from './pages/client/client.component';
import { FicheComponent } from './pages/resto/crud/fiche.component';
import { FicheplatComponent } from './pages/client/plats/ficheplat/ficheplat.component';
import { PanierComponent } from './pages/client/plats/panier/panier.component';
import { CmdalivrerComponent } from './pages/livreur/cmdalivrer/cmdalivrer.component';
import { LivreurComponent } from './pages/livreur/livreur.component';
import { BenefComponent } from './pages/resto/benef/benef.component';
import { InsertComponent } from './pages/resto/crud/insert/insert.component';
import { UpdateComponent } from './pages/resto/crud/update/update.component';
import { RestoComponent } from './pages/resto/resto.component';
import { AllpagesComponent } from './pages/allpages.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'authbo', component: AuthBOComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'authfo', component: AuthComponent }
  ] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
