import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaccin } from '../vaccin';
import { VaccinService } from '../vaccin.service';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.scss']
})
export class VaccinComponent implements OnInit {
vaccin:Vaccin={age:0,etat:false,vaccin:""}
  constructor(private router:ActivatedRoute,private vaccinService:VaccinService ) { 
    if (this.router.snapshot.params["id"]>-1){
      this.vaccin=vaccinService.getVaccinByID(this.router.snapshot.params["id"])
    }
  }

  ngOnInit(): void {
  }
  add(){
    if (this.router.snapshot.params["id"]==-1){
      this.vaccinService.add(this.vaccin)
    }
  }



}
