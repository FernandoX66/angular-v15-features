import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TemperatureComponent} from "../temperature/temperature.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, TemperatureComponent, RouterOutlet],
  template: `
    <h2 *ngIf="showTitle">Weather Component</h2>
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export default class WeatherComponent {
  showTitle = true;
}
