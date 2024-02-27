import { TestBed } from '@angular/core/testing';

import { DeepfaceService } from './deepface.service';

describe('DeepfaceService', () => {
  let service: DeepfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
