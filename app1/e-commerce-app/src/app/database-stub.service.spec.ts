import { TestBed } from '@angular/core/testing';

import { DatabaseStubService } from './database-stub.service';

describe('DatabaseStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseStubService = TestBed.get(DatabaseStubService);
    expect(service).toBeTruthy();
  });
});
