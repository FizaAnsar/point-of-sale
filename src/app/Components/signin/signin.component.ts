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

  ngOnInit(): void {
    this.user.reloadUser();
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  signIn(data:any):void{
    if(this.loginForm.valid){
      // console.log(data);
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
