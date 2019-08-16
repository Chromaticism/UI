import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $auth = new BehaviorSubject(this.checkLogin());


  checkLogin(){
    return localStorage.getItem("token");
  }

  constructor(private _router : Router, private _http : HttpClient) { }

  login(crendentials){

    this._http.post("http://localhost:8080/authenticate", crendentials).subscribe((data: any) => {

      if(data.isLoggedIn){  

        localStorage.setItem("token" , data.token);
  
        this.$auth.next(this.checkLogin());
        
        this._router.navigate(['/welcome']);
  
      }
      else{
       
        alert(data.err);
        return false;
      }


    })
    
    
  }

  register(userForm){

    this._http.post("http://localhost:8080/register", userForm).subscribe((data: any) => {

      if(data.success){  
  
        this._router.navigate(['/login']);
  
      }else{
        alert(data.msg);
        return false;
      }


    })

  }

  logout(){
    localStorage.removeItem("token");
    this.$auth.next(this.checkLogin());
    this._router.navigate(['/login']);
    
  }

}
