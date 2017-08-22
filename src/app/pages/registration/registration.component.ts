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

import { RegistrationService } from '../../blocks/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit, AfterViewInit {
  @ViewChild('errorPassModal') modal: any;
  public email: string;

  constructor(
    private router: Router,
    private registrationService: RegistrationService) {}

  ngAfterViewInit() {}

  registration(email, name, city, login, pass1, pass2) {
    if (pass1 === pass2) {
      console.log(pass1, pass2);      
      this.registrationService.registration(email, name, city, login, pass1, pass2)
      .then(
        response => this.router.navigate(['/home']),
        error => this.modal.show()
      );
    } else {
      console.log(email, name, city, login, pass1, pass2);
      this.modal.show();
    }
  }

  ngOnInit() {
  }

}
