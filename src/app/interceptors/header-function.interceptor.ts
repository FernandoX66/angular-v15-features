import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export const headerFunctionInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const modifiedRequest = req.clone({
    headers: req.headers.append('Some-Header', 'some-value')
  });
  return next(modifiedRequest);
};
