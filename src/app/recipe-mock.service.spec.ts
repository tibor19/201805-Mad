import { TestBed, inject } from '@angular/core/testing';

import { RecipeMockService } from './recipe-mock.service';

describe('RecipeMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeMockService]
    });
  });

  it('should be created', inject([RecipeMockService], (service: RecipeMockService) => {
    expect(service).toBeTruthy();
  }));
});
