import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-randomcompteur',
  templateUrl: './randomcompteur.component.html',
  styleUrls: ['./randomcompteur.component.css']
})
export class RandomcompteurComponent implements OnInit {

  @Input()
  public valeurCompteur : number = 0 ;


  @Output("valeurCompteurChange")
  public valeurCompteurChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public setCompteurToARandomValue() : void {
    this.valeurCompteur = Math.random() *100;
    this.valeurCompteurChangeEvent.emit(this.valeurCompteur);

  }

}
