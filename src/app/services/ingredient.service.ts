import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { Ingredient } from '../models/ingredient';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientService {

  private ingredientUrl = 'http://localhost:3000/ingredient';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getData() {
    return this.http.get('http://localhost:3000/ingredient')
      .map((response: Response) => response.json());
  }

  findById(id: string) {
    return this.http.get(`http://localhost:3000/ingredient/${id}`)
      .map(response => response.json() as Ingredient);
  }

  readUnits() {

    return this.http.get('http://localhost:3000/unit/')
      .map((response: Response) => response.json());
  }

  sendData(myIngredient: Ingredient) {
    const body = JSON.stringify(myIngredient);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/ingredient', body, {
      headers: headers
    }).map((data: Response) => data.json());

  }

  editData(myIngredient: Ingredient) {

    const body = JSON.stringify(myIngredient);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/ingredient/${myIngredient._id}`, body, {
      headers: headers
    }).map((data: Response) => data.json());

  }

  deleteData(myIngredient: Ingredient) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`http://localhost:3000/ingredient/${myIngredient._id}`,
      {headers: headers}).map((data: Response) => data.json());

  }

  getUsedIngredient() {
    return this.http.get('http://localhost:3000/recipe/all')
      .map((response: Response) => response.json());
  }
}
