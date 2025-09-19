import { Component } from '@angular/core';
import { BookingForm } from '../booking-form/booking-form';
import { ContactCard } from '../contact-card/contact-card';

@Component({
  selector: 'app-booking',
  imports: [BookingForm, ContactCard],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {}
