import { TestBed } from '@angular/core/testing';

import { MachinecardService } from './machinecard.service';

describe('MachinecardService', () => {
  let service: MachinecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
