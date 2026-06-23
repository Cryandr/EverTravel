import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToursService } from '../../services/tours.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  tours: any[] = [];

  constructor(
    private toursService: ToursService
  ) {
    this.toursService.getTours().subscribe(data => {this.tours = data;
      });
  }

  showBooking = false;

  bookingData = {
    name: '',
    email: '',
    destination: 'Cyprus'
  };

  openBooking() {
    this.showBooking = true;
  }

  submitBooking() {
    console.log(this.bookingData);
    this.closeBooking();
  }

  closeBooking() {
    this.showBooking = false;
  }
}
