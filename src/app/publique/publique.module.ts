import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubliqueRoutingModule } from './publique-routing.module';
import { ParentComponent } from './parent/parent.component';
import { PatientComponent } from './patient/patient.component';
import { ParentListComponent } from './parent/parent-list/parent-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    PatientComponent,
    ParentListComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PubliqueRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PubliqueModule { }
