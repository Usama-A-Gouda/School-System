import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient: HttpClient) {
  }
  getAllStudents(currentPageNumber: number, studentPerPage: number) {

    return this._httpClient.get(`${environment.apiURL}/?page=${currentPageNumber}&per_page=${studentPerPage}`);

  }
  getStudentInformation(studentId: number) {
    return this._httpClient.get(`${environment.apiURL}/${studentId}`);
  }
}
