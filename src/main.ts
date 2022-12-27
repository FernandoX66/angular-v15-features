/* platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {headerFunctionInterceptor} from "./app/interceptors/header-function.interceptor";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideHttpClient(withInterceptors([headerFunctionInterceptor]))],
}).catch(err => console.error(err));
