import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  showmenu:boolean = false;
  constructor(private route: Router) { }
  sendToken(token: string) {
    localStorage.setItem("token", token);
    this.route.navigate(["/dashboard"]);
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(["/login"]);
  }
}
