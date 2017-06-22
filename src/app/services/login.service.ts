import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  logins : Array<Login>;

  constructor() { 
    this.logins = [ 
      { login : 'TARCISIO', password: '123123'},
      { login : 'JUNIOR', password: '321321'},
      { login : 'TESTE', password: '123456'}
    ];
  }

  getLogins() : Login[] {
    return this.logins;
  }

  existsLogin(login, password) : boolean {
    for (let index = 0; index < this.logins.length; index++) {
      let element = this.logins[index];
      if (element.login == login && element.password == password)
        return true;
    }
    return false;
  }

  insertLogin(loginx : string, passwordx : string) {
    let newLogin = new Login();
    alert(loginx);
    newLogin.login = loginx;
    newLogin.password = passwordx;
    this.logins.push(newLogin);
  }  
}

export class Login {
  login : string
  password: string
}