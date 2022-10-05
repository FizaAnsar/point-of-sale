import { Component, OnInit } from '@angular/core';
import { SignIn } from 'src/app/models/data-type';
import { UserService } from 'src/app/services/user.service';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import validateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private user:UserService,private fb:FormBuilder) { }
  emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  passwordRegex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

  ngOnInit(): void {
    this.user.reloadUser();
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
      password: new FormControl("", [Validators.required,Validators.pattern(this.passwordRegex)])
    }
     
    )
  }
  signIn(data:any):void{
    if(this.loginForm.valid){
      console.log(data);
      this.user.userSignin(data)
      this.loginForm.reset();

    }else{
      validateForm.validateAllFormFields(this.loginForm);
    }

    
  }
   // Hide And Show Password
type:string ="password";
isText:boolean = false;
eyeIcon :string = "fa-eye-slash"
hideshow(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon ="fa-eye":this.eyeIcon ="fa-eye-slash";
  this.isText ? this.type ="text":this.type ="password"
}



}
