import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  studentDetailsForm: FormGroup;
  allStudents: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  currentStudentID = "";

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.studentDetailsForm = this.fb.group({
      student_Id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      sex: ['', Validators.required],
      student_number: ['', Validators.required],
      grade: ['', Validators.required],
      address: [''],
      contact: ['']
    });
  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get<any[]>("http://localhost:7227/api/Student/GetStudent")
      .subscribe((resultData: any[]) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.allStudents = resultData;
      });
  }

  addNewStudent() {
    let bodyData = this.studentDetailsForm.value;

    this.http.post("http://localhost:7227/api/Student/AddStudent", bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Student Registered Successfully")
        this.getAllStudent();
      });
  }

  setUpdate(data: any) {
    this.studentDetailsForm.patchValue(data);
    this.currentStudentID = data.id;
    this.isUpdateFormActive = true;
  }

  updateRecords() {
    let bodyData = this.studentDetailsForm.value;

    this.http.patch("https://localhost:7227/api/Student/UpdateStudent" + "/" + this.currentStudentID, bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Student Updated Successfully")
        this.getAllStudent();
        this.isUpdateFormActive = false;
      });
  }

  save() {
    if (!this.isUpdateFormActive) {
      this.addNewStudent();
    } else {
      this.updateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete("https://localhost:7227/api/Student/DeleteStudent" + "/" + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Student Deleted Successfully")
        this.getAllStudent();
      });
  }
}
