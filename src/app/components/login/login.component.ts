import { AuthenticationResponse } from './../../dto/authentication-response';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from './../../dto/login-dto';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = "Login"

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  login(loginDTO: LoginDTO): void {
    this.service.login(loginDTO).subscribe(
      (response: AuthenticationResponse) => {
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

}
