import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginService } from './services/login.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateLoginComponent } from './login/createLogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
