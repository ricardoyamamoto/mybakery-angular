import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:3000/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  read(): Observable<User[]> {
    return this.http
      .get('http://localhost:3000/user')
      .map(response => response.json() as User[]);
  }

  addNewUser(user: User): Observable<User> {
    const toAdd = JSON.stringify({firstName: user.firstName,
    lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      userId: user.userId ,
      password: user.password,
      status: 'Active'})
    return this.http
       .post('http://localhost:3000/user', toAdd)
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
