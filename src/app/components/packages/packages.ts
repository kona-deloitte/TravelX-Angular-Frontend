import { Component, inject, signal } from '@angular/core';
import { PackageService } from '../../services/package-service';
import { packages } from './type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages',
  imports: [FormsModule],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {
  PackageService = inject(PackageService);
  packageList: packages[];
  minPrice: string = '';
  maxPrice: string = '';
  searchInput = signal('');
  numberofNights: string = '';

  constructor() {
    this.packageList = this.PackageService.getPackages();
  }
  parsePrice(p: string) {
    if (!p) return 0;
    const digits = p.replace(/[^\d]/g, '');
    return Number(digits) || 0;
  }

  updateRangeFilter() {
    this.packageList = this.PackageService.getPackages().filter((pkg) => {
      const min = parseInt(this.minPrice != '' ? this.minPrice : '0');
      const max = this.maxPrice !== '' ? parseInt(this.maxPrice, 10) : Infinity;
      const price = this.parsePrice(pkg.price);
      return price >= min && price <= max;
    });
  }

  updateSortFilter(e: Event) {
    const val = (e.currentTarget as HTMLSelectElement).value;
    if (val == 'price-desc') {
      this.packageList = this.packageList.sort((a, b) => {
        let priceA = this.parsePrice(a.price);
        let priceB = this.parsePrice(b.price);
        return priceB - priceA;
      });
    } else if (val == 'price-asc') {
      this.packageList = this.packageList.sort((a, b) => {
        let priceA = this.parsePrice(a.price);
        let priceB = this.parsePrice(b.price);
        return priceA - priceB;
      });
    } else if (val == 'rating-desc') {
      this.packageList = this.packageList.sort((a, b) => {
        const ratingA = Number(a.rating) || 0;
        const ratingB = Number(b.rating) || 0;
        return ratingB - ratingA;
      });
    }
  }

  updateNightsFilter(e: Event) {
    this.numberofNights = (e.currentTarget as HTMLSelectElement).value;
    this.updateRangeFilter();
    if (this.numberofNights === '<=3') {
      this.packageList = this.packageList.filter((pkg) => {
        const nights = parseInt(pkg.nights.split(' ')[0]);
        return nights <= 3;
      });
    } else if (this.numberofNights === '4-5') {
      this.packageList = this.packageList.filter((pkg) => {
        const nights = parseInt(pkg.nights.split(' ')[0]);
        return nights > 3 && nights < 6;
      });
    } else if (this.numberofNights === '>=6') {
      this.packageList = this.packageList.filter((pkg) => {
        const nights = parseInt(pkg.nights.split(' ')[0]);
        return nights >= 6;
      });
    }
  }

  updateSearchFilter() {
    this.updateRangeFilter();
    this.packageList = this.packageList.filter((pkg) => {
      return (
        pkg.title.toLowerCase().includes(this.searchInput().toLowerCase()) ||
        pkg.location.toLowerCase().includes(this.searchInput().toLowerCase())
      );
    });
  }

  resetFilter() {
    this.packageList = this.PackageService.getPackages();
  }
}
