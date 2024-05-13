import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class AdminData{

dataUrl : string = 'http://localhost:7227/api/students'; // connecting to the backend server

  constructor(private http :HttpClient) { }

  addStudent(studentObj :Student) :Observable<Student> {
    return this.http.post<Student>(this.dataUrl, studentObj);
  }

  getAllStudents() : Observable<Student[] > {
    return this.http.get<Student[]>(this.dataUrl);
  }
}
  