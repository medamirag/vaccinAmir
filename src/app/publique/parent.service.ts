import { Injectable } from '@angular/core';
import { Parent } from './parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
parents:Parent[]=[
  {email:"email1@gmail.com",parent:"parent1",phone:123456789},
  {email:"email2@gmail.com",parent:"parent2",phone:123456755},
  {email:"email3@gmail.com",parent:"parent3",phone:123456741},
  {email:"email4@gmail.com",parent:"parent4",phone:123456747},
  {email:"email5@gmail.com",parent:"parent5",phone:123456796},
]
  constructor() { }
  getParentByID(id:number){
    return this.parents[id]
  }
  getAllParents(){
    return this.parents
  }
  deleteByName(name:string){
    console.log(name);
    this.parents=this.parents.filter(obj=>obj.parent!=name)
  }

  add(parent:Parent){
    let newP:Parent={email:parent.email,parent:parent.parent,phone:parent.phone}
    this.parents.push(parent)
  }
  
}
