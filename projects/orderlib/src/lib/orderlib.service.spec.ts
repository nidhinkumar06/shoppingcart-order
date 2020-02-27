import { TestBed } from '@angular/core/testing';

import { OrderlibService } from './orderlib.service';

describe('OrderlibService', () => {
  let service: OrderlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
