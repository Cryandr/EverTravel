import {Component, Input, Output, EventEmitter, output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-card.html',
  styleUrl: './tour-card.css'
})
export class TourCard {
  @Input() tour: any;

  @Output() book = new EventEmitter<void>();

  bookTour(){
    this.book.emit();
  }
}
