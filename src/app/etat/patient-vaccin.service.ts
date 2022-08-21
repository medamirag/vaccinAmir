import { Injectable } from '@angular/core';
import { Patient } from '../publique/patient';
import { PatientService } from '../publique/patient.service';
import { PatientVaccin } from './patient-vaccin';
import { Vaccin } from './vaccin';
import { VaccinService } from './vaccin.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PatientVaccinService {
vaccins:Vaccin[]
patientVaccin:PatientVaccin[]=[]
//patients:Patient[]
  constructor(private patientService:PatientService,private vaccinService:VaccinService) { 
    this.vaccins=this.vaccinService.getAllVaccins()
    //this.patients=this.patientService.getAllPatients()
  }

genererVaccinPatient(patient:Patient){
this.vaccins.forEach(vaccin => {
  // let dateActuelle:Date=patient.dateNaissance.setDate(patient.dateNaissance.getDay()+vaccin.age*30)
  var dtPV = moment(patient.dateNaissance, "DD-MM-YYYY").add(vaccin.age, 'month');
console.log(typeof(dtPV.toDate()));

  this.patientVaccin.push({
    datePrevu:dtPV.toDate(),dateVaccin:new Date,effectuePar:"",etat:false,heureVaccin:{hours:0,minutes:0},patient:patient,vaccin:vaccin
  })
});
return this.patientVaccin

}


}
