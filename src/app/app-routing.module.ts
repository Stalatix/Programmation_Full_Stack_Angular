import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LivresComponent} from "./livres/livres.component";
import {LivreTableComponent} from "./livre-table/livre-table.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livrestable', component: LivreTableComponent},
  { path: 'livres', component: LivresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
