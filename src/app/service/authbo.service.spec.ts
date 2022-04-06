import { TestBed } from '@angular/core/testing';

import { AuthboService } from './authbo.service';

describe('AuthboService', () => {
  let service: AuthboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
