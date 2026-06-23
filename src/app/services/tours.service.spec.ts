import { TestBed } from '@angular/core/testing';

import { ToursService } from './tours.service';

describe('Tours', () => {
  let service: ToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
