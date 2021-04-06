import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from './../../models/student.model';
import { ApiResponse } from './../../models/api-response.model';

@Component({
  selector: 'app-student-infromation',
  templateUrl: './student-infromation.component.html',
  styleUrls: ['./student-infromation.component.css']
})
export class StudentInfromationComponent implements OnInit {
  student: Student = {} as Student;
  constructor(private _activateRoute: ActivatedRoute, private _studentsService: StudentsService) { }

  ngOnInit(): void {
    let studentId = this._activateRoute.snapshot.params['id'];
    this.getStudentDetails(studentId);
  }
  getStudentDetails(studentId: number) {
    this._studentsService.getStudentInformation(studentId)
      .subscribe(responseData => {
        let studentData = (responseData as ApiResponse);
        this.student = studentData.data as unknown as Student;
      })
  }
}
