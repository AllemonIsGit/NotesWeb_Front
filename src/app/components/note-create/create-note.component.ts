
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/dto/note-dto';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private service: NoteService) { }

  ngOnInit(): void {
  }

  create(note: NoteDto): void {
    this.service.create(note).subscribe(
      (response: void) => {
        console.log("note creation succesfull")
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

}
