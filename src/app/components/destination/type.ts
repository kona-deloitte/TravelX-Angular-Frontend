export interface destinations {
  id: number;
  title: string;
  location: string;
  rating: number;
  desc: string;
  img?: string;
  video?: string;
  slug: string;
  highlights?: string[];
  itinerary?: string[];
  mapUrl?: string;
}
