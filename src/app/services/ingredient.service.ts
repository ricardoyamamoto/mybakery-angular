import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Ingredient } from '../models/ingredient';


@Injectable()
export class IngredientService {

  private ingredientUrl = 'http://localhost:3000/ingredient';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<Ingredient[]> {
    return this.http
      .get(this.ingredientUrl)
      .map(response => response.json() as Ingredient[]);
  }
}
