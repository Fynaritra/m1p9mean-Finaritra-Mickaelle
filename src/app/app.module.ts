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
import { LoaderComponent } from './include/loader/loader.component';
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
    FicheComponent,
    InsertComponent,
    UpdateComponent,
    CommandeComponent,
    BenefComponent,
    CrudComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
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
