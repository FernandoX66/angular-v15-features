import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoggedService} from "../services/logged.service";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoggedGuard implements CanActivate {
  constructor(private loggedService: LoggedService) {}

  canActivate(): Observable<boolean> {
    return this.loggedService.isLoggedIn();
  }
}

