import { AuthenticationResponse } from './../dto/authentication-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDTO } from './../dto/login-dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private defaultURL: string = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<AuthenticationResponse> {

    return this.http.post<AuthenticationResponse>(this.defaultURL, loginDTO);
  }
}
