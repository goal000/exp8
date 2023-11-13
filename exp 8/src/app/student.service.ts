import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stuname=String;
  activity=String;
  Stulist:any[]=[];
  addstudent(stuname:String,activity:String)
  {
    this.Stulist.push({name:stuname,acty:activity})
  }
  getAllstudents(){
    return this.Stulist;
  }

  constructor(private http:HttpClient) {

   }
   product():Observable<any>
   {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
   }
}
