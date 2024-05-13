import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdminAuthService } from '../../service/admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  adminLoginData = new FormGroup({
    username : new FormControl,
    password : new FormControl
  })

  constructor(private fb : FormBuilder, private adminAuth : AdminAuthService) {}

  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      username : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(4)]],
    });
  }

  // Calling the submit form and displaying the admin name on the console
  // adminLogin() {
  //   console.log(this.adminLoginData.value.username + " " + this.adminLoginData.value.password);
  // }
  adminLogin() {
    this.adminAuth.adminLogin(this.adminLoginData.value.username, this.adminLoginData.value.password)
  }

}
