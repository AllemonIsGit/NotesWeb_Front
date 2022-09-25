import { EventService } from './../../services/event.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteDto } from 'src/app/dto/note-dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.css']
})
export class NotePanelComponent implements OnInit {
  @Input() selectedNote: NoteDto = {}

  constructor(private noteService: NoteService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.newNoteClickEvent.subscribe(
      (response: void)  => {
        this.onNewNote()
      })
  }

  onSave(noteDto: NoteDto): void {
    console.log(noteDto.title)
    console.log(noteDto.content)
    console.log(noteDto.id)
    if (noteDto.id == undefined) {
      this.create(noteDto)
    } else this.update(noteDto)
  }

  onDelete(id: number) {
    if (id == undefined) {
      return
    }
    this.noteService.deleteById(id).subscribe(
      (response: void) => {
        this.eventService.emitRefreshListEvent()
      }
    )
  }

  onNewNote(): void {
    this.selectedNote.id = undefined
    this.selectedNote.title = "Your new title"
    this.selectedNote.content = "Your new note"
  }

  update(noteDto: NoteDto): void {
    this.noteService.update(noteDto).subscribe(
      (response: void) => {
        this.eventService.emitRefreshListEvent()
      }
    )
  }

  create(noteDto: NoteDto) {
    this.noteService.create(noteDto).subscribe(
      (response: void) => {
        this.eventService.emitRefreshListEvent()
      }
    )
  }





}
