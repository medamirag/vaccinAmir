import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentListComponent } from './parent/parent-list/parent-list.component';
import { ParentComponent } from './parent/parent.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:'patients',component:PatientListComponent},
  {path:'parents',component:ParentListComponent},
  {path:'parents/:id',component:ParentComponent},
  {path:'patients/:id',component:PatientComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubliqueRoutingModule { }
