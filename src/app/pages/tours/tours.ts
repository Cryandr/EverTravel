import { Component } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/tour.model';
import { TourCard } from '../../shared/tour-card/tour-card';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [TourCard],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class Tours {
  tours: Tour[] = [];

  constructor(private toursService: ToursService) {
    this.toursService.getTours().subscribe((data) => {
      this.tours = data;
    });
  }
}
