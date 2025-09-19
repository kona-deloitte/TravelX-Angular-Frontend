import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { OfficeInfo } from '../office-info/office-info';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, OfficeInfo],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
