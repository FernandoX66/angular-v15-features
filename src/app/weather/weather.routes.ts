import {Routes} from "@angular/router";
import WeatherComponent from "./weather.component";
import {TemperatureComponent} from "../temperature/temperature.component";

export default [
  {
    path: '',
    component: WeatherComponent,
    children: [
      {
        path: 'temperature',
        component: TemperatureComponent
      }
    ]
  }
] as Routes;
