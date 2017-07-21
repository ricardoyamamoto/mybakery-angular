import { Recipe } from '../models/recipe';
import { Injectable } from '@angular/core';

import { Http, Headers, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JsonRecipe } from '../recipe/json-recipe';


@Injectable()
export class RecipeService {

  private recipeURL = 'http://localhost:3000/recipe/';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  readAll(): Observable<Recipe[]> {
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
    return this.http
      .get(this.recipeURL + id)
      .map(response => response.json() as Recipe);
  }

  updateRecipe(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.recipeURL + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error ocuured', error);
    return Promise.reject(error.message || error);
   }
}

