import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdComponent } from '../admin/cmd/cmd.component';
import { BenefComponent } from './benef/benef.component';
import { CrudComponent } from './crud/crud.component';
import { FicheComponent } from './crud/fiche/fiche.component';
import { RestoComponent } from './resto.component';

const routes: Routes = [{ path: '', component: RestoComponent,
children: [
{ path: 'benefice', component: BenefComponent  },
{ path: 'commande', component:CmdComponent  },
{ path: 'crud', component: CrudComponent  },
{ path: 'fiche', component: FicheComponent}

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
