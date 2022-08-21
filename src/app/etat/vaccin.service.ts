import { Injectable } from '@angular/core';
import { Vaccin } from './vaccin';

@Injectable({
  providedIn: 'root'
})
export class VaccinService {
vaccins:Vaccin[]=[
  {age:12,vaccin:"A",etat:true},
  {age:24,vaccin:"B",etat:true},
  {age:36,vaccin:"C",etat:false},
  {age:48,vaccin:"D",etat:false},
  {age:60,vaccin:"E",etat:true},
]
  constructor() { }
  getAllVaccins(){
    return this.vaccins
  }
  getVaccinByID(id:number){
    return this.vaccins[id]
  }
  deleteByName(name:string){
    console.log(this.vaccins);
    
    this.vaccins=  this.vaccins.filter(x=>x.vaccin!=name)
    console.log(this.vaccins);
    
  }
  add(vaccin:Vaccin){
    this.vaccins.push(vaccin)
  }
}
