import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoggedService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  toggleLogin(): void {
    this._isLoggedIn.next(!this._isLoggedIn.value);
  }
}
