import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipeListService } from '../services/recipe-list.service';
import { DetailedSearchService } from '../services/detailed-search.service';

import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css'],
  providers: [DetailedSearchService], 
})
export class DetailedSearchComponent implements OnInit {
  
  /** Variables used to store the recipes**/
  recipes: Array<Recipe>;
  criterion: string;

  constructor(
    private recipeListService: RecipeListService,
    private detailedSearchService: DetailedSearchService,
    private router: Router
  ) { }

  ngOnInit() {

    this.recipeListService.readAll().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  showSearchResults(term : string): void {
    if (term != "")
    {
      this.recipes = [];
      this.detailedSearchService.readSearchedRecipes(term, this.criterion).subscribe(recipes => {
          this.recipes = recipes;
      });

      //this.detailedSearchService.findCategoryIds(term); // JUST TO TEST THIS METHOD
    }   
  }

  resetSearchResults(): void {
      this.recipes = [];
      this.ngOnInit();
  }



}
