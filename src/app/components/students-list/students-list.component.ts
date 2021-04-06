import { Component, OnInit } from '@angular/core';
import { Student } from './../../models/student.model';
import { StudentsService } from './../../services/students.service';
import { ApiResponse } from './../../models/api-response.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  tabelHeaders: string[] = ['#', 'First Name', 'Last Name', 'Action'];
  students: Student[] = [];
  totalStudents: number = 0;
  currentPageNumber: number = 1;
  studentsPerPage: number = 6;
  pageSizeOptions: number[] = [1, 2, 5, 6, 9, 10]
  totalPages: number = 0;

  constructor(private _studentsService: StudentsService) { }

  ngOnInit(): void {

    this.getStudents();
  }
  onPageChanging(pageData: PageEvent) {
    this.currentPageNumber = pageData.pageIndex + 1;
    this.studentsPerPage = pageData.pageSize;
    this.getStudents();
  }
  getStudents() {
    this._studentsService.getAllStudents(this.currentPageNumber, this.studentsPerPage).subscribe(
      (responseData) => {
        let students = (responseData as ApiResponse);
        this.totalStudents = students.total;
        this.students = students.data;
        this.totalPages = students.total_pages;

      }
    )
  }
}
