import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <ul class = "nav navbar-nav navbar-default">
  <li>
 <a routerLink = "/studentdata">student</a>
 </li>
 <li>
 <a routerLink ="/teacherdata">teacher</a>
 </li>
 <li>
 <a routerLink ="/sidekicks">sidekicks</a>
 </li>
 </ul>
 <router-outlet></router-outlet>
  
  `,
})
export class AppComponent  { name = 'Angular'; }
