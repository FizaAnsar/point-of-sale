import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn, SignUp } from '../models/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:SignUp){
  this.http.post(`http://localhost:3000/users`,
   data,
   {observe:"response"}
   ).subscribe((result)=>{
    // localStorage.setItem('user',JSON.stringify(result.body))
    this.router.navigate(['signin'])
     console.warn(result)
   })

  }
  reloadUser(){
    // this function indicate that if user login it does not go back to signin and signup page.user will stay on dashboard(main) page
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['dashboard'])
    }

  }

  userSignin(data:SignIn){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password} `,
    {observe:"response"}
    ).subscribe((result:any)=>{
      console.warn(result)

      if(result && result.body && result.body.length){
        console.warn("User Logged In")
        
        localStorage.setItem('user',JSON.stringify(result.body))
       this.router.navigate(['dashboard'])
        
      }else{
        console.warn(" Log In Failed");
        alert("Username or password incorrect")
                

      }
    //  this.isUserLoggedIn.next(true)
    //  localStorage.setItem('user',JSON.stringify(result.body))
    //  this.router.navigate(['dashboard'])
    })
  }
//  private loginUrl ="http://192.168.10.215:8080/handi-ear/api/user/login?username=admin&password=admin"

//   loginUser(user:any){
//     return this.http.post<any>(this.loginUrl,user)
    
//   }
}
