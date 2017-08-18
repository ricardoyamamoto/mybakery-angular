import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';

@Injectable()
export class SearchByTitleService {


  url: string;

  constructor(private http: Http) {}

  readSearchedRecipes(term: string): Observable<Recipe[]> {

    this.url = `http://localhost:3000/search-by-title/?q=${term}`;

    return this.http
        .get(this.url)
        .map(response => response.json() as Recipe[]);
    
  }
}
