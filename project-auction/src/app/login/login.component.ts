import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _login: LoginService) { }

  ngOnInit() {
  }

  onLoginMyAuctions(data) {
    this._login.loginUser(data).subscribe(user => {
      console.log(user);
    });
  }

}
