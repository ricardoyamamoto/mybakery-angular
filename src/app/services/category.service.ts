import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '../models/category';

@Injectable()
export class CategoryService {

  private categoryUrl = 'http://localhost:3000/category';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<Category[]> {
    return this.http
      .get(this.categoryUrl)
      .map(response => response.json() as Category[]);
  }

  addNewCategory(category: Category): Observable<Category> {
    const categoryJson = JSON.stringify(category);
    return this.http
      .post(this.categoryUrl, categoryJson, { headers: this.headers })
      .map(response => response.json() as Category);
  }

  findByName(name: string): Observable<Category> {
    const url = `${this.categoryUrl}/?name=${name}`;
    console.log(url);
    return this.http
      .get(url)
      .map(response => response.json() as Category);
  }

  getCategory(id: string): Observable<Category> {
    const url = '${this.categoryUrl}/${id}';
    return this.http
      .get(url)
      .map(response => response.json() as Category);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
