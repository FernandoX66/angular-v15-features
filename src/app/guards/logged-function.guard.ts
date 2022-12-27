import {CanActivateFn} from "@angular/router";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {LoggedService} from "../services/logged.service";

export const loggedFunctionGuard: CanActivateFn = (): Observable<boolean> => {
  const loggedService = inject(LoggedService);
  return loggedService.isLoggedIn();
};
