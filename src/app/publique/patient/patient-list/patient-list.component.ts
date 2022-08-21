import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(private patientService:PatientService) { 
    this.patients=this.patientService.getAllPatients()
  }
  ngOnInit(): void {
    this.patients=this.patientService.getAllPatients()

  }
  
  patients:Patient[]=[]

  deleteByName(name:string){
    this.patientService.deleteByName(name)
    this.patients=  this.patientService.getAllPatients()
  }
}
