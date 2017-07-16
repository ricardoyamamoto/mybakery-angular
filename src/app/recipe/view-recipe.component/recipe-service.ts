import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Http, Headers, RequestOptions, Response} from '@angular/http';
export class Recipe {
  constructor(public rname: string, public id: number) { }
}


@Injectable()
export class RecipeService {
  constructor(private http: Http) {}


getRecipes():Observable<Recipe[]>  {
    return this.http.get('array.json')
      .map(data => data.json());
  }

}


