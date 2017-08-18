import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class UserListService {

  constructor(private http: Http) {}

  readAll(): Observable<User[]> {
    return this.http
      .get('http://localhost:3000/user')
      .map(response => response.json() as User[]);
  }
}
