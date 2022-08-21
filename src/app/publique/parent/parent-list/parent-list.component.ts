import { Component, OnInit } from '@angular/core';
import { Parent } from '../../parent';
import { ParentService } from '../../parent.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
parents:Parent[]=[]
  constructor(private parentService:ParentService) { 
    this.parents=this.parentService.getAllParents()
  }

  ngOnInit(): void {
    this.parents=this.parentService.getAllParents()
  }
  deleteByName(name:string){
    this.parentService.deleteByName(name)
    this.parents=  this.parentService.getAllParents()
  }

}
