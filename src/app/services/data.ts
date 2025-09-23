import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  getPackages() {
    return [
      {
        title: 'Bali Escape',
        price: '₹89,999',
        nights: '6 Nights',
        rating: 4.8,
        location: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      },
      {
        title: 'Paris & Alps',
        price: '₹1,49,999',
        nights: '7 Nights',
        rating: 4.9,
        location: 'France & Switzerland',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
      },

      {
        title: 'Tokyo Discovery',
        price: '₹1,29,500',
        nights: '5 Nights',
        rating: 4.7,
        location: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200',
      },
      {
        title: 'Maldives Luxe',
        price: '₹1,79,000',
        nights: '4 Nights',
        rating: 4.9,
        location: 'Maldives',
        image: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?w=1200',
      },
      {
        title: 'Dubai Adventures',
        price: '₹79,999',
        nights: '5 Nights',
        rating: 4.6,
        location: 'Dubai, UAE',
        image:
          'https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=',
      },
      {
        title: 'Santorini Sunset',
        price: '₹1,39,999',
        nights: '6 Nights',
        rating: 4.8,
        location: 'Greece',
        image:
          'https://www.shutterstock.com/image-photo/europe-summer-destination-traveling-tourism-260nw-2461128857.jpg',
      },
      // …more
    ];
  }

  getTestimonials() {
    return [
      {
        name: 'Aisha Khan',
        role: 'Designer',
        rating: 5,
        quote: 'The Bali package was a dream. Flawless service and breathtaking views!',
        initials: 'AK',
      },
      {
        name: 'Rahul Mehta',
        role: 'Product Manager',
        rating: 5,
        quote: 'Seamless booking and top-notch support. Already planning my next trip.',
        initials: 'RM',
      },
      {
        name: 'Saanvi Iyer',
        role: 'Engineer',
        rating: 4,
        quote: 'Loved the curated experiences in Tokyo—worth every rupee!',
        initials: 'SI',
      },
    ];
  }
}
