//Muliple Interaface Example
interface Test1{
    getval();
}
interface Test2{
    printval():number;
}
class TestIface implements Test1,Test2{
    n:number;
    getval() {
        this.n=10;
    }
    printval():number {
        var cb=this.n*this.n*this.n;
        return cb;
        //console.log(this.n+" cube value is "+(this.n*this.n*this.n));
    }
}

var obj7=new TestIface();
obj7.getval();
console.log("cube value is "+obj7.printval());