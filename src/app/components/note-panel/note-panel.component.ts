import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NoteDto } from 'src/app/dto/note-dto';

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.css']
})
export class NotePanelComponent implements OnInit, OnChanges {
  title = new FormControl(this.selectedNote?.title ?? "")
  // noteForm: FormGroup = new FormGroup({
  //   title: new FormControl(this.selectedNote.title),
  //   content: new FormControl(this.selectedNote.content)
  // })

  constructor(noteService: NoteService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  _selectedNote: NoteDto = {}

  @Input()
  get selectedNote() {
    return this._selectedNote
  }
  set selectedNote(value: NoteDto) {
    this._selectedNote = value
    this.title = new FormControl(value?.title ?? "")
  }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.title.value)
  }

  onChange() {
    console.log(this.title.value)
  }
}
