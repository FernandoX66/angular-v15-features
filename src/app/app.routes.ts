import { Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import {loggedFunctionGuard} from "./guards/logged-function.guard";

export const appRoutes: Routes = [
  {
    path: 'weather',
    title: 'Angular V15 | Weather',
    loadChildren: () => import('./weather/weather.routes'),
  },
  {
    path: 'time',
    title: 'Angular V15 | Time',
    loadComponent: () => import('./time/time.component').then(c => c.TimeComponent),
    canActivate: [loggedFunctionGuard],
  },
  {
    path: 'news',
    title: 'Angular V15 | News',
    component: NewsComponent,
  },
];
