import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _login: LoginService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onLoginMyAuctions(data) {
    this._login.loginUser(data).subscribe(user => {
      this._router.navigate(['auction']);
      console.log(user);
    });
  }

}
