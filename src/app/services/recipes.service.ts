import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe';
import {Http, Http as HTTP} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListResult} from './api/list-result.interface';

@Injectable()
export class RecipesService {

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
