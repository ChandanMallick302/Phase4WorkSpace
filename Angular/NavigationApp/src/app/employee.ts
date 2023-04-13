export class Employee {
    empno:number;
    empname:string;
    job:string;
    esal:number;

    constructor(eno:number,ename:string,jb:string,sal:number){
        this.empno=eno;
        this.empname=ename;
        this.job=jb;
        this.esal=sal;   
    }

}
