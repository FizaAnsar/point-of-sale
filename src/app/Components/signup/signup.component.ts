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
  integerRegex=/^\d+$/
  emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  passwordRegex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  phoneRegex=/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
  constructor(private user:UserService,private fb:FormBuilder) { }
 
  ngOnInit():void{
    this.user.reloadUser();
    this.signUpForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern(this.phoneRegex)]),
      email: new FormControl("", [Validators.required,Validators.pattern(this.emailRegex)]),
      password: new FormControl("", [Validators.required,Validators.pattern(this.passwordRegex)]),
    })
    // this. signUpForm = this.fb.group({
    //   name:['',Validators.required],
    //   phone:['',Validators.required],
    //   email:['',Validators.required],
    //   password:['',Validators.required],
    // })
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
