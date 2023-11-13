import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
FacultyComponent;
StudentComponent;


const routes: Routes = [
  { path: 'faculty-component', component: FacultyComponent },

{ path: 'student-component', component: StudentComponent
},

{ path: '', redirectTo: '/faculty-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
