import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:3000/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  read(): Observable<User[]> {
    return this.http
      .get(this.usersUrl)
      .map(response => response.json() as User[]);
  }

  readAll(): Observable<User[]> {
    return this.http
      .get(this.usersUrl)
      .map(response => response.json() as User[]);
  }

  addNewUser(user: User): Observable<User> {
    const userJson = JSON.stringify(user);
    return this.http
       .post(this.usersUrl, userJson, {headers: this.headers})
       .map(response => response.json() as User);
  }

  getUser(id: string): Observable<User> {
    const url = '${this.usersUrl}/${id}';
    return this.http
      .get(url)
      .map(response => response.json() as User);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
