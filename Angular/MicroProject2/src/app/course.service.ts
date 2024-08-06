import { Injectable } from '@angular/core';
import { Student } from './model/Student';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
 url:string;
 student : Student;
 studentArr : Student[];
 
  constructor(private http:HttpClient) { 
    this.url="http://localhost:3005/Student";
    this.student=new Student();
    this.studentArr=[];
  }

  savedetails(student:Student){
     this.http.post<Student>(this.url,student).subscribe();
     return "Student Details Added";
    }

  updatedetails(student:Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
     return "Student Details Updated";
  }

  deletedetails(id:number){
    this.http.delete<Student>(this.url+"/"+id).subscribe();
     return "Student Details Deleted";
  }
  finddetails(id:number){
    this.http.get<Student>(this.url+"/"+id).subscribe(data => this.student = data );
    return this.student;
  }
  findAlldetails(){
    this.http.get<Student[]>(this.url).subscribe(data => this.studentArr = data );
    return this.studentArr;
  }
}
