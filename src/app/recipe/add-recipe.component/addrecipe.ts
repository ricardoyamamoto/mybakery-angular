import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()


export class AddRecipe {
     recipeName: string;
     category: string;
     numberOfServings: Number;
     preparationTime: Number;
     cookingTime: string;
     author: string;

}
