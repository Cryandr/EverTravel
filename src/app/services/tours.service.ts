import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ToursService {

  constructor(
    private http: HttpClient
  ) {}

  getTours() {
    return this.http.get<any[]>(
      'http://localhost:3000/tours'
    );
  }
}
