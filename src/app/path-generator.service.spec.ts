import { TestBed } from '@angular/core/testing';

import { PathGeneratorService } from './path-generator.service';

describe('PathGeneratorService', () => {
  let service: PathGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
