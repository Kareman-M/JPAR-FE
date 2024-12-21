import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './LoginModel';
import { Base_URL } from '../Shared/Models/Const';
import { ApplicantRegisterModel } from './ApplicantRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  signIn(loginModel:LoginModel){
    return this.httpClient.post(`${Base_URL}/User/Login`,loginModel);
  }

  register(applicantRegister:ApplicantRegisterModel){
    return this.httpClient.post(`${Base_URL}/User/Register`,applicantRegister);
  }

}
