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
    let results = [...this.dst];   

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

  
  currentImageIndex: number = 0;
  private autoScrollInterval: any;

  // Called when user clicks "View Details"
  openDestination(dest: destinations) {
    this.selectedDest = dest;
    this.currentImageIndex = 0;

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }

    // Auto scroll every 3 seconds
    this.autoScrollInterval = setInterval(() => {
      if (this.selectedDest?.images && this.selectedDest.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedDest.images.length;
      }
    }, 3000);
  }

  // Called when closing modal
  closeDestination() {
    this.selectedDest = null;
    this.currentImageIndex = 0;

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  nextImage() {
    if (this.selectedDest?.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedDest.images.length;
    }
  }

  prevImage() {
    if (this.selectedDest?.images) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedDest.images.length) %
        this.selectedDest.images.length;
    }
  }

}
