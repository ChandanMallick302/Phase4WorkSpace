import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  sname:string="Chandan Kumar Mallick";
  sno:number=101;
  loc:string="Hyderabad";

  constructor() { }

  ngOnInit(): void {
  }
  demofun(){
    alert("This is a Function");
  }

}
