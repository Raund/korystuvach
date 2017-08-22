import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { User } from '../../blocks/user';

import { UsersService } from '../../blocks/users.service';
import { AuthenticationService } from '../../blocks/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('errorPassModal') modal: any;
  users: User[];
  chekedUser: Observable<User[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private router: Router,
    private usersService: UsersService,
    private authenticationService: AuthenticationService  ) { }

  checkUser(term: string): void {
    this.searchTerms.next(term);
  }

  getUsers(): void {
    this.usersService.getUsers().then(users => this.users = users);
  }

  ngAfterViewInit() {}

  login(user, password): void {
    this.usersService.login(user, password)
    .then(
      response => this.router.navigate(['/home']),
      error => this.modal.show()
    );
  }

  ngOnInit(): void {
      this.chekedUser = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.usersService.checkUser(term)
        : Observable.of<User[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

}
