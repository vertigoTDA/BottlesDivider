import { TestBed } from '@angular/core/testing';

import { BottlesService } from './bottles.service';

describe('BottlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BottlesService = TestBed.get(BottlesService);
    expect(service).toBeTruthy();
  });
});
