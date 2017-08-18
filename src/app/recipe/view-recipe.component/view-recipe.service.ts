import { ViewRecipe } from './viewrecipe';
import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewRecipeService {

  private updateRecipeURL = 'http://localhost:3000/recipe';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<ViewRecipe[]> {
    return this.http
      .get('http://localhost:3000/recipe')
      .map(response => response.json() as ViewRecipe[]);
  }

  getRecipe(id: string): Observable<ViewRecipe> {
      const url = '${this.updateRecipeURL}/${id}';
      return this.http
      .get(url)
      .map(response => response.json() as ViewRecipe);
    }
    editRecipe(editRecipe: ViewRecipe) {
      const toupdate = JSON.stringify(editRecipe);
  const params = 'json=' + toupdate;
  console.log(params);
  return this.http
    .put(this.updateRecipeURL, toupdate, {headers: this.headers})
    .map(response => response.json() as ViewRecipe);
    }

}
