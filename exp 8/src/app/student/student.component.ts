import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';
StudentService;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Stulist:any[]=[];
  constructor(private studentService:StudentService){

  }
  ngOnInit(): void {
    this.Stulist=this.studentService.getAllstudents();
  }
  addstudent(stuname:String,activity:String){
    this.studentService.addstudent(stuname,activity);
    alert("student added successfully")
  }

}
