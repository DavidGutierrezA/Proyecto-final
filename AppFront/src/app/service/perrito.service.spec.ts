import { TestBed } from '@angular/core/testing';

import { PerritoService } from './perrito.service';

describe('PerritoService', () => {
  let service: PerritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
