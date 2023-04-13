import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marks:number=60;
  myclass:string="";
  result:string="";
  chk:boolean=false;
  constructor() { 
    if(this.marks>=35){
      this.myclass="class1";
      this.result="Passed";
      this.chk=true;
    }
    else{
    this.myclass="class2";
    this.result="Failed";
    this.chk=false;
    }
  }

  ngOnInit(): void {
  }

}
