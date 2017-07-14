import { ViewRecipe } from './viewrecipe';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewRecipeService {

  constructor(private http: Http) {}

  readAll(): Observable<ViewRecipe[]> {
    return this.http
      .get('http://localhost:3000/recipe')
      .map(response => response.json() as ViewRecipe[]);
  }
}
