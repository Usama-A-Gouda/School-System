import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _adminService: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }
  onFormSumiting(email: string, password: string) {
    let isValidData: boolean = this._adminService.adminLogin(email, password);
    if (isValidData) {
      this._router.navigate(['/students-list']);
    }
    else {
      alert("email or password isn't correct please try again !");
    }

  }
}
