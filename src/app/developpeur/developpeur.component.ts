import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { AuthService } from '../services/auth.service';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit {
  developpeurs!: Developpeur[]; //un tableau de Developpeur

  constructor(private developpeurService : DeveloppeurService) { }
    
  ngOnInit(): void {
    this.chargerDeveloppeurs();
    }
 
    chargerDeveloppeurs(){
      this.developpeurService.listeDeveloppeurs().subscribe(developers => {
      console.log(developers);
      this.developpeurs = developers;
      }); 
      }
      
  supprimerDeveloppeur(d: Developpeur)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.developpeurService.supprimerDeveloppeur(d.idDeveloppeur).subscribe(() => {
      console.log("developpeur supprimé");
      this.chargerDeveloppeurs();
      });
      }
}
