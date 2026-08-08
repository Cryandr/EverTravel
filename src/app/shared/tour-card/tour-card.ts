import {Component, Input, Output, EventEmitter, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-card.html',
  styleUrl: './tour-card.css'
})
export class TourCard {

  @Input({ required: true })
  tour!: Tour;

  @Output() book = new EventEmitter<void>();

  bookTour(){
    this.book.emit();
  }
}
