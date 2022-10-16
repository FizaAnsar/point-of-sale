
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector} from '@angular/core';
import {  Observable } from 'rxjs';
import { UserService } from './user.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    let userService = this.inject.get(UserService)
    const token = userService.getToken()
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
];

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor{
//   constructor(private inject: Injector) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let userService = this.inject.get(UserService)
  
//     let auth_token = req.clone({
//       setHeaders: {
//         Authorization: 'bearer' + userService.getToken()
//       }
//     })
//     return next.handle(auth_token);
//   }
// }
