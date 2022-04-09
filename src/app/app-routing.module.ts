import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';

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
