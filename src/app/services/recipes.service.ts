import { Injectable } from '@angular/core';
import {Recipe} from '../models/recipe';
import { Http as HTTP} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListResult} from './api/list-result.interface';

@Injectable()
export class RecipesService {

  recipes: Recipe[] = [];/*
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
    {
      name: 'cheese cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a cheese cake',
      ingredients: [
        {name: 'cheese', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'cheese', 'desert']
    },
    {
      name: 'chocolate cake',
      category: 'dessert',
      serving: 8,
      time: 60,
      author: 'Gerry',
      description: 'how to make a chocolate cake',
      ingredients: [
        {name: 'chocolate', quantity: 40, unit: 'g'},
        {name: 'egg', quantity: 4, unit: ''}
      ],
      keywords: ['cake', 'chocolate', 'desert']
    },
  ];*/

  // getRecipes(): Promise<Recipe[]> {
  //   return Promise.resolve(this.recipes);
  // }

  constructor() {}

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Recipe>> {
    const recipeResult = this.recipes.filter(function(recipe: Recipe) {
      return (search) ? recipe.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    const recipeResultPage = recipeResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: recipeResult.length, items: recipeResultPage}).delay(100);
  }

}
