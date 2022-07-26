import { EventService } from './../../services/event.service';
import { Page } from './../../dto/page-dto';

import { NoteDto } from 'src/app/dto/note-dto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Output() selectEvent: EventEmitter<NoteDto> = new EventEmitter()
  @Input() selectedNote: NoteDto = {}
  page: Page = new Page
  currentPage: number = 0
  pageSize: number = 12

  constructor(private noteService: NoteService, private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.requestPage()
    this.eventService.refreshListEvent.subscribe(
      (response: void) => {
        this.requestPage()
      }
    )
  }

  createNoteEvent() {
    this.eventService.emitNewNoteEvent()
  }

  requestPage() {
    this.noteService.getPage(this.currentPage, this.pageSize).subscribe( (notes) => (this.page = notes))
  }

  onBack(): void {
    if (this.currentPage < 1){
      return
    }
    this.currentPage = this.currentPage - 1
    this.requestPage()
  }

  onNext(): void {
    if (this.page.content?.length != this.pageSize) {
      return
    }
    this.currentPage = this.currentPage + 1
    this.requestPage()
  }

  onDeleteNote(noteDto: NoteDto) {
    this.noteService.deleteById(noteDto.id ?? 0).subscribe(
      (response: void) => {
        this.requestPage()
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  onSelectContainer(noteDto: NoteDto) {
    this.copyNote(noteDto, this.selectedNote)
    this.selectEvent.emit(this.selectedNote)
  }

  copyNote(from: NoteDto, to: NoteDto) {
    to.content = from.content
    to.id = from.id
    to.title = from.title
    to.owner = from.owner
  }

  onBackToLogin() {
    this.router.navigate([''])
  }
}
