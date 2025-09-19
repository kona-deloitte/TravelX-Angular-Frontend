import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  loginMode: boolean = true;
  setLogin() {
    this.loginMode = true;
  }
  setSignup() {
    this.loginMode = false;
  }
}
