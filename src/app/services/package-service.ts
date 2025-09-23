import { Injectable } from '@angular/core';
import { packages } from '../components/packages/type';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  packageList: packages[];
  constructor() {
    this.packageList = [
      {
        title: 'Bali Escape',
        price: '₹89,999',
        nights: '3 Nights',
        rating: 4.8,
        location: 'Bali, Indonesia',
        img: './images/bali.gif',
      },
      {
        title: 'Paris & Alps',
        price: '₹1,49,999',
        nights: '7 Nights',
        rating: 4.9,
        location: 'France & Switzerland',
        img: './images/p-4.jpg',
      },
      {
        title: 'Tokyo Discovery',
        price: '₹1,29,500',
        nights: '5 Nights',
        rating: 4.7,
        location: 'Tokyo, Japan',
        img: './images/tokyo.gif',
      },
      {
        title: 'Maldives Luxe',
        price: '₹1,79,000',
        nights: '4 Nights',
        rating: 4.9,
        location: 'Maldives',
        img: './images/maldives.gif',
      },
      {
        title: 'Dubai Adventures',
        price: '₹79,999',
        nights: '5 Nights',
        rating: 4.6,
        location: 'Dubai, UAE',
        img: './images/9b34.gif',
      },
      {
        title: 'Santorini Sunset',
        price: '₹1,39,999',
        nights: '6 Nights',
        rating: 4.8,
        location: 'Greece',
        img: './images/santorini.gif',
      },
    ];
  }
  getPackages() {
    return this.packageList;
  }
}
