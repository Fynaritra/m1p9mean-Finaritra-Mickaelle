import { TestBed } from '@angular/core/testing';

import { CmdplatService } from './cmdplat.service';

describe('CmdplatService', () => {
  let service: CmdplatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdplatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
