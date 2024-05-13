import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:7227/api/students'; // Update the base URL with your ASP.NET Core API URL

  constructor(private http: HttpClient) { }

  // Get all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  // Add a new student
  addStudent(student: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}`, student);
  }
}
