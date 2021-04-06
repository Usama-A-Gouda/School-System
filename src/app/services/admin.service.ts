import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  logged = new Subject<boolean>()
  constructor() {

  }
  adminLogin(email: string, password: string): boolean {
    let storedEmail: string = "admin@admin.com";
    let storedpassword: string = "123456"
    if (storedEmail == email && storedpassword == password) {
      this.storeToken();
      return true
    }
    return false;
  }
  storeToken() {
    let generatedToken = "ThisIsAFakeToken" + new Date().toISOString()
    localStorage.setItem('Token', generatedToken);
    this.logged.next(true);
  }
  isLogged(): boolean {
    let token = localStorage.getItem("Token");
    if (token) {
      return true;
    }
    return false
  }
  logout() {
    localStorage.removeItem('Token');
    this.logged.next(false);
  }
  getLoggedStatus() {
    return this.logged;
  }
}
