import { Routes } from '@angular/router';
import { Home } from './components/home/home/home';
import { About } from './components/about/about/about';
import { Packages } from './components/packages/packages/packages';
import { Destination } from './components/destination/destination';
import { Booking } from './components/booking/booking/booking';
import { Contact } from './components/contact/contact/contact';
import { Auth } from './components/auth/auth';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'packages', component: Packages },
  { path: 'destinations', component: Destination },
  { path: 'booking', component: Booking },
  { path: 'contact', component: Contact },
  { path: 'auth', component: Auth },
  { path: '**', redirectTo: '' },
];
