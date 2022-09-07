import { TestBed } from '@angular/core/testing';

import { PostcopyService } from './postcopy.service';

describe('PostcopyService', () => {
  let service: PostcopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
