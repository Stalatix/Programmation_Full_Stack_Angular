import { Component, OnInit } from '@angular/core';
import {Livre, LivreServiceService} from "../service/livre-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livre-table',
  templateUrl: './livre-table.component.html',
  styleUrls: ['./livre-table.component.css']
})
export class LivreTableComponent implements OnInit {

  public livres : Livre[] = []
  constructor(private livreService : LivreServiceService,private router : Router) {

  }


  public ngOnInit(): void {
    this.livres = this.livreService.getLivre();

  }



}
