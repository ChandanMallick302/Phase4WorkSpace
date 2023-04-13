import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  empinfo:Employee[]=[
    new Employee(101,"Chandan","Engineer",426000.0),
    new Employee(102,"Rajesh","Manager",426545.0),
    new Employee(103,"Manoj","Operator",321000.0),
    new Employee(104,"Rama","helper",254652.0)
  ];

  newemp:Employee=new Employee(0,"","",0.0);
  addEmployee(){
    this.empinfo.push(new Employee(this.newemp.empno,this.newemp.empname,this.newemp.job,this.newemp.esal));

    this.newemp.empno=0;
    this.newemp.empname="";
    this.newemp.job="";
    this.newemp.esal=0;
  }
  deleteEmployee(i:any){
    this.empinfo.splice(i,1);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
