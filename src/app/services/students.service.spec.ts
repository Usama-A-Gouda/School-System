import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { StudentsService } from './students.service';
import { environment } from '../../environments/environment'
import { Student } from './../models/student.model';

describe('StudentsService', () => {
  let service: StudentsService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    })
      ;
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(StudentsService);
  });


  it('Test if all students are retrieved successfully ', () => {
    service.getAllStudents(1, 3).subscribe();
    let req = httpTestingController.expectOne(`${environment.apiURL}/?page=1&per_page=3`);;
    httpTestingController.verify();
  })
  it('Test if single student is retrieved successfully', () => {
    service.getStudentInformation(10).subscribe();
    httpTestingController.expectOne(`${environment.apiURL}/10`);
    httpTestingController.verify();
  })
});
