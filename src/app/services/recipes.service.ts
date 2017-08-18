import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe';
import {Http, Http as HTTP} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListResult} from './api/list-result.interface';

@Injectable()
export class RecipesService {

  // recipes: Recipe[] = [
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  //   {
  //     name: 'cheese cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a cheese cake',
  //     ingredients: [
  //       {name: 'cheese', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'cheese', 'desert']
  //   },
  //   {
  //     name: 'chocolate cake',
  //     category: 'dessert',
  //     serving: 8,
  //     time: 60,
  //     author: 'Gerry',
  //     description: 'how to make a chocolate cake',
  //     ingredients: [
  //       {name: 'chocolate', quantity: 40, unit: 'g'},
  //       {name: 'egg', quantity: 4, unit: ''}
  //     ],
  //     keywords: ['cake', 'chocolate', 'desert']
  //   },
  // ];

  // constructor() {}
  //
  // list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Recipe>> {
  //   const recipeResult = this.recipes.filter(function(recipe: Recipe) {
  //     return (search) ? recipe.name.toLowerCase().indexOf(search) !== -1 : true;
  //   });
  //
  //   const recipeResultPage = recipeResult.slice((page - 1) * limit, page * limit);
  //   return Observable.of({total: recipeResult.length, items: recipeResultPage}).delay(100);
  // }


 // private recipesUrl = 'http://localhost:3000/recipe';

  constructor(private http: Http) {
  }

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Recipe>> {
    let urlString = 'http://localhost:3000/recipe?';

    // const params = new URLSearchParams();
    // const params = new URLSearchParams(urlString);
    // console.log(params.toString());
    if (search) {
      // params.set('q', search);
      urlString = urlString.concat('q=' + search + '&');
    }
    if (page) {
     // params.set('page', String(page));
      urlString = urlString.concat('page=' + String(page) + '&');
    }
    if (limit) {
     // params.set('count', String(limit));
      urlString = urlString.concat('count=' + String(limit) + '&');
    }


    // console.log('q: ' + params.get('q') + ', page: ' + params.get('page') + ', count: ' + params.get('count'));
    // return this.http.get(this.recipesUrl, { search: params }).map(res => res.json());
    console.log(urlString);
    return this.http.get(urlString).map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
