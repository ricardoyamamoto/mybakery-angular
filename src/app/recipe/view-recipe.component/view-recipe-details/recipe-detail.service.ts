import { Recipe } from './../recipe-service';
import { ViewRecipe } from './../viewrecipe';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RecipeDetailService {

constructor(private http: Http) {  this.http = http; }





 getRecipe(_id: string): Observable<ViewRecipe[]> {
      const url = 'http://localhost:3000/recipe/' + _id;
      return this.http
      .get(url)
      .map(response => response.json() as ViewRecipe[]);
    }



      // viewRecipe(id: string): Observable<ViewRecipe[]> {
      //    return this.http
      //    .get('/recipe/' + _id)
      //    .map(response => response.json() as ViewRecipe);
      //  }

}
