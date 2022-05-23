import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/models/login';
import { AuthService } from '../shared/services/auth-service';

@Component({
  selector: 'app-login',
  template: '',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showError: boolean = false;
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
      this.loginS.login(user).subscribe(
        () => {},
        err => this.showError = true,
        () => {});
    
  }

  control(control: string) {
    return this.loginForm.get(control) as AbstractControl;
  }
}
