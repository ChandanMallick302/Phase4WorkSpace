import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string="demo class";
  personName:string="Ravikishan";
  salary:number=32000;
  dt:Date=  new Date();
  person:object={fname:"Chandan",mname:"Kumar", lname:"Mallick"};
  val:number=0.5;
  constructor() { }

  ngOnInit(): void {
  }

}
