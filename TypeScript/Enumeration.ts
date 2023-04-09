enum course{
    Java,Python,Angular,ReactJs
}
class Std_Course{
    private rollno:number;
    private sname:string;
    private scourse:course;

    public getValue(){
        this.rollno=1001;
        this.sname="Chandan";
        this.scourse=course.Java; //it will assign index of course
    }
    printValue(){
        console.log("Student Name:"+this.sname);
        console.log("Roll No: "+this.rollno);
        console.log("Course: "+course[this.scourse]);
    }
}
var obj8=new Std_Course();
obj8.getValue();
obj8.printValue();
