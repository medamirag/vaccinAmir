import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatRoutingModule } from './etat-routing.module';
import { JourFerieeComponent } from './jour-feriee/jour-feriee.component';
import { VaccinComponent } from './vaccin/vaccin.component';
import { EtablissementComponent } from './etablissement/etablissement.component';


@NgModule({
  declarations: [
    EtablissementComponent,
    JourFerieeComponent,
    VaccinComponent
  ],
  imports: [
    CommonModule,
    EtatRoutingModule
  ]
})
export class EtatModule { }
