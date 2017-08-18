import { ViewRecipe } from './../view-recipe.component/view-recipe-details/viewrecipe';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EditRecipeService {

  constructor(private http: Http) { }




  getRecipe(id: string): Observable<ViewRecipe[]> {
      const url = 'http://localhost:3000/recipe/' + id;
      return this.http
      .get(url)
      .map(response => response.json() as ViewRecipe[]);
    }



    updateRecipe(id, data) {
      return new Promise((resolve, reject) => {
        const url = 'http://localhost:3000/recipe/';
        this.http.put(url + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }
}
