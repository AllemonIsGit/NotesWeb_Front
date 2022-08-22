import { NoteDto } from 'src/app/dto/note-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: NoteDto = {}

  constructor() { }

  ngOnInit(): void {
  }
}
