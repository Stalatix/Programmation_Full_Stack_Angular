import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteurComponent } from './compteur/compteur.component';
import { ResetcompteurComponent } from './resetcompteur/resetcompteur.component';
import { RandomcompteurComponent } from './randomcompteur/randomcompteur.component';
import { DirectiveCompteurDirective } from './Directive/directive-compteur.directive';
import { LivreTableComponent } from './livre-table/livre-table.component';
import { LivresComponent } from './livres/livres.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteurComponent,
    ResetcompteurComponent,
    RandomcompteurComponent,
    DirectiveCompteurDirective,
    LivreTableComponent,
    LivresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
