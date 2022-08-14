import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dto/register-dto';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private defaultUrl: string = "http://localhost:8080/api/v1/auth"

  constructor(private http: HttpClient) { }

  public registerUser(registerDTO: RegisterDTO): Observable<void> {
    console.warn(registerDTO)
    return this.http.post<void>(`${this.defaultUrl}/register`, registerDTO)
  }
}
