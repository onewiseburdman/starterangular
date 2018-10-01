import { TestBed, inject } from '@angular/core/testing';

import { PagecontentService } from './pagecontent.service';

describe('PagecontentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagecontentService]
    });
  });

  it('should be created', inject([PagecontentService], (service: PagecontentService) => {
    expect(service).toBeTruthy();
  }));
});
