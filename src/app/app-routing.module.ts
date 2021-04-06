import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentInfromationComponent } from './components/student-infromation/student-infromation.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'student-infromation/:id', component: StudentInfromationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
