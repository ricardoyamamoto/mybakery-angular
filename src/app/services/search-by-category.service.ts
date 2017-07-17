import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';

@Injectable()
export class SearchByCategoryService {

  url: string;

  constructor(private http: Http) {}

  readSearchedRecipes(categoryId: string): Observable<Recipe[]> {
    
    // Get the array of the id all the categories that contain that word (with new api request)
      // or use the findByName from category-service
      // Then, for each id found, call the following url with parameter p corresponding to the
      // current id of category and 
      // look for the all the recipes that have that category id
      // Merge all these recipes in the same table. 
    //this.url = `http://localhost:3000/recipe-search/?p=${term}`;

    this.url = `http://localhost:3000/search-by-category/?q=${categoryId}`;

    return this.http
        .get(this.url)
        .map(response => response.json() as Recipe[]);
    
  }
}