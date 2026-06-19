import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showBooking = false;

  openBooking() {
    alert('Booking opened');
    this.showBooking = true;

  }

  closeBooking() {
    this.showBooking = false;
  }

}
