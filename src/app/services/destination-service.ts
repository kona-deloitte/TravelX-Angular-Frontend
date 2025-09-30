import { Injectable } from '@angular/core';
import { destinations } from '../components/destination/type';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinations: destinations[];

  constructor() {
    this.destinations = [
      {
        id: 1,
        title: 'Bali Paradise',
        title1:'Bali',
        location: 'Indonesia',
        rating: 4.8,
        desc: 'Relax on pristine beaches with crystal clear water.',
        video: './images/bali.mp4',
        images:['./images/g-1.jpg','./images/g-2.jpg','./images/g-4.jpg'],
        slug: 'bali-paradise',
        highlights: ['Beaches', 'Surfing', 'Temples'],
        itinerary: ['Day 1: Arrival', 'Day 2: Beach', 'Day 3: Ubud'],
        mapUrl: 'https://goo.gl/maps/bali'
      },
      {
        id: 2,
        title: 'Santorini Escape',
        title1:'Santorini',
        location: 'Greece',
        rating: 4.9,
        desc: 'Experience sunsets, blue domes, and Mediterranean cuisine.',
        video: './images/santorini.mp4',
        images:['./images/g-3.jpg','./images/g-5.jpg','./images/g-6.jpg'],
        slug: 'santorini-escape',
        highlights: ['Sunsets', 'Wine Tours', 'Oia Village'],
        itinerary: ['Day 1: Arrival', 'Day 2: Sunset in Oia', 'Day 3: Wine Tour'],
        mapUrl: 'https://goo.gl/maps/santorini'
      },
      {
        id: 3,
        title: 'Tokyo Explorer',
        title1:'Tokyo',
        location: 'Japan',
        rating: 4.9,
        desc: 'Experience futuristic cities and traditional temples.',
        video: './images/mt_fuji.mp4',
        images:['./images/p-5.jpg','./images/g-4.jpg','./images/tokyo.gif'],
        slug: 'tokyo-explorer',
        highlights: ['Shibuya Crossing', 'Sushi', 'Mt. Fuji'],
        itinerary: ['Day 1: Shinjuku', 'Day 2: Asakusa', 'Day 3: Mt. Fuji'],
        mapUrl: 'https://goo.gl/maps/tokyo'
      },
    {
        id: 4,
        title: 'Swiss Alps Adventure',
        title1:'Swiss Alps',
        location: 'Switzerland',
        rating: 4.7,
        desc: 'Snow-capped peaks and scenic train rides.',
        video: './images/swiss_alps.mp4',
        images:['./images/g-8.jpg','./images/p-2.jpg','./images/g-7.jpg'],
        slug: 'swiss-alps',
        highlights: ['Skiing', 'Mountains', 'Glaciers'],
        itinerary: ['Day 1: Zurich', 'Day 2: Jungfraujoch', 'Day 3: Interlaken'],
        mapUrl: 'https://goo.gl/maps/swiss'
        
        },
        {
            id: 5,
            title: 'Dubai Luxury',
            title1:'Dubai',
            location: 'UAE',
            rating: 4.6,
            desc: 'Experience opulence in the desert city.',
            video: './images/dubai.mp4',
            images:['./images/p-1.jpg','./images/p-3.jpg','./images/p-6.jpg','./images/g-9.jpg'],
            slug: 'dubai-luxury',
            highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping'],
            itinerary: ['Day 1: Burj Khalifa', 'Day 2: Desert Safari', 'Day 3: Shopping'],
            mapUrl: 'https://goo.gl/maps/dubai'
        }
    ];
  }

  getDestinations(): destinations[] {
    return this.destinations;
  }
}
