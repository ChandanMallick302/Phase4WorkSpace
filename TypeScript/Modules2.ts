// importing Employee data into EmployeeList
import { Employee } from "./Modules1";
class EmployeeList{
    private emp:Employee[]=[
        new Employee(101,"Chandan",10000.00,"Developer"),
        new Employee(102,"Rajesh",8000.00,"Tester"),
        new Employee(103,"Mohit",5000.00,"Business Analyst")
    ]
    printEmployeeData(){
        for(var e in this.emp){
            console.log (this.emp[e].eno+"\t"+this.emp[e].ename+"\t"+this.emp[e].sal+"\t"+this.emp[e].job);
        }
    }
}
var obj9=new EmployeeList();
obj9.printEmployeeData();

//Module1.ts no need to compile bacuse we have alreay imported its data to Module2.ts so compile Module2.ts & run it.