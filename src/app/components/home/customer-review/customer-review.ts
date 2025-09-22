import { Component, OnInit } from '@angular/core';
import { Data } from '../../../services/data';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-customer-review',
  imports: [CommonModule],
  templateUrl: './customer-review.html',
  styleUrls: ['./customer-review.css'],
})
export class CustomerReview implements OnInit {
  testimonials: any[] = [];
 
  constructor(private dataService: Data) {}
 
  ngOnInit() {
    this.testimonials = this.dataService.getTestimonials();
  }}