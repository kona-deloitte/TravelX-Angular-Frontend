import { Component } from '@angular/core';
import { NewsletterService } from '../../../services/newsletter';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.html',
  styleUrls: ['./newsletter.css'],
})
export class Newsletter {
  email: string = '';
  message: string = '';
  success = false;
 
  constructor(private newsletterService: NewsletterService) {}
 
  subscribe(event?: Event) {
    // prevent page reload
    if (event) event.preventDefault();
 
    if (!this.email.trim()) {
      this.message = 'Please enter a valid email!';
      this.success = false;
      return;
    }
 
    this.newsletterService.subscribe(this.email);
    this.message = 'Subscribed! Check your inbox for a welcome email.';
    this.success = true;
    this.email = '';
  }
}