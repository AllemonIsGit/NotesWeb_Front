import { Page } from './../dto/page-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteDto } from './../dto/note-dto';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private defaultURL: string = 'http://localhost:8080/api/v1/notes';
  private selectedNoteCopy: NoteDto = {}

  constructor(private http: HttpClient) { }

  create(note: NoteDto): Observable<void> {
    var header: HttpHeaders = this.fetchTokenHeader()
    return this.http.post<void>(this.defaultURL, note, { headers: header })
  }

  update(note: NoteDto): Observable<void> {
    var header: HttpHeaders = this.fetchTokenHeader()
    return this.http.put<void>(`${this.defaultURL}/${note.id}`, note, { headers: header })
  }

  getAll(): Observable<NoteDto[]> {
    var header: HttpHeaders = this.fetchTokenHeader()
      return this.http.get<NoteDto[]>(this.defaultURL, {headers: header})
  }

  getPage(page: number, size: number): Observable<Page> {
    var header: HttpHeaders = this.fetchTokenHeader()
    return this.http.get<Page>(this.defaultURL + `?page=${page}&size=${size}`, {headers: header})
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.defaultURL + `/${id}`, {headers: this.fetchTokenHeader()})
  }

  private fetchTokenHeader(): HttpHeaders {
    var token: string = `Bearer ${localStorage.getItem("accessToken") ?? ""}`
    var header: HttpHeaders = new HttpHeaders({ "Authorization": token})
    return header
  }

  getSelectedNoteCopy() {
    return this.selectedNoteCopy
  }

  setSelectedNoteCopy(noteDto: NoteDto) {
    this.copyNote(noteDto, this.selectedNoteCopy)
  }

  private copyNote(from: NoteDto, to: NoteDto) {
    to.content = from.content
    to.id = from.id
    to.title = from.title
    to.owner = from.owner
  }

  compareNotes(from: NoteDto, to: NoteDto) {
    if ((to.content = to.content) &&
        (to.id = from.id) &&
        (to.title = from.title) &&
        (to.owner = from.owner)) {
          return true
        } else return false
  }


}
