import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:'patient',component:PatientComponent},
  {path:'parent',component:ParentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubliqueRoutingModule { }
