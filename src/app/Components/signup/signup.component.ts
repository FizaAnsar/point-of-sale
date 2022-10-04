import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SignUp } from 'src/app/models/data-type';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import validateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private user:UserService,private fb:FormBuilder) { }
 
  ngOnInit():void{
    this.user.reloadUser();
    this. signUpForm = this.fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  signUp(data:SignUp):void{
    if(this.signUpForm.valid){
      // console.warn(data);
      this.user.userSignUp(data)
      this.signUpForm.reset();
    }
    else{
      validateForm.validateAllFormFields(this.signUpForm);
    }
   
   }
   // Hide And Show Password
   type: string = "password";
   isText: boolean = false;
   eyeIcon: string = "fa-eye-slash"
   hideshow() {
     this.isText = !this.isText;
     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
     this.isText ? this.type = "text" : this.type = "password"
   }
 

  


}
