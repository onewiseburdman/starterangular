import { TestBed, inject } from '@angular/core/testing';

import { PagestyleService } from './pagestyle.service';

describe('PagestyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagestyleService]
    });
  });

  it('should be created', inject([PagestyleService], (service: PagestyleService) => {
    expect(service).toBeTruthy();
  }));
});
