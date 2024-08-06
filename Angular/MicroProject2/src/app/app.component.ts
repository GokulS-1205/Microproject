import { Component } from '@angular/core';
import { Student } from './model/Student';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MicroProject2';
  student : Student;//Model Class
  result : string ;
  v:string;
  studentArr : Student[];
  flag : boolean;

  constructor(private service : CourseService ){
    this.student = new Student();
    this.result="";
    this.v="";
    this.studentArr=[];
    this.flag= false;
  }

  savedetails(data:any){
    this.student.name=data.name;
    this.student.id=data.id;
    this.student.course=data.course;
    this.student.fees=data.fees;
    alert(data.id+" "+ data.name+""+ data.course+" "+data.fees);
    this.v=data.id+" - "+ data.name+" - "+ data.course+" - "+data.fees;
    this.result=this.service.savedetails(this.student);
  }

  updatedetails(data : any){
    this.student.name=data.name;
    this.student.id=data.id;
    this.student.course=data.course;
    this.student.fees=data.fees;
    alert(data.id+" "+ data.name+" "+ data.course+" "+data.fees);
    this.v=data.id+" - "+ data.name+" - "+ data.course+" - "+data.fees;
    this.result=this.service.updatedetails(this.student);
  }

  deletedetails(data : any){
    this.result=this.service.deletedetails(data.id);
    alert("Are you sure to Delete! id no"+data.id);
  }

  finddetails(data : any){
    this.student= this.service.finddetails(data.id);
    this.result="Details Found : "+this.student.id+ " " + this.student.name + " " + this.student.course+ " " +this.student.fees;
   
  }

  findAlldetails(){
    this.studentArr = this.service.findAlldetails();
    this.flag=true;
  }
  
}
