import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developpeur } from '../model/developpeur.model';
import { Langage } from '../model/langage.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-add-developpeur',
  templateUrl: './add-developpeur.component.html'

})
export class AddDeveloppeurComponent implements OnInit {
  langages! : Langage[];
  newIdLangage! : number;
  newLangage! : Langage;
  newDeveloppeur = new Developpeur();
  constructor(private developpeurService: DeveloppeurService,private router :Router) { 
  
  }
  ngOnInit(): void 
  {
    this.developpeurService.listeLangages().
    subscribe(lang=> {console.log(lang);
    this.langages = lang._embedded.langages;
    });
  }
 
  addDeveloppeur()
  {
    this.newDeveloppeur.langage= this.langages.find(lang=> lang.idLangage== this.newIdLangage)!;
    this.developpeurService.ajouterDeveloppeur(this.newDeveloppeur)
    .subscribe(developer=> {
    console.log(developer);
    this.router.navigate(['developpeur']);
 });
  }
    }

