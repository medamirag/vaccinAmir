import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatRoutingModule } from './etat-routing.module';
import { JourFerieeComponent } from './jour-feriee/jour-feriee.component';
import { VaccinComponent } from './vaccin/vaccin.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { VaccinListComponent } from './vaccin/vaccin-list/vaccin-list.component';
import { JourFerieeListComponent } from './vaccin/jour-feriee-list/jour-feriee-list.component';


@NgModule({
  declarations: [
    EtablissementComponent,
    JourFerieeComponent,
    VaccinComponent,
    VaccinListComponent,
    JourFerieeListComponent
  ],
  imports: [
    CommonModule,
    EtatRoutingModule
  ]
})
export class EtatModule { }
