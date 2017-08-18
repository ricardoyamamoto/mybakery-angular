/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewRecipeService } from './view-recipe.service';

describe('Service: ViewRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewRecipeService]
    });
  });

  it('should ...', inject([ViewRecipeService], (service: ViewRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
