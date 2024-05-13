import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/component/login/login.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
// import { AdminGuard } from './service/admin.guard';

const routes: Routes = [
  {path: 'admin', component : AdminComponent , children : [
    { path: 'login', component : LoginComponent},
    { path: 'admin-dashboard',  component: AdminDashboardComponent }, //canActivate: [AdminGuard],
  ]},
  {
    path : '', redirectTo : 'admin', pathMatch : 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
