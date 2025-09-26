import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, of, map, catchError } from 'rxjs';

interface DummyUser {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LS = {
    users: 'wlx_users',
    current: 'wlx_current_user',
  };
  success = signal(false);
  constructor(private http: HttpClient) {}

  onLoggedIn() {
    return this.success();
  }

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

  login(email: string, password: string): Observable<boolean> {
    const usersLocal = JSON.parse(localStorage.getItem(this.LS.users) || '[]');
    const userLocal = usersLocal.find((u: any) => u.email == email && u.password == password);

    var userGlobal: DummyUser | undefined = undefined;

    if (userLocal) {
      localStorage.setItem(this.LS.current, JSON.stringify(userLocal));

      this.success.set(true);
      return of(true);
    } else {
      return this.http.get<{ users: DummyUser[] }>('https://dummyjson.com/users').pipe(
        map((response) => {
          const userGlobal = response.users.find(
            (user) => user.email === email && user.password === password
          );
          if (userGlobal) {
            localStorage.setItem(
              this.LS.current,
              JSON.stringify({ ...userGlobal, fullName: userGlobal.firstName })
            );

            this.success.set(true);
            return true;
          } else {
            return false;
          }
        }),

        catchError((err) => {
          console.error('Login failed:', err);
          return of(false);
        })
      );
    }
  }
  logout() {
    localStorage.removeItem(this.LS.current);
  }
}
