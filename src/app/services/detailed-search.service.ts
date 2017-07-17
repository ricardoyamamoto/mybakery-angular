import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
import { Category } from '../models/category';

import { CategoryService } from '../services/category.service';

@Injectable()
export class DetailedSearchService {


  url: string;

  constructor(private http: Http,  
    private categoryService : CategoryService) {}

  readSearchedRecipes(term: string, criteria: string): Observable<Recipe[]> {
    
    if (criteria == "Title")
    {
      this.url = `http://localhost:3000/recipe-search/?q=${term}`;
    }
    /*
    else if (criteria == "Category")
    {
      // Get the array of the id all the categories that contain that word (with new api request)
      // or use the findByName from category-service
      // Then, for each id found, call the following url with parameter p corresponding to the
      // current id of category and 
      // look for the all the recipes that have that category id
      // Merge all these recipes in the same table. 
       this.url = `http://localhost:3000/recipe-search/?p=${term}`;
    }
    */

    // Move this outside the if when the other criteria work
    return this.http
        .get(this.url)
        .map(response => response.json() as Recipe[]);
    
  }

  // method to be used to get the id of the category name that user wants to search
  findCategoryIds(term: string): void {
    //var categories : Observable<Category[]>;
    //var categoryHttp : Http;
    // this.categoryUrl = `http://localhost:3000/category-search/?q=${term}`;
    // this.categories = this.http
    //   .get(this.categoryUrl)
    //   .map(response => response.json() as Category[]);
    // this.categories.subscribe(categories => {categoryArray = categories;});
    // //console.log(categories.elementAt(0));
    // categoryArray.forEach(element => {
    //   console.log(element.name);
    // });
    // return categoryArray;

    var category_fix : Category;
    
    this.categoryService.findByName(term).subscribe(categ => {category_fix = categ[0];});
    console.log(category_fix._id); // doesn't work
  }
}
