import { Injectable } from '@angular/core';
import { Parent } from './parent';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  parents:Parent[]=[
    {email:"email1@gmail.com",parent:"parent1",phone:123456789},
    {email:"email2@gmail.com",parent:"parent2",phone:123456755},
    {email:"email3@gmail.com",parent:"parent3",phone:123456741},
    {email:"email4@gmail.com",parent:"parent4",phone:123456747},
    {email:"email5@gmail.com",parent:"parent5",phone:123456796},
  ]
  Patients:Patient[]=[
    {dateNaissance:new Date("01/01/1990"),patient:"patient1",parent:this.parents[0]},
    {dateNaissance:new Date,patient:"patient2",parent:this.parents[1]},
    {dateNaissance:new Date,patient:"patient3",parent:this.parents[2]},
    {dateNaissance:new Date,patient:"patient4",parent:this.parents[3]},
    {dateNaissance:new Date,patient:"patient5",parent:this.parents[4]},
  ]
    getPatientByID(id:number){
      return this.Patients[id]
    }
    getAllPatients(){
      return this.Patients
    }
  constructor() { }

  deleteByName(name:string){
    console.log(name);
    this.Patients=this.Patients.filter(obj=>obj.patient!=name)
  }

  addOrUpdate(patient:Patient,id:number){
    if(id==-1){
    let newP:Patient={dateNaissance:patient.dateNaissance,parent:patient.parent,patient:patient.patient}
    this.Patients.push(patient)}
    else{
      this.Patients[id]={dateNaissance:patient.dateNaissance,parent:patient.parent,patient:patient.patient}

    }
  }
}
