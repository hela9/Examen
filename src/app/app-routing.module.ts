import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloppeurComponent } from './developpeur/developpeur.component';
import { AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import { UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';
import { RechercheParLangageComponent } from './recherche-par-langage/recherche-par-langage.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeLangagesComponent } from './liste-langages/liste-langages.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "developpeur", component : DeveloppeurComponent},
  {path: "add-developpeur", component : AddDeveloppeurComponent},
  { path: "", redirectTo: "developpeur", pathMatch: "full" },
  {path: "updateDeveloppeur/:id", component: UpdateDeveloppeurComponent},
  {path: "rechercheParLangage", component : RechercheParLangageComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeLangages", component : ListeLangagesComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
