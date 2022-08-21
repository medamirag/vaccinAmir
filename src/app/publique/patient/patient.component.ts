import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etablissement } from 'src/app/etat/etablissement';
import { PatientVaccin } from 'src/app/etat/patient-vaccin';
import { PatientVaccinService } from 'src/app/etat/patient-vaccin.service';
import { Vaccin } from 'src/app/etat/vaccin';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patientVaccin:PatientVaccin[]=[]
newEl:Boolean=true
patient:Patient={dateNaissance:new Date,parent:{email:"",parent:"",phone:0},patient:""}
parents:Parent[]=[]
vaccinsAFaire:Vaccin[]=[]
HistoriqueVaccin:PatientVaccin[]
etablissement:Etablissement={access:"",email:"",etablissement:"",jourVaccin:5,phone:0}
parentselect:Parent={email:"",parent:"",phone:0}
  constructor(private patientVaccinService :PatientVaccinService,private patientService:PatientService,private parentService:ParentService,private router:ActivatedRoute) { 
    console.log(this.patient);

    if (this.router.snapshot.params["id"]>-1)
    {
      this.patient=this.patientService.getPatientByID(this.router.snapshot.params["id"]);
      this.newEl=false
    }
    this.parents=this.parentService.getAllParents()
    // this.patient.dateNaissance.setFullYear(10,10,1999)
    console.log(this.patient);
    this.HistoriqueVaccin=this.patientVaccinService.getVaccinsParPatient(this.patient)
    console.log("this.HistoriqueVaccin",this.HistoriqueVaccin);
    
  }
  selectOption(event:any){
    this.patient.parent=this.parentService.getParentByID(event.target.value)
    
  }
  ngOnInit(): void {

  }
addOrUpdate(){
  this.patientService.addOrUpdate(this.patient,this.router.snapshot.params["id"])
}
mailingList = new Map<Patient, Vaccin[]>();

generate(){
let actualDate=new Date()
//generer Liste Vaccin avec Date Prévu
this.patientVaccin = this.patientVaccinService.genererVaccinPatient(this.patient)
//Generer Liste des Vaccin à faire la prochaine journée de vaccination
const TpatientVaccin = cloneDeep(this.patientVaccin);  
actualDate.setDate(actualDate.getDate()+6)
TpatientVaccin.filter(pv=>pv.etat==false&&(pv.datePrevu.setDate( pv.datePrevu.getDate() + 5)<actualDate.getDate())).forEach(element => {
console.log("element"+element);

  if(this.mailingList.get(this.patient)==undefined){
  this.mailingList.set(this.patient,[element.vaccin])
}
else{
  let mailList:any=this.mailingList.get(this.patient)
  mailList?.push(element.vaccin)
  this.mailingList.set(this.patient,mailList)
}
  
});

}
EnvoyerSMS(){
  alert("SMS Envoyé Au Parent")
}
}
