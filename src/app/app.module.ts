import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthBOComponent } from './auth-bo/auth-bo.component';
import { RegistrationComponent } from './registration/registration.component';
import { PlatsComponent } from './plats/plats.component';
import { PlatsBOComponent } from './plats-bo/plats-bo.component';
import { UsersBOComponent } from './users-bo/users-bo.component';
import { AnalyseBOComponent } from './analyse-bo/analyse-bo.component';
import { FicheComponent } from './plats/fiche/fiche.component';
import { UpdateComponent } from './plats/update/update.component';
import { ListeComponent } from './plats/liste/liste.component';
import { CaComponent } from './analyseBO/ca/ca.component';
import { BenefComponent } from './analyseBO/benef/benef.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LeftmenuComponent } from './include/leftmenu/leftmenu.component';
import { HeaderboComponent } from './include/headerbo/headerbo.component';
import { FooterComponent } from './include/footer/footer.component';
import { LoaderComponent } from './include/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestoBoComponent } from './resto-bo/resto-bo.component';
import { InscriptionComponent } from './inscription/inscription.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthBOComponent,
    RegistrationComponent,
    PlatsComponent,
    PlatsBOComponent,
    UsersBOComponent,
    AnalyseBOComponent,
    FicheComponent,
    UpdateComponent,
    ListeComponent,
    CaComponent,
    BenefComponent,
    LeftmenuComponent,
    HeaderboComponent,
    FooterComponent,
    LoaderComponent,
    RestoBoComponent,
    InscriptionComponent
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
