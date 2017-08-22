import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class RegistrationService {

  private usersUrl = 'api/users';
  private serverUrl = 'http://192.168.0.17:3000/users/register';
  private headers = new Headers(
    {'Access-Control-Allow-Origin': 'http://localhost:4200'});

  constructor(private http: Http) {}

  registration(email, name, city, login, pass1, pass2) {
    return this.http
      .post(this.serverUrl, {email: email, username: login, name: name,  city: city, password: pass1, telephone: '11111', password2: pass2}, {headers: this.headers})
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handlerError);
  }

  private handlerError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
