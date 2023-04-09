class Democons {
  x: number;
  y: number;
  constructor() {
    this.x = 100;
    this.y = 200;
    console.log("This is a constructor");
  }
  public ptintValue(){
    console.log("X Vale is "+this.x)
    console.log("Y Value is "+this.y);
  }
}
var obj4=new Democons();
obj4.ptintValue();
