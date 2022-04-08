import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CmdComponent } from './cmd/cmd.component';
import { TdbComponent } from './tdb/tdb.component';


const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [{ path: 'dashboard', component: TdbComponent },
  { path: 'commande', component: CmdComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
