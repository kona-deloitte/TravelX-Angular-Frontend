import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Storage {
  private LS = {
    users: 'wlx_users',
    current: 'wlx_current_user',
    newsletter: 'wlx_newsletter',

  };

  getJSON<T>(key: keyof typeof this.LS, fallback: T): T {
    try {
      return JSON.parse(localStorage.getItem(this.LS[key])!) ?? fallback;
    } catch {
      return fallback;
    }
  }

  setJSON<T>(key: keyof typeof this.LS, val: T): void {
    localStorage.setItem(this.LS[key], JSON.stringify(val));
  }

  remove(key: keyof typeof this.LS): void {
    localStorage.removeItem(this.LS[key]);
  }

  getCurrentUser() {
    return this.getJSON<any | null>('current', null);
  }

  signup(user: { fullName: string; email: string; password: string }): string {
    const users = this.getJSON<any[]>('users', []);
    if (users.some(u => u.email === user.email)) return 'User already exists!';
    users.push(user);
    this.setJSON('users', users);
    return 'Signup successful!';
  }

  login(email: string, password: string): string {
    const users = this.getJSON<any[]>('users', []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return 'Invalid credentials!';
    this.setJSON('current', { fullName: user.fullName, email: user.email });
    return 'Login successful!';
  }

  logout() {
    this.remove('current');
  }
}
