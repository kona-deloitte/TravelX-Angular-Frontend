import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '../../services/storage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class Auth {
  loginMode = true;
  authService = inject(AuthService);
  signupData = { fullName: '', email: '', password: '', confirmPassword: '' };
  loginData = { email: '', password: '' };

  constructor(private storage: Storage, private router: Router) {}

  setSignup() {
    this.loginMode = false;
  }
  setLogin() {
    this.loginMode = true;
  }

  onSignup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const result = this.storage.signup({
      fullName: this.signupData.fullName,
      email: this.signupData.email,
      password: this.signupData.password,
    });

    if (result === 'Signup successful!') {
      alert('Signup successful! Please login.');
      this.loginMode = true;
    } else {
      alert(result);
    }
  }

  onLogin() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe((success) => {
      if (success) {
        this.router.navigate(['']);
        window.dispatchEvent(new Event('storage')); // Update header
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}
