import { TestBed } from '@angular/core/testing';

import { EventServeService } from './event-serve.service';

describe('EventServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventServeService = TestBed.get(EventServeService);
    expect(service).toBeTruthy();
  });
});
