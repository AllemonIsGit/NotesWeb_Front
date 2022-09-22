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
  }

  onSave(noteDto: NoteDto): void {
    console.log(noteDto.title)
    console.log(noteDto.content)
    console.log(noteDto.id)
    this.noteService.update(noteDto).subscribe(
      (response: void) => {
        this.eventService.emitPutEvent()
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  onChange() {
    console.log()
  }


}
