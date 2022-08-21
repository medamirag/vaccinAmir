import { Injectable } from '@angular/core';
import { Etablissement } from './etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
etablissement:Etablissement={access:"et@25",email:"etab@gmail.com",etablissement:"etablissement",jourVaccin:5,phone:2555522}
  constructor() { }
  getEtablissement(){
    return this.etablissement
  }
}
