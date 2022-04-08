import { TestBed } from '@angular/core/testing';

import { RestoGuard } from './resto.guard';

describe('RestoGuard', () => {
  let guard: RestoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
