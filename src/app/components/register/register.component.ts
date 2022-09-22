import { Router } from '@angular/router';
import { RegistrationService } from './../../services/registrationservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/dto/register-dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.email,
      Validators.required
    ]),
    username: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    password: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    rePassword: new FormControl(null, [
      Validators.minLength(5),
      Validators.required
    ])
  });
  
  name: string = 'Register';

  constructor(private service: RegistrationService, private router: Router) {}

  ngOnInit(): void {}

  public registerUser(registerDTO: RegisterDTO): void {
    this.service.registerUser(registerDTO).subscribe(
      (response: void) => {
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return
    }
    this.registerUser(this.registerForm.value)
    this.router.navigate([''])
  }

  onBackToLogin() {
    this.router.navigate([''])
  }
}
