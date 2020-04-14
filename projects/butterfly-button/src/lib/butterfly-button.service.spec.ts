import { TestBed } from '@angular/core/testing';

import { ButterflyButtonService } from './butterfly-button.service';

describe('ButterflyButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButterflyButtonService = TestBed.get(ButterflyButtonService);
    expect(service).toBeTruthy();
  });
});
