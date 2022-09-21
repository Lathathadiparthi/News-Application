import { TestBed } from '@angular/core/testing';

import { NewsAppServiceService } from './news-app-service.service';

describe('NewsAppServiceService', () => {
  let service: NewsAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
