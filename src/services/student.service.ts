import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './../models/Student';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class StudentService {
  baseURL: string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  //get
  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}/students`);
  }

  //delete
  deleteStudent(stdno: string): Observable<Student> {
    return this.httpClient.delete<Student>(
      `${this.baseURL}/students/${stdno}`
    );
  }

  //POST
  createStudent(stdno: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseURL}/students`, stdno);
  }

  //PUT ==> update
  updateStudent(updatestdno: Student, id: string): Observable<Student> {
    return this.httpClient.put<Student>(
      `${this.baseURL}/students/${id}`,
      updatestdno
    );
  }
}
