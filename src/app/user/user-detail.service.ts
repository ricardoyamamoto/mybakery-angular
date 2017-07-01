import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserDetailService {

  constructor(private http: Http) {}

  read(): Observable<User[]> {
    return this.http
      .get('http://localhost:3000/user/')
      .map(response => response.json() as User[]);
  }
}
