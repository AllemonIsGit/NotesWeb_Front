import { Component, Input, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/dto/note-dto';

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.css']
})
export class NotePanelComponent implements OnInit {
  @Input() selectedNote: NoteDto = {}

  constructor() { }

  ngOnInit(): void {
  }

}
