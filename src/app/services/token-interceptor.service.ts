
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector} from '@angular/core';
import {  Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userService = this.inject.get(UserService)
  
    let auth_token = req.clone({
      setHeaders: {
        Authorization: 'bearer' + userService.getToken()
      }
    })
    return next.handle(auth_token);
  }
}
