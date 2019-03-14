import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfNotificationService } from '@totvs/thf-ui';

import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private thfNotificationService: ThfNotificationService) { }

  ngOnInit() {
  }

  onLoginSubmit(event) {
    this.loginService.loginUser(event)
    .subscribe(() => {
      this.router.navigate(['auction']);
      }, err => this.thfNotificationService.error(err)
    );
  }
}
