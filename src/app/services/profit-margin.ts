import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProfitMargin } from '../models/profit-margin';

@Injectable()
export class ProfitMarginService {

  constructor(private http: Http) {}


findById() {
  debugger;
    return this.http.get(`http://localhost:3000/configuration/1`)
      .map(response => response.json() as ProfitMargin);

  }
editData(myIngredient: ProfitMargin) {

    const body = JSON.stringify(myIngredient);
    const headers = new Headers();
 
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/configuration/1`, body, {
      headers: headers
    }).map((data: Response) => data.json());

  }
}