/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeDetailServiceService } from './RecipeDetailService.service';

describe('Service: RecipeDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeDetailServiceService]
    });
  });

  it('should ...', inject([RecipeDetailServiceService], (service: RecipeDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});