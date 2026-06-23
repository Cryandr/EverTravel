import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ToursService {

  getTours() {
      return of([[
      {
        name: 'Norway Adventure',
        days: 7,
        price: 299,
        rating: 4.9,
        image: 'norway-tour'
      },

      {
        name: 'Cyprus Escape',
        days: 5,
        price: 199,
        rating: 4.6,
        image: 'cyprus-tour'
      },

      {
        name: 'Swiss Alps',
        days: 10,
        price: 499,
        rating: 4.8,
        image: 'swiss-tour'
      }
    ]]);
  }
}
