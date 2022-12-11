import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Langage } from '../model/langage.model';

@Component({
  selector: 'app-update-langage',
  templateUrl: './update-langage.component.html',
  styleUrls: ['./update-langage.component.css']
})
export class UpdateLangageComponent implements OnInit {
  @Input()
  langage! : Langage;
  @Output() 
  langageUpdated = new EventEmitter<Langage>();
  @Input()
  ajout!:boolean;
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateLangage ",this.langage);
  }
  saveLangage(){
    this.langageUpdated.emit(this.langage);
    }
    

}
