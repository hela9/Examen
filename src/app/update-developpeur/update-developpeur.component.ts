import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developpeur } from '../model/developpeur.model';
import { Langage } from '../model/langage.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-update-developpeur',
  templateUrl: './update-developpeur.component.html',
  styleUrls: ['./update-developpeur.component.css']
})
  export class UpdateDeveloppeurComponent implements OnInit {
    currentDeveloppeur = new Developpeur();
    langages! : Langage[];
   updatedLangId! : number;
    constructor(private activatedRoute: ActivatedRoute,private router :Router,

    private developpeurService: DeveloppeurService) { }
    ngOnInit() {
      this.developpeurService.listeLangages().
      subscribe(lang => {console.log(lang);
      this.langages = lang._embedded.langages;
      }
      );
      this.developpeurService.consulterDeveloppeur(this.activatedRoute.snapshot.params['id']).
      subscribe( lang =>{ this.currentDeveloppeur = lang; 
      this.updatedLangId = this.currentDeveloppeur.langage.idLangage;
      } ) ;
     
    } 
    updateDeveloppeur() 
    {
      this.currentDeveloppeur.langage = this.langages.find(lang => lang.idLangage == this.updatedLangId)!;
      this.developpeurService.updateDeveloppeur(this.currentDeveloppeur).subscribe(developer => {
      this.router.navigate(['developpeur']); }
      );
    }
      

  }
    
