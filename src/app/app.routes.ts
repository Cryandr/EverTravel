import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Tours } from './pages/tours/tours';
import { Booking } from './pages/booking/booking';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'tours',
    component: Tours
  },

  {
    path: 'booking',
    component: Booking
  },

  {
    path: 'contact',
    component: Contact
  }

];
