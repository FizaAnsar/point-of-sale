import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn, SignUp } from '../models/data-type';
import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  responsedata: any;
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post(`http://localhost:3000/users`,
      data,
      { observe: "response" }
    ).subscribe((result) => {
      // localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['signin'])
      console.warn(result)
    })

  }
  reloadUser() {
    // this function indicate that if user login it does not go back to signin and signup page.user will stay on dashboard(main) page
    if (localStorage.getItem('token')) {
      this.isUserLoggedIn.next(true)
      this.router.navigate(['dashboard'])
    }

  }

  deleteUser() {
    localStorage.clear();
  }

  userSignIn(data: SignIn) {
    this.http.get(`http://192.168.10.215:8080/handi-ear/api/user/login?username=${data.username}&password=${data.password}`)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.responsedata = res;
          localStorage.setItem('token', this.responsedata.auth_token);
          localStorage.setItem('user',JSON.stringify(res));
          // this.isUserLoggedIn.next(true);
          this.router.navigate(['dashboard'])



        },
        error: (err) => {
          console.log(err.name);
          alert(err.error)
          alert(err.name)
        }
      })
  }
  getToken() {
    localStorage.getItem('token') || '';
  }
 
}

