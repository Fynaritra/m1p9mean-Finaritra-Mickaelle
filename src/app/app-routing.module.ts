import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { PlatsComponent } from './plats/plats.component';
import { PlatsBOComponent } from './plats-bo/plats-bo.component';
import { UsersBOComponent } from './users-bo/users-bo.component';
import { AnalyseBOComponent } from './analyse-bo/analyse-bo.component';
import { UpdateComponent } from './plats/update/update.component';
import { FicheComponent } from './plats/fiche/fiche.component';
import { ListeComponent } from './plats/liste/liste.component';
import { CaComponent } from './analyseBO/ca/ca.component';
import { BenefComponent } from './analyseBO/benef/benef.component';

const routes: Routes = [
  { path: '', component: AuthBOComponent },
  { path: 'authfo', component: AuthComponent },
  { path: 'inscription', component: RegistrationComponent },
  { path: 'platfo', component: PlatsComponent, children:[
    { path: 'fiche', component: FicheComponent},
    { path: 'liste', component: ListeComponent},
    { path: 'modif', component: UpdateComponent},
    { path: 'recherche', component: AuthComponent}
  ] },
  { path: 'analyseBO', component: AnalyseBOComponent, children:[
    { path: 'ca', component: CaComponent},
    { path: 'benef', component: BenefComponent}
  ] },
  { path: 'userbo', component: UsersBOComponent },
  { path: 'platbo', component: PlatsBOComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
