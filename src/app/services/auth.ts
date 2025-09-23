import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LS = {
    users: 'wlx_users',
    current: 'wlx_current_user',
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.LS.current) || 'null');
  }

  signup(user: { name: string; email: string; password: string }): boolean {
    const users = JSON.parse(localStorage.getItem(this.LS.users) || '[]');
    if (users.some((u: any) => u.email === user.email)) return false;
    users.push({ ...user, ph: user.password });
    localStorage.setItem(this.LS.users, JSON.stringify(users));
    localStorage.setItem(this.LS.current, JSON.stringify(user));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.LS.users) || '[]');
    const user = users.find((u: any) => u.email === email && u.ph === password);
    if (user) {
      localStorage.setItem(this.LS.current, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.LS.current);
  }
}
