import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Ingredient } from '../models/ingredient';


@Injectable()
export class IngredientService {

  constructor(private http: Http) {}

  readAll(): Observable<Ingredient[]> {
    return this.http
      .get('http://localhost:3000/ingredient')
      .map(response => response.json() as Ingredient[]);
  }
}