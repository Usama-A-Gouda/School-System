import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged !: boolean;
  constructor(private _adminService: AdminService, private _router: Router) { }

  ngOnInit(): void {
    this.isLogged = this._adminService.isLogged();
    this._adminService.getLoggedStatus().subscribe(status => {
      this.isLogged = status;
    })

  }
  onLogout() {
    this._adminService.logout();
    this._router.navigate(['/']);
  }


}
