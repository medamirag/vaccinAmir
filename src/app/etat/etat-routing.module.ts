import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { JourFerieeComponent } from './jour-feriee/jour-feriee.component';
import { VaccinComponent } from './vaccin/vaccin.component';

const routes: Routes = [
  {path:'vaccin',component:VaccinComponent},
  {path:'jf',component:JourFerieeComponent},
  {path:'etablissement',component:EtablissementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatRoutingModule { }
