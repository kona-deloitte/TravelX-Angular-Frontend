import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  currentUser: any = null;

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.currentUser = this.storage.getCurrentUser();
    window.addEventListener('storage', () => {
      this.currentUser = this.storage.getCurrentUser();
    });
  }

  logout() {
    if (confirm('Log out of TravelX?')) {
      this.storage.logout();
      this.currentUser = null;
    }
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
