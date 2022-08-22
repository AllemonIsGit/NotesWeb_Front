import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteDto } from './../dto/note-dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private defaultURL: string = 'http://localhost:8080/api/v1/notes';

  constructor(private http: HttpClient) { }

  create(note: NoteDto): Observable<void> {
    var token: string = `Bearer ${localStorage.getItem("accessToken") ?? ""}`
    var header: HttpHeaders = new HttpHeaders({ "Authorization": token})
    return this.http.post<void>(this.defaultURL, note, { headers: header })
  }

  getAll(): Observable<NoteDto[]> {
    var token: string = `Bearer ${localStorage.getItem("accessToken") ?? ""}`
    var header: HttpHeaders = new HttpHeaders({ "Authorization": token})
      return this.http.get<NoteDto[]>(this.defaultURL, {headers: header})
  }
}
