import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { MyComponent2Component } from './my-component2/my-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyComponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
