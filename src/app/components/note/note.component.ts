import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/dto/note-dto';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() selectedNote: NoteDto = {}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelectContainer() {
  }

}
