import { TestBed } from '@angular/core/testing';

import { RestoboService } from './restobo.service';

describe('RestoboService', () => {
  let service: RestoboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
