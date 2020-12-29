import { TestBed } from '@angular/core/testing';

import { MachinecardHttpService } from './machinecard-http.service';

describe('MachinecardHttpService', () => {
  let service: MachinecardHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinecardHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
