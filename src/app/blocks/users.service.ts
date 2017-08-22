import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {

  private usersUrl = 'api/users';
  private serverUrl = 'http://192.168.0.17:3000/users/login';  
  private headers = new Headers(
    {'Access-Control-Allow-Origin': 'http://localhost:4200'});

  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handlerError);
  }

  checkUser(term: string): Observable<User[]> {
    return this.http
    .get(`api/users/?name=${term}`)
    .map(response => response.json().data as User[]);
  }

  login(email, password) {
    return this.http
      .post(this.serverUrl, {username: email, password: password}, {headers: this.headers})
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handlerError);
  }

  private handlerError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
