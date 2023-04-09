class Democons2{
    private x:number;
    private y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
        console.log("Parameterized Constructor");
    }
    public printValue(){
        console.log("X value is "+this.x);
        console.log("Y  value is "+this.y);
    }
}
var obj5=new Democons2(12,25);
obj5.printValue();