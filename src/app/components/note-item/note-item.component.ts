import { NoteService } from 'src/app/services/note.service';
import { NoteDto } from 'src/app/dto/note-dto';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: NoteDto = {}
  @Output() deleteEvent: EventEmitter<NoteDto> = new EventEmitter()
  @Output() selectEvent: EventEmitter<NoteDto> = new EventEmitter()

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  onDeleteEvent(noteDto: NoteDto) {
    this.deleteEvent.emit(noteDto)
  }

  onSelectContainer(noteDto: NoteDto) {
    this.selectEvent.emit(noteDto)
    this.noteService.setSelectedNoteCopy(noteDto)
  }
}
