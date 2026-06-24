import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToursService } from '../../services/tours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  tours: any[] = [];

  constructor(
    private toursService: ToursService
  ) {
    //Temporary check
    this.toursService.getTours().subscribe(data => {
      console.log('Tours from API:', data);
      this.tours = data;
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
