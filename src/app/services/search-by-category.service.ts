import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';

@Injectable()
export class SearchByCategoryService {

  url: string;

  constructor(private http: Http) {}

  // to return the name of the category corresponding to the input id
  readSearchedRecipes(categoryId: string): Observable<Recipe[]> {

    this.url = `http://localhost:3000/search-by-category/?q=${categoryId}`;
    console.log(this.url);
    return this.http
        .get(this.url)
        .map(response => response.json() as Recipe[]);

  }
}
