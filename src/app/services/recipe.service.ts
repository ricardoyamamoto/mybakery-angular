import { Recipe } from '../models/recipe';
import { Injectable } from '@angular/core';

import { Http, Headers, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JsonRecipe } from '../recipe/add-recipe.component/json-recipe';


@Injectable()
export class AddRecipeService {

  private recipeURL = 'http://localhost:3000/recipe';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  read(): Observable<Recipe[]> {
    return this.http
    .get(this.recipeURL)
    .map(response => response.json() as Recipe[]);
  }

  addNewRecipe(addRecipe: JsonRecipe): Observable<Recipe> {
    const toAdd = JSON.stringify(addRecipe);
    return this.http
      .post(this.recipeURL, toAdd, {headers: this.headers})
      .map(response => response.json() as Recipe);
  }

  getRecipe(id: string): Observable<Recipe> {
    const url = '${this.addRecipeURL}/${id}';
    return this.http
    .get(url)
    .map(response => response.json() as Recipe);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error ocuured', error);
    return Promise.reject(error.message || error);
   }
}

