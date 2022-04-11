import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthBOComponent } from './auth-bo/auth-bo.component';

import { HeaderboComponent } from './include/headerbo/headerbo.component';
import { FooterComponent } from './include/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { CmdComponent } from './pages/admin/cmd/cmd.component';
import { TdbComponent } from './pages/admin/tdb/tdb.component';
import { FicheComponent } from './pages/resto/crud/fiche/fiche.component';
import { InsertComponent } from './pages/resto/crud/insert/insert.component';
import { UpdateComponent } from './pages/resto/crud/update/update.component';
import { CommandeComponent } from './pages/resto/commande/commande.component';
import { BenefComponent } from './pages/resto/benef/benef.component';
import { CrudComponent } from './pages/resto/crud/crud/crud.component';
import { LoadingComponent } from './include/loading/loading.component';
import { HttpLoadInterceptor } from './interceptor/http-load.interceptor';
import { ListePlatsComponent } from './fo/liste-plats/liste-plats.component';
import { FichePlatComponent } from './fo/fiche-plat/fiche-plat.component';
import { HeaderfoComponent } from './include/headerfo/headerfo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgChartsModule } from 'ng2-charts';
import { AlivrerComponent } from './pages/alivrer/alivrer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LivraisonclComponent } from './fo/livraisoncl/livraisoncl.component';
import { MescommandesComponent } from './fo/mescommandes/mescommandes.component';
import { ListeUserComponent } from './pages/admin/liste-user/liste-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthBOComponent,
    HeaderboComponent,
    FooterComponent,
    InscriptionComponent,
    CmdComponent,
    TdbComponent,
    FicheComponent,
    InsertComponent,
    UpdateComponent,
    CommandeComponent,
    BenefComponent,
    CrudComponent,
    LoadingComponent,
    ListePlatsComponent,
    FichePlatComponent,
    HeaderfoComponent,
    AlivrerComponent,
    LivraisonclComponent,
    MescommandesComponent,
    ListeUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgChartsModule,
    DragDropModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
