import { Injectable } from '@angular/core';
import { Vaccin } from './vaccin';

@Injectable({
  providedIn: 'root'
})
export class VaccinService {
vaccins:Vaccin[]=[
  {age:12,vaccin:"A"},
  {age:24,vaccin:"B"},
  {age:36,vaccin:"C"},
  {age:48,vaccin:"D"},
  {age:60,vaccin:"E"},
]
  constructor() { }
  getAllVaccins(){
    return this.vaccins
  }
  getVaccinByID(id:number){
    return this.vaccins[id]
  }
}
