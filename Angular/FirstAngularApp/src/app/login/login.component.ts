import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uName:string="";
  pwd:string="";
  msg:string="";

  constructor() { }

  ngOnInit(): void {
  }
  checkLogin(){
    if(this.uName=="Chandan" && this.pwd=="Chandan@1234"){
      this.msg="Login Details are Correct";
    }
    else
    this.msg="Please Check Username & Password";
  }

}
