import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JourFeriee } from '../jourferiee';
import { JourferieeService } from '../jourferiee.service';

@Component({
  selector: 'app-jour-feriee',
  templateUrl: './jour-feriee.component.html',
  styleUrls: ['./jour-feriee.component.scss']
})
export class JourFerieeComponent implements OnInit {
  jourFeriee:JourFeriee={dateJF:new Date(),jourFeriee:""}
  constructor(private router:ActivatedRoute,private jourFerieeService:JourferieeService ) { 
    if (this.router.snapshot.params["id"]>-1){
      this.jourFeriee=jourFerieeService.getjourFerieeByID(this.router.snapshot.params["id"])
    }
  }

  ngOnInit(): void {
  }
  add(){
    if (this.router.snapshot.params["id"]==-1){
      this.jourFerieeService.add(this.jourFeriee)
    }
  }



}