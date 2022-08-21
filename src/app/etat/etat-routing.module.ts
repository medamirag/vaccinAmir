import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { JourFerieeListComponent } from './jour-feriee/jour-feriee-list/jour-feriee-list.component';
import { JourFerieeComponent } from './jour-feriee/jour-feriee.component';
import { VaccinListComponent } from './vaccin/vaccin-list/vaccin-list.component';
import { VaccinComponent } from './vaccin/vaccin.component';

const routes: Routes = [
  {path:'vaccins',component:VaccinListComponent},
  {path:'vaccins/:id',component:VaccinComponent},
  {path:'jf',component:JourFerieeListComponent},
  {path:'jf/:id',component:JourFerieeComponent},
  {path:'etablissement',component:EtablissementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatRoutingModule { }
