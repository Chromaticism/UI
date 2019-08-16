import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _authService : AuthService) { }

  intercept(req, next){

    if(this._authService.checkLogin()){
      let reqClone = req.clone({
        headers: new HttpHeaders().set("authtoken", this._authService.checkLogin())
      });
  
      return next.handle(reqClone);
    }
    else{
      return next.handle(req);
    }
    

  }
}
