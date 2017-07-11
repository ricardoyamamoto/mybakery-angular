import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ListResult} from './api/list-result.interface';
import {Ingredient} from '../classes/ingredient';

@Injectable()
export class IngredientService {

  ingredients: Ingredient[] = [
    {
      name: 'chocolate',
      quantity: 200,
      unit: 'kg',
    },
    {
      name: 'cake flour',
      quantity: 500,
      unit: 'kg',
    },
    {
      name: 'coconut oil',
      quantity: 1000,
      unit: 'g',
    },
    {
      name: 'egg',
      quantity: 80,
      unit: '',
    },
    {
      name: 'bread flour',
      quantity: 200,
      unit: 'kg',
    }
    ];

  constructor() {}

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Ingredient>> {
    const recipeResult = this.ingredients.filter(function(ingredient: Ingredient) {
      return (search) ? ingredient.name.toLowerCase().indexOf(search) !== -1 : true;
    });

    const recipeResultPage = recipeResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: recipeResult.length, items: recipeResultPage}).delay(100);
  }

}
