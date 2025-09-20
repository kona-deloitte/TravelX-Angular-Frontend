import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validator, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css'
})
export class BookingForm {
  bookingForm: FormGroup
  PACKAGES = [
    { id: 'pkg-bali', title: 'Bali Escape', price: '₹89,999', nights: '6 Nights', rating: 4.8, location: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200', desc: 'Temples, beaches, and hidden waterfalls.', dest: 'Bali' },
    { id: 'pkg-paris', title: 'Paris & Alps', price: '₹1,49,999', nights: '7 Nights', rating: 4.9, location: 'France & Switzerland', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200', desc: 'City charm + alpine scenery.', dest: 'Paris' },
    { id: 'pkg-tokyo', title: 'Tokyo Discovery', price: '₹1,29,500', nights: '5 Nights', rating: 4.7, location: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200', desc: 'A mix of old and new Tokyo.', dest: 'Kyoto' },
    { id: 'pkg-maldives', title: 'Maldives Luxe', price: '₹1,79,000', nights: '4 Nights', rating: 4.9, location: 'Maldives', img: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?w=1200', desc: 'Overwater bungalows and turquoise seas.', dest: 'Maldives' },
    { id: 'pkg-dubai', title: 'Dubai Adventures', price: '₹79,999', nights: '5 Nights', rating: 4.6, location: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1505739773365-ea9a6a4a1ebd?auto=format&fit=crop&w=1920&q=90', desc: 'Desert, skyscrapers and shopping.', dest: 'Dubai' },
    { id: 'pkg-santorini', title: 'Santorini Sunset', price: '₹1,39,999', nights: '6 Nights', rating: 4.8, location: 'Greece', img: 'https://images.unsplash.com/photo-1505739675895-87a5f5b9b7d9?w=1200', desc: 'Sunsets over white-washed villages.', dest: 'Santorini' }
  ];

  DESTINATIONS = [
    { id: 'Bali', title: 'Bali', location: 'Indonesia', rating: 4.8, img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200', desc: 'Temples, beaches, and hidden waterfalls.' },
    { id: 'Paris', title: 'Paris', location: 'France', rating: 4.9, img: 'https://images.unsplash.com/photo-1461319805560-d7d0d4a38b6c?w=1200', desc: 'Art, fashion and croissants for days.' },
    { id: 'Kyoto', title: 'Kyoto', location: 'Japan', rating: 4.7, img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d5?w=1200', desc: 'Shrines, gardens, and tea ceremonies.' },
    { id: 'Santorini', title: 'Santorini', location: 'Greece', rating: 4.8, img: 'https://images.unsplash.com/photo-1505739773434-c7c2972b99d7?w=1200', desc: 'White-washed villages and sunsets.' },
    { id: 'Maasai Mara', title: 'Maasai Mara', location: 'Kenya', rating: 4.6, img: 'https://images.unsplash.com/photo-1497979410514-7c58b6b3eaa1?w=1200', desc: 'Big Five safaris and golden savannahs.' },
    { id: 'Reykjavik', title: 'Reykjavík', location: 'Iceland', rating: 4.7, img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200', desc: 'Northern Lights and hot springs.' }
  ];

constructor(private fb:FormBuilder){
this.bookingForm = this.fb.group({
name: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
destination: ['', Validators.required],
packageSelect: ['', Validators.required],
startDate: ['', Validators.required],
endDate: ['', Validators.required],
numberOfPeople: [1, [Validators.required, Validators.min(1)]],
roomType: ['Standard'],
mealPlan: ['Room only'],
bedType: ['Double'],
rooms: [1],
transportMode: ['Flight'],
flightNumber: [''],
arrivalTime: [''],
departureTime: [''],
extras: this.fb.group({
airportTransfer: [false],
travelInsurance: [false],
privateGuide: [false],
wheelchair: [false]
}),
specialRequests: ['']
});

}
formMessage: string = ''; // Add this at the top of your component

onSubmit() {
  if (this.bookingForm.valid) {
    // Form is valid → show success message
    this.formMessage = 'Thanks for booking! Your details have been submitted.';
    console.log(this.bookingForm.value);

    // Optionally, reset the form after submission
    // this.bookingForm.reset();
  } else {
    // Form invalid → mark all controls as touched to show errors
    this.formMessage = 'Please fix the errors before submitting.';
    this.markAllFieldsAsTouched(this.bookingForm);
  }
}

// Helper function to mark all fields as touched
markAllFieldsAsTouched(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.markAllFieldsAsTouched(control);
    }
  });
}



onReset(){
  this.bookingForm.reset();
}
decrementPeople() {
  const currentValue = this.bookingForm.get('numberOfPeople')?.value || 1;
  if (currentValue > 1) {
    this.bookingForm.get('numberOfPeople')?.setValue(currentValue - 1);
  }
}

// Increment number of people
incrementPeople() {
  const currentValue = this.bookingForm.get('numberOfPeople')?.value || 1;
  this.bookingForm.get('numberOfPeople')?.setValue(currentValue + 1);
}
}
