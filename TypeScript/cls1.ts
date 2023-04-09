class DemoClass{
    //Variable
    private x:number;
    private y:number;

    //Method
    printValue(x:number,y:number):number{
       
        this.x=x;
        this.y=y;
        var sum;
        console.log("X Value is "+x);
        console.log("Y Value is "+y);
        return sum=x+y;
    }
}
//Creation of boject
var obj1=new DemoClass();
//Calling Object
console.log("Sum "+obj1.printValue(10,12.45));

var obj2=new DemoClass();
console.log("Sum "+obj2.printValue(22,45));


// to compile tsc filename.ts
// to run node filename.js