import { Component, OnInit } from '@angular/core';
import { Vaccin } from '../../vaccin';
import { VaccinService } from '../../vaccin.service';

@Component({
  selector: 'app-vaccin-list',
  templateUrl: './vaccin-list.component.html',
  styleUrls: ['./vaccin-list.component.scss']
})
export class VaccinListComponent implements OnInit {


vaccins:Vaccin[]=[]
  constructor(private vaccinService:VaccinService) { 
    this.vaccins=this.vaccinService.getAllVaccins()
  }

  ngOnInit(): void {
    this.vaccins=this.vaccinService.getAllVaccins()

  }
  deleteByName(name:string){
    
    this.vaccinService.deleteByName(name)
    this.vaccins=this.vaccinService.getAllVaccins()

  }
}