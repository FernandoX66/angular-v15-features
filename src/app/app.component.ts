import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";
import {LoggedService} from "./services/logged.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>App Component</h1>
    <router-outlet></router-outlet>
    <button routerLink="weather/temperature">Go to weather component</button>
    <button routerLink="time">Go to time component</button>
    <button routerLink="news">Go to news component</button>
    <button (click)="toggleLogin()">Toggle login</button>
  `,
  styles: [`
    button {
      font-family: inherit;
      margin-right: 10px;
      padding: 7px 15px;
    }
  `],
})
export class AppComponent {
  constructor(private loggedService: LoggedService) {}

  toggleLogin(): void {
    this.loggedService.toggleLogin();
  }
}
