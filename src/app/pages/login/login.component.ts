import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../blocks/user';

import { UsersService } from '../../blocks/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(
    private router: Router,
    private usersService: UsersService ) { }

  getUsers(): void {
    this.usersService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
