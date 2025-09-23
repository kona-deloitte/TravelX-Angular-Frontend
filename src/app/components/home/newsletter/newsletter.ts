import { Component } from '@angular/core';
import { NewsletterService } from '../../../services/newsletter';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.html',
  styleUrls: ['./newsletter.css'],
})
export class Newsletter {
  email = '';

  message = '';

  success = false;

  constructor(private newsletter: NewsletterService) {}

  subscribe(form: NgForm) {
    // Extra safety: check form validity

    if (!form.valid) {
      this.message = 'Please enter a valid email address.';

      this.success = false;

      return;
    }

    // Save subscription via service

    this.newsletter.subscribe(this.email);

    this.message = 'Subscription successfully completed!';

    this.success = true;

    // Reset form

    form.resetForm();
  }
}
