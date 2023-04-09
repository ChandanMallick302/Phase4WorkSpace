//Example of Multiple inheritance
class Student {
  protected sname: string;
  protected course: string;

  constructor(sn: string, cur: string) {
    this.sname = sn;
    this.course = cur;
  }
}
class Marks extends Student {
  protected subject1: number;
  protected subject2: number;

  getvalue(s1: number, s2: number) {
    this.subject1 = s1;
    this.subject2 = s2;
  }
}

class Results extends Marks {
  printValues() {
    console.log("Student Name is " + this.sname);
    console.log("Course is " + this.course);
    console.log("Subject 1 Mark is " + this.subject1);
    console.log("Subject 3 Mark is " + this.subject2);
    console.log("Total Mark is " + (this.subject1 + this.subject2));

    if (this.subject1 >= 35 && this.subject2 >= 35) {
      console.log("Result is Pass");
    } else {
      console.log("Result is Fail");
    }
  }
}

var obj6 =new Results("Chandan","java");
obj6.getvalue(34,50);
obj6.printValues();
