import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
 contact = {
    cname: '',
    cemail: '',
    cphone: '',
    subject: '',
    message: '',
    preferredContact: 'Email',
    attach: null as File | null
  };
    submitted = false;
  successMsg = '';
  ngOnInit():void{}
onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    alert("✅ Your message has been successfully submitted! We will get back to you ASAP.");
    console.log("Form Data:", this.contact);

    // Optionally clear the form after success
    form.resetForm({
      preferredContact: 'Email'
    });
  } else {
    // Mark all controls as touched so their errors show up
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    alert("❌ Please correct the highlighted errors before submitting.");
  }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.contact.attach = file || null;
  }

  onReset(form: NgForm) {
    form.resetForm();
    this.successMsg = '';
    this.submitted = false;
  }
}
