import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
parent:Parent={email:"",parent:"",phone:0}
  constructor(private router:ActivatedRoute,private parentService:ParentService ) { 
    if (this.router.snapshot.params["id"]>-1){
      this.parent=parentService.getParentByID(this.router.snapshot.params["id"])
    }
  }

  ngOnInit(): void {
    
  }
  add(){

    this.parentService.add(this.parent)
  }


}
