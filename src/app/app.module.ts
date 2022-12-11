import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloppeurComponent } from './developpeur/developpeur.component';
import { AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import { FormsModule } from '@angular/forms';
import { UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';
import { RechercheParLangageComponent } from './recherche-par-langage/recherche-par-langage.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeLangagesComponent } from './liste-langages/liste-langages.component';
import { UpdateLangageComponent } from './update-langage/update-langage.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloppeurComponent,
    AddDeveloppeurComponent,
    UpdateDeveloppeurComponent,
    RechercheParLangageComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeLangagesComponent,
    UpdateLangageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
