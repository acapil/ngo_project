import { TestBed } from '@angular/core/testing';

import { EventRegistrationServeService } from './event-registration-serve.service';

describe('EventRegistrationServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRegistrationServeService = TestBed.get(EventRegistrationServeService);
    expect(service).toBeTruthy();
  });
});
