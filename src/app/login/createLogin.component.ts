import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-creareLogin',
  templateUrl: './createLogin.component.html'
})
export class CreateLoginComponent implements OnInit {

  _loginService : LoginService
  constructor(loginService: LoginService) {
      this._loginService = loginService;
  }

  login : string = 'testexd';
  password : string = '4321';

  ngOnInit() {
  }

  criarLogin() {
    this._loginService.insertLogin(this.login,this.password)
  }
}
