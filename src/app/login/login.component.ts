import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/models/login';
import { AuthService } from '../shared/services/auth-service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private loginS: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      user: [null],
      password: [null]
    });
  }


  autenticar(){
    let user = {} as Login;
    user.email = this.control("user").value;
    user.senha = this.control("password").value;
    this.loginS.login(user).subscribe();
    this.router.navigate(['']);
  }

  control(control: string) {
    return this.loginForm.get(control) as AbstractControl;
  }
}
