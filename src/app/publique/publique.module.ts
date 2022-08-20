import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubliqueRoutingModule } from './publique-routing.module';
import { ParentComponent } from './parent/parent.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    ParentComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    PubliqueRoutingModule
  ]
})
export class PubliqueModule { }
