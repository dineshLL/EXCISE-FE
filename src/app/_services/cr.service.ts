/**
 * Created by Amila on 4/26/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import Cr from '../_models/cr';

@Injectable()
export class CrService {
  token: any;
  actionUrl: any;
  headers: any;

  constructor(private http: Http) {
    this.actionUrl = 'http://localhost:8080/BLink_BE/api';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  loadOfficersIds() {
    return this.http.get(this.actionUrl + '/test').map(res => res.json());
  }

  loadOfficerInfo(officerId: string) {
    return this.http.get(this.actionUrl + '/test/' + officerId).map(res => res.json());
  }

  // done
  loadItems() {
    return this.http.get(this.actionUrl + '/items').map(res => res.json());
  }

  // done
  loadSubItems(itemCode: string) {
    return this.http.get(this.actionUrl + '/items/' + itemCode + '/subs').map(res => res.json());
  }

  addCr(crsObject: Cr) {
    console.log('called');

    // return this.http.post(this.actionUrl + , JSON.stringify(crsObject)).map(res => res.status);

    let body = JSON.stringify(crsObject);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.actionUrl + '/crs', body, options)
      .toPromise()
      .then((result) => result)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
