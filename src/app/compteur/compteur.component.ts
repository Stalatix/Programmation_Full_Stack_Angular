import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {
  @Input()
  public valeurCompteurfils : number = 0;

  @Output("increment")
  public incrementEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output("decrement")
  public decrementEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
 public incrementCompteur(): void {
    this.incrementEvent.emit();

 }
 public decrementCompteur(): void {
    this.decrementEvent.emit();

 }
}
