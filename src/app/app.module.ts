import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthBOComponent } from './auth-bo/auth-bo.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderboComponent } from './include/headerbo/headerbo.component';
import { FooterComponent } from './include/footer/footer.component';
import { LoaderComponent } from './include/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { CmdComponent } from './pages/admin/cmd/cmd.component';
import { TdbComponent } from './pages/admin/tdb/tdb.component';
import { ClientComponent } from './pages/client/client.component';
import { PlatsComponent } from './pages/client/plats/plats.component';
import { FicheComponent } from './pages/resto/crud/fiche/fiche.component';
import { LivreurComponent } from './pages/livreur/livreur.component';
import { CmdalivrerComponent } from './pages/livreur/cmdalivrer/cmdalivrer.component';
import { InsertComponent } from './pages/resto/crud/insert/insert.component';
import { UpdateComponent } from './pages/resto/crud/update/update.component';
import { CommandeComponent } from './pages/resto/commande/commande.component';
import { BenefComponent } from './pages/resto/benef/benef.component';
import { RestoComponent } from './pages/resto/resto.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthBOComponent,
    HeaderboComponent,
    FooterComponent,
    LoaderComponent,
    InscriptionComponent,
    CmdComponent,
    TdbComponent,
    ClientComponent,
    PlatsComponent,
    FicheComponent,
    LivreurComponent,
    CmdalivrerComponent,
    InsertComponent,
    UpdateComponent,
    CommandeComponent,
    BenefComponent,
    RestoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
