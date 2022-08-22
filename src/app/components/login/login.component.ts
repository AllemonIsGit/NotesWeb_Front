import { AuthenticationResponse } from './../../dto/authentication-response';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginDTO } from './../../dto/login-dto';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    password: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  title: string = 'Login';

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(loginDTO: LoginDTO): void {
    this.service.login(loginDTO).subscribe(
      (response: AuthenticationResponse) => {
        localStorage.setItem('accessToken', response.token);
        if (localStorage.getItem('accessToken') !== 'undefined') {
          this.router.navigate(['/app']);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  onSubmit() {
    if (this.loginForm?.invalid) {
      return;
    }
    this.login(this.loginForm?.value);
  }
  onRegisterClick() {
    this.router.navigate(['/register'])
  }
}
