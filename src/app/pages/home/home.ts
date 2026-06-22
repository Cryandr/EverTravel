import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports:
    [RouterLink,
    FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  tours = [
    {
      name: 'Norway Adventure',
      days: 7,
      price: 299,
      rating: 4.9,
      travelers: 120,
      description: 'Fjords and mountains',
    },

    {
      name: 'Cyprus Escape',
      days: 7,
      price: 199,
      rating: 4.6,
      travelers: 90,
      description: 'Fjords and mountains',
    },

    {
      name: 'Swiss Alps',
      days: 7,
      price: 499,
      rating: 4.8,
      travelers: 130,
      description: 'Fjords and mountains',
    }
  ];

  showBooking = false;

  bookingData = {
    name: '',
    email: '',
    destination: 'Cyprus'
  };

  openBooking() {
    alert('Booking opened');
    this.showBooking = true;

  }

  submitBooking() {

    console.log(this.bookingData);
    alert('Request sent successfully! ✈️');
    this.closeBooking()
  }

  closeBooking() {
    this.showBooking = false;
  }

}
