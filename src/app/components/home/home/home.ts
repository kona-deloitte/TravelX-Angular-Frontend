import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { PopularPackages } from '../popular-packages/popular-packages';
import { Newsletter } from '../newsletter/newsletter';
import { CustomerReview } from '../customer-review/customer-review';

@Component({
  selector: 'app-home',
  imports: [Carousel, PopularPackages, Newsletter, CustomerReview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
