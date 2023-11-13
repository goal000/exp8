import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';
StudentService

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  Stulist:any[]=[];
  constructor(private studentService:StudentService){

  }
  ngOnInit(): void {
    //this.Stulist=this.studentService.getAllstudents();//
    this.studentService.product().subscribe(productdata=>this.Stulist=productdata);
  }

}
