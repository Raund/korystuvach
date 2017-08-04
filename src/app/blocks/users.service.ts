import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {

  private usersUrl = 'api/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handlerError);
  }

  private handlerError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
