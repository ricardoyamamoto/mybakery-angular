import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Unit } from '../models/unit';

@Injectable()
export class UnitService {

  constructor(private http: Http) {}

  readAll(): Observable<Unit[]> {
    return this.http
      .get('http://localhost:3000/unit')
      .map(response => response.json() as Unit[]);
  }
}
