import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fs_front';
  public valeurCompteurPere : number = 0;
  public compteurArray: number[] = [];

  constructor(private router: Router) {
  }

  public incrementCompteur(): void {
    this.valeurCompteurPere = this.valeurCompteurPere + 1;
    this.calculateArray()
    console.log(this.valeurCompteurPere)

  }
  public decrementCompteur(): void {
    if(this.valeurCompteurPere >0) {
      this.valeurCompteurPere = this.valeurCompteurPere - 1;
      this.calculateArray()
    }
    console.log(this.valeurCompteurPere)
  }
  public resetCompteur(newValue: number){
    this.valeurCompteurPere=newValue;
    this.calculateArray();
  }

  public calculateArray():void {
    this.compteurArray = []
    for (let i = 0; i<this.valeurCompteurPere;i++){
      this.compteurArray.push(i)
      }
  }

 public navigateHome():void{
    this.router.navigate([""])
 }

  public navigateLivres() :void {
    this.router.navigate(["livrestable"])
  }



}
