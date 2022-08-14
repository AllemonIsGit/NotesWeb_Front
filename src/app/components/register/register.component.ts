import { RegistrationService } from './../../services/registrationservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/dto/register-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Register';

  constructor(private service: RegistrationService) {}

  public registerUser(registerDTO: RegisterDTO): void {
    this.service.registerUser(registerDTO).subscribe(
    (response: void) => {
      console.log(registerDTO);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  }
  ngOnInit(): void {}
}
