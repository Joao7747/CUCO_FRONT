import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: Login){
    return this.http.post<Result<any>>("http://localhost:3000/api/v1/login/autenticar/", user);
  }
}
