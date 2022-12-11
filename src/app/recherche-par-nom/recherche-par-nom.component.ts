import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomDeveloppeur !:string;
  developpeurs!:Developpeur[];
  allDeveloppeurs!:Developpeur[];
  searchTerm!: string;
  constructor(private developpeurService:DeveloppeurService)
  {

  }
  ngOnInit(): void {
    this.developpeurService.listeDeveloppeurs().subscribe(developers=> {
      console.log(developers);
      this.developpeurs = developers;
      });
  }
  onKeyUp(filterText : string){
    this.developpeurs = this.allDeveloppeurs.filter(item =>
    item.nomDeveloppeur.toLowerCase().includes(filterText));
    }
    
  rechercherDevelopers(){
    this.developpeurService.rechercherParNom(this.nomDeveloppeur).
    subscribe(developers => {
    this.developpeurs = developers; 
    console.log(developers)});
    }
    

}
