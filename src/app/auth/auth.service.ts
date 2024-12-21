import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './LoginModel';
import { Base_URL } from '../Shared/Models/Const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  signIn(loginModel:LoginModel){
    return this.httpClient.post(`${Base_URL}/User/Login`,loginModel);
  }

}
