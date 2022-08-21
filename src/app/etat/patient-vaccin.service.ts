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
patients:Patient[]
patientVaccin:PatientVaccin[]=[

]
//patients:Patient[]
  constructor(private patientService:PatientService,private vaccinService:VaccinService) { 
    this.vaccins=this.vaccinService.getAllVaccins()
    this.patients=this.patientService.getAllPatients()
    this.patientVaccin=[
      {datePrevu:new Date("10/10/2022"),dateVaccin:new Date("12/8/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:10,minutes:10},patient:this.patients[0],vaccin:this.vaccins[0]},
      {datePrevu:new Date("10/04/2022"),dateVaccin:new Date(""),effectuePar:"",etat:false,heureVaccin:{hours:0,minutes:0},patient:this.patients[0],vaccin:this.vaccins[2]},
      {datePrevu:new Date("08/03/2022"),dateVaccin:new Date(""),effectuePar:"",etat:false,heureVaccin:{hours:0,minutes:0},patient:this.patients[0],vaccin:this.vaccins[3]},
      {datePrevu:new Date("07/10/2022"),dateVaccin:new Date("12/10/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:8,minutes:10},patient:this.patients[0],vaccin:this.vaccins[4]},
      {datePrevu:new Date("03/10/2022"),dateVaccin:new Date("12/01/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:9,minutes:10},patient:this.patients[0],vaccin:this.vaccins[1]},
      {datePrevu:new Date("10/10/2022"),dateVaccin:new Date("12/10/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:10,minutes:10},patient:this.patients[1],vaccin:this.vaccins[1]},
      {datePrevu:new Date("10/10/2022"),dateVaccin:new Date("12/10/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:10,minutes:10},patient:this.patients[2],vaccin:this.vaccins[2]},
      {datePrevu:new Date("10/10/2022"),dateVaccin:new Date("12/10/2022"),effectuePar:"Docteur 1",etat:true,heureVaccin:{hours:10,minutes:10},patient:this.patients[3],vaccin:this.vaccins[3]},
    ]
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
getVaccinsParPatient(patient:Patient){
  
  return this.patientVaccin.filter(X=>X.patient==patient)
}

}
