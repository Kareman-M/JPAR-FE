import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginModel } from '../LoginModel';
import { AuthenticatedUserModel } from '../AuthenticatedUserModel';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm!:FormGroup;
  
  constructor(private formBuilder: FormBuilder , private authService:AuthService ){}
  
  ngOnInit(): void {
    this.buildLoginFormControles()
  }
  
  signIn() {
    var loginModel:LoginModel = 
    {
      Email:this.loginForm.get("Email")?.value,
      Password:this.loginForm.get("Password")?.value
    };

    this.authService.signIn(loginModel).subscribe((res :any )=> {
      console.log(res);
      var result = res?.result ;
      Object.keys(result).map((key:string)=> {
        localStorage.setItem(key, result[key])
      })
    });
  }

  buildLoginFormControles() {
    this.loginForm = this.formBuilder.group({
      Email:new FormControl('',[Validators.required, Validators.email]),
      Password:new FormControl('',[Validators.required])
    });
  }
}
