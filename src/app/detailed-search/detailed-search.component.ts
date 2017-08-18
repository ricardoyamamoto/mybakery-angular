import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipeListService } from '../services/recipe-list.service';
import { SearchByTitleService } from '../services/search-by-title.service';
import { SearchByCategoryService } from '../services/search-by-category.service';
import { CategoryService } from '../services/category.service';

import { Recipe } from '../models/recipe';
import { Category } from '../models/category';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css'],
  providers: [SearchByTitleService]
})
export class DetailedSearchComponent implements OnInit {

  /** Variables used to store the recipes**/
  recipes: Array<Recipe>;
  criterion: string;
  categoryId : string;

  constructor(
    private recipeListService: RecipeListService,
    private searchByTitleService: SearchByTitleService,
    private searchByCategoryService: SearchByCategoryService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {

    this.recipeListService.readAll().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  /**insert in array 'recipe' the recipes corresponding the criterion
  selected by the user**/
  showSearchResults(term : string): void {
    if (term != '')
    {
      if (this.criterion == 'Title')
      {
        this.findByTitle(term);
      }
      else if (this.criterion == 'Category')
      {
        this.findByCategory(term);
      }
      else if (this.criterion == 'Keyword')
      {
        // to implement
      }
    }
  }

  /** reset the search input box and show all the recipes **/
  resetSearchResults(): void {
      this.recipes = [];
      this.ngOnInit();
  }

  /**this method inserts in the array 'recipes' the recipes
    whose title corresponds to 'term' **/
  findByTitle(term: string): void {
    this.recipes = [];
    this.searchByTitleService.readSearchedRecipes(term).subscribe(recipes => {
        this.recipes = recipes;
    });
  }

  /**this method inserts in the array 'recipes' the recipes
    whose category name corresponds to 'term' **/
  findByCategory(term: string): void {

    let category : Category;

    this.categoryService.findByName(term).subscribe(categ => {
      category = categ[0];
      //this.categoryId = category._id;

      this.recipes = [];
      this.searchByCategoryService.readSearchedRecipes(category._id).subscribe(recipes => {
            this.recipes = recipes;
        });
    });
  }


}
