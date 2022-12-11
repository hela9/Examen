import { Component, OnInit } from '@angular/core';
import { Langage } from '../model/langage.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-liste-langages',
  templateUrl: './liste-langages.component.html',
  styleUrls: ['./liste-langages.component.css']
})
export class ListeLangagesComponent implements OnInit{
  langages! : Langage[];
  ajout:boolean=true;
  constructor(private developpeurService:DeveloppeurService)
  {

  }
  ngOnInit(): void {
   
    this.chargerLangages();
  }
  updatedLang:Langage = {"idLangage":0,"nomLangage":""};
  langageUpdated(lang:Langage){
    console.log("Lang updated event",lang);
    this.developpeurService.ajouterLangage(lang).
     subscribe( ()=> this.chargerLangages());
    }
   chargerLangages(){
      this.developpeurService.listeLangages().
      subscribe(lang => {this.langages = lang._embedded.langages;
      console.log(lang);
      });
      }
    updateLang(lang:Langage) {
        this.updatedLang=lang;
        this.ajout=false; 
        }
      
    

}
