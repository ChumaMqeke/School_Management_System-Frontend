import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDataComponent } from './components/admin-dashboard/student-data/student-data.component';
import { ParentDataComponent } from './components/admin-dashboard/parent-data/parent-data.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AdminDashboardComponent,
    StudentDataComponent,
    ParentDataComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AdminModule { }
