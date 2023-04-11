import { Component, OnInit } from '@angular/core';
import { URL } from 'url';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  
  personname:string="Surya";
  Age:number=20;
  Bike:boolean=true;
  Gender:string="Male";
  Country:string="India";
  Url:string="http://www.abc.com";
  
  

  constructor() { }

  ngOnInit(): void {
  }
  changefun(){
   this.personname="Vahini Devi";
   this.Age=38;
   this.Bike=true;
   this.Gender="Female";
   this.Country="USA";
   this.Url="http://www.vahini.com"
  }

}
