import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { Ingredient } from '../models/ingredient';
import 'rxjs/add/operator/map';
import {ConversionJSON, ConversionRecord} from '../models/conversion-table';

@Injectable()
export class ConversionTableService {

  private conversionUrl = 'http://localhost:3000/conversion-table/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  find(ingredient: string) {
    return this.http.get(`http://localhost:3000/conversion-table/${ingredient}`)
      .map((response: Response) => response.json());
  }


  addConversion(conversionRecord: ConversionJSON) {
    const body = JSON.stringify(conversionRecord);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.conversionUrl, body, {
      headers: headers
    }).map((data: Response) => data.json());

  }

  updateConversion(id: string, conversionRecord: ConversionJSON) {
    const body = JSON.stringify(conversionRecord);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/conversion-table/${id}`, body, {
      headers: headers
    }).map((data: Response) => data.json());
  }
}
