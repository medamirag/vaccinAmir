import { Component, OnInit } from '@angular/core';
import { JourFeriee } from '../../jourferiee';
import { JourferieeService } from '../../jourferiee.service';

@Component({
  selector: 'app-jour-feriee-list',
  templateUrl: './jour-feriee-list.component.html',
  styleUrls: ['./jour-feriee-list.component.scss']
})
export class JourFerieeListComponent implements OnInit {


  jourFeriees:JourFeriee[]=[]
  constructor(private jourFerieeService:JourferieeService) { 
    this.jourFeriees=this.jourFerieeService.getAlljourFeriees()
  }

  ngOnInit(): void {
    this.jourFeriees=this.jourFerieeService.getAlljourFeriees()

  }
  deleteByName(name:string){
    
    this.jourFerieeService.deleteByName(name)
    this.jourFeriees=this.jourFerieeService.getAlljourFeriees()

  }
}