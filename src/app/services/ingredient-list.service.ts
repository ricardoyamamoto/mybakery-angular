import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ingredient } from '../models/ingredient';

@Injectable()
export class IngredientListService {

  constructor(private http: Http) {}

  readAll(): Observable<Ingredient[]> {
    return this.http
      .get('http://localhost:3000/ingredient')
      .map(response => response.json() as Ingredient[]);
  }



}
