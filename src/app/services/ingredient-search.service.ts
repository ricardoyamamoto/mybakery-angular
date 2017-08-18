import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ingredient } from '../models/ingredient';

@Injectable()
export class IngredientSearchService {

  url: string;

  constructor(private http: Http) {}

  readSearchedIngredients(term: string, page: number): Observable<Ingredient[]> {

    this.url = `http://localhost:3000/ingredient-search/?q=${term}&page=${page}`;

    return this.http
          .get(this.url)
          .map(response => response.json() as Ingredient[]);   
  }
}