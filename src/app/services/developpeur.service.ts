import { Injectable } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { Langage } from '../model/langage.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LangageWrapper } from '../model/LangageWrapped.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class DeveloppeurService {
  apiURL: string = 'http://localhost:8080/developpeur/api';
  apiURLLang: string = 'http://localhost:8080/developpeur/lang';
  developpeur! : Developpeur;
  developpeurs! : Developpeur[]; //un tableau de Developpeur
  langages !: Langage[];
  constructor(private http : HttpClient) 
  {
       
    
  }
  listeDeveloppeurs(): Observable<Developpeur[]>{
    return this.http.get<Developpeur[]>(this.apiURL);
    }
  ajouterDeveloppeur( developer: Developpeur):Observable<Developpeur>{
      return this.http.post<Developpeur>(this.apiURL,developer, httpOptions);
      }
  supprimerDeveloppeur(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
  }
        
  consulterDeveloppeur(id: number): Observable<Developpeur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Developpeur>(url);
    }
      trierDeveloppeurs(){
        this.developpeurs = this.developpeurs.sort((n1,n2) => {
        if (n1.idDeveloppeur >n2.idDeveloppeur) {
        return 1;
        }
        if (!n1.idDeveloppeur < !n2.idDeveloppeur) {
        return -1;
        }
        return 0;
        });
        }
        updateDeveloppeur(prod :Developpeur) : Observable<Developpeur>
        {
        return this.http.put<Developpeur>(this.apiURL, prod, httpOptions);
        }

        listeLangages():Observable<LangageWrapper>{
          return this.http.get<LangageWrapper>(this.apiURLLang);
          }
      consulterLangage(id:number): Langage{ 
        return this.langages.find(lang => lang.idLangage == id)!;
        } 
        rechercherParLangage(idLangage: number):Observable< Developpeur[]> {
          const url = `${this.apiURL}/developlang/${idLangage}`;
          return this.http.get<Developpeur[]>(url);
          }     

          rechercherParNom(nom: string):Observable< Developpeur[]> {
            const url = `${this.apiURL}/developersByName/${nom}`;
            return this.http.get<Developpeur[]>(url);
            }
          ajouterLangage( lang: Langage):Observable<Langage>{
              return this.http.post<Langage>(this.apiURLLang, lang, httpOptions);
              }
              

}
