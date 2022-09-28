import { Injectable } from '@angular/core';

export interface Livre {
  id : number;
  Titre : string;

}
@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {
  public getLivre(): Livre[] {
  return [
    {
      id: 1 ,
      Titre: 'Laffaire Pelican'
    },
    {
      id: 2 ,
      Titre: 'Théodore Boon'
    }
]
}
  constructor(){}
}






