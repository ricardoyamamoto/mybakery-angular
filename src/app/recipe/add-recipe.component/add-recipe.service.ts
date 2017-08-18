import { AddRecipe } from './addrecipe';
import { Injectable } from '@angular/core';

import { Http, Headers, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class AddRecipeService {

private addRecipeURL = 'http://localhost:3000/recipe';
private headers = new Headers ({'Content-Type': 'application/json'});

constructor(private http: Http) { }

read(): Observable<AddRecipe[]> {
  return this.http
  .get('http://localhost:3000/recipe')
  .map(response => response.json() as AddRecipe[]);
}

addNewRecipe(addRecipe: AddRecipe): Observable<AddRecipe> {
  const toAdd = JSON.stringify(addRecipe);
  const params = 'json=' + toAdd;
  console.log(params);
  return this.http
    .post(this.addRecipeURL, toAdd, {headers: this.headers})
    .map(response => response.json() as AddRecipe);
}
    getRecipe(id: string): Observable<AddRecipe> {
      const url = '${this.addRecipeURL}/${id}';
      return this.http
      .get(url)
      .map(response => response.json() as AddRecipe);
    }

    private handleError(error: any): Promise<any> {
      console.error('An Error ocuured', error);
      return Promise.reject(error.message || error);
     }
}

