import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validator, Form, Validators } from '@angular/forms';
import { PackageService } from '../../../services/package-service';
import { DestinationService } from '../../../services/destination-service';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css'
})
export class BookingForm {
  bookingForm: FormGroup
  packageServices = inject(PackageService)
  PACKAGES = this.packageServices.getPackages();
  destinationServices = inject(DestinationService)
  DESTINATIONS = this.destinationServices.getDestinations();


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
formMessage: string = '';

onSubmit() {
  if (this.bookingForm.valid) {
    this.formMessage = 'Thanks for booking! Your details have been submitted.';
    console.log(this.bookingForm.value);

  } else {
    this.formMessage = 'Please fix the errors before submitting.';
    this.markAllFieldsAsTouched(this.bookingForm);
  }
}

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
incrementPeople() {
  const currentValue = this.bookingForm.get('numberOfPeople')?.value || 1;
  this.bookingForm.get('numberOfPeople')?.setValue(currentValue + 1);
}
}
