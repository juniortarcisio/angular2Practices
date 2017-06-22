import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-creareLogin',
  templateUrl: './createLogin.component.html'
})
export class CreateLoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login : string = 'testexd';
  password : string = '4321';

  ngOnInit() {
  }

  criarLogin() {
    this.loginService.insertLogin(this.login,this.password)
  }
}
