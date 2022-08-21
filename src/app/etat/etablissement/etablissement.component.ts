import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../etablissement';
import { EtablissementService } from '../etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent implements OnInit {
etablissement:Etablissement

options=new Map<number, string>()


  constructor(private etablissementService:EtablissementService) { 
    this.etablissement=this.etablissementService.getEtablissement()
    this.options.set(1,"Lundi")
    this.options.set(2,"Mardi")
    this.options.set(3,"Mercredi")
    this.options.set(4,"Jeudi")
    this.options.set(5,"Vendredi")
  }

  ngOnInit(): void {
  }

}
