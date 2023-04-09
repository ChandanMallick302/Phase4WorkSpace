// class DemoClass{

// }
//Above are showing error beause of DemoClass class have same name.
class TestClass{
    x:number;
     printval(x:number):number {
        this.x=x;
        var sq=x*x;
        return sq;
    }
}
// var obj1=new TestClass();
// var obj2=new TestClass();
//Above are showing error beause of DemoClass class object variables have same name.
var obj3=new TestClass();
console.log( "Square value is "+obj3.printval(12));