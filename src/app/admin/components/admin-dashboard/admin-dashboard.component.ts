import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'] 
})
export class AdminDashboardComponent implements OnInit {

  student: boolean = false;
  parent: boolean = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.showStudentData();
  }

  setOff() {
    this.student = false;
    this.parent = false;
  }

  showStudentData() {
    this.setOff();
    this.student = true;
  }

  showParentData() {
    this.setOff();
    this.parent = true;
  }

  signOut() {
    localStorage.removeItem("token");
    this.router.navigate(['admin/login']); 
  }

}
