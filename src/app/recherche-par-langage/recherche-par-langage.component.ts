import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { Langage } from '../model/langage.model';
import { DeveloppeurService } from '../services/developpeur.service';
@Component({
  selector: 'app-recherche-par-langage',
  templateUrl: './recherche-par-langage.component.html',
  styleUrls: ['./recherche-par-langage.component.css']
})
export class RechercheParLangageComponent implements OnInit
 {
  developpeurs! : Developpeur[];
  IdLangage! : number;
  langages! : Langage[];
  constructor(private developpeurService:DeveloppeurService)
  {
  }
  ngOnInit(): void {
    this.developpeurService.listeLangages().
    subscribe(lang => {this.langages = lang._embedded.langages;
    console.log(lang);
    });
    
  }
  onChange() {
    this.developpeurService.rechercherParLangage(this.IdLangage).
    subscribe(developers =>{this.developpeurs=developers});
    }
    
}
