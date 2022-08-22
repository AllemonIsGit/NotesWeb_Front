import { NoteService } from 'src/app/services/note.service';
import { NoteDto } from 'src/app/dto/note-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notesList: NoteDto[] = []

  constructor(private service: NoteService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe( (notes) => (this.notesList = notes))
  }
}
