import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-resetcompteur',
  templateUrl: './resetcompteur.component.html',
  styleUrls: ['./resetcompteur.component.css']
})
export class ResetcompteurComponent implements OnInit {

  @Output("reset")
  public resetEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public reset() : void {
    this.resetEvent.emit(0);

  }

}
