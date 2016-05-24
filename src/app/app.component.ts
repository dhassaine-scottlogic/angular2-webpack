import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  template: require('./app.component.html')
})

export class AppComponent {
  public message: string = 'Hello World';
}
