import { Recipe } from './../recipe-service';
import { ViewRecipe } from './../viewrecipe';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RecipeDetailService {

constructor(private http: Http) { }

read():Observable<ViewRecipe[]>{
  return this.http
  .get('http://localhost:3000/recipe')
  .map(response => response.json() as ViewRecipe[]);
}
}
