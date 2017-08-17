import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';

@Injectable()
export class CheckIngredientUseService {

  url: string;

  constructor(private http: Http) {}

  // to return the list of the recipes that contain the ingredient 
  // correspondingo to a given id
  readRecipesWithGivenIngredientId(ingredientId: string): Observable<Recipe[]> {

    this.url = `http://localhost:3000/check-ingredient-use/?q=${ingredientId}`;

    return this.http
        .get(this.url)
        .map(response => response.json() as Recipe[]);
  }
}