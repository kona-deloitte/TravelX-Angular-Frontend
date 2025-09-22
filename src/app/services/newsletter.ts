import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private key = 'wlx_newsletter';
 
  subscribe(email: string) {
    const list = JSON.parse(localStorage.getItem(this.key) || '[]');
    list.push({ email, at: new Date().toISOString() });
    localStorage.setItem(this.key, JSON.stringify(list));
  }
}