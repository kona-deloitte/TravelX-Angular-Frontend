import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DestinationService } from '../../services/destination-service';
import { destinations } from './type';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './destination.html',
  styleUrls: ['./destination.css']
})
export class Destination {
  // Filters
  searchTerm: string = '';
  selectedCountry: string = '';
  minRating: string = '';
  sortOption: string = 'featured';

  // State
  resultsInfo: string = '';
  selectedDest: destinations | null = null;   
  wishlist: Set<number> = new Set();

  // Data
  dst: destinations[] = [];
  filteredDestinations: destinations[] = [];
  countries: string[] = [];

  constructor(private destinationService: DestinationService) {
    this.dst = this.destinationService.getDestinations();
    this.filteredDestinations = [...this.dst];
    this.countries = Array.from(new Set(this.dst.map(d => d.location))).sort();
    this.updateResultsInfo();
  }

  applyFilters() {
    let results = [...this.dst];   // ✅ FIX: use dst, not destinations

    if (this.searchTerm.trim()) {
      results = results.filter(d =>
        d.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        d.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCountry) {
      results = results.filter(d => d.location === this.selectedCountry);
    }

    if (this.minRating) {
      const min = parseFloat(this.minRating);
      if (!isNaN(min)) {
        results = results.filter(d => d.rating >= min);
      }
    }

    switch (this.sortOption) {
      case 'ratingHighLow':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'ratingLowHigh':
        results.sort((a, b) => a.rating - b.rating);
        break;
      case 'nameAZ':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameZA':
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    this.filteredDestinations = results;
    this.updateResultsInfo();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCountry = '';
    this.minRating = '';
    this.sortOption = 'featured';
    this.filteredDestinations = [...this.dst];   // ✅ FIX
    this.updateResultsInfo();
  }

  updateResultsInfo() {
    this.resultsInfo = this.filteredDestinations.length
      ? `${this.filteredDestinations.length} destinations found`
      : 'No destinations match your search.';
  }

  toggleWishlist(id: number) {
    this.wishlist.has(id) ? this.wishlist.delete(id) : this.wishlist.add(id);
  }

  isWishlisted(id: number): boolean {
    return this.wishlist.has(id);
  }
}
