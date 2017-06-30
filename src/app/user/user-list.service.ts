import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserListService {

  constructor(private http: Http) {}

  readAll(): Observable<User[]> {
    return this.http
      .get('/api/user')
      .map(response => response.json() as User[]);
  }
}
