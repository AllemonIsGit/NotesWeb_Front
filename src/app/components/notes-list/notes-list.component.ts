import { Page } from './../../dto/page-dto';
import { NoteService } from 'src/app/services/note.service';
import { NoteDto } from 'src/app/dto/note-dto';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  page: Page = new Page
  
  currentPage: number = 0

  constructor(private service: NoteService) {}

  ngOnInit(): void {
    this.requestPage()
  }

  create(note: NoteDto): void {
    this.service.create(note).subscribe(
      (response: void) => {
        this.requestPage()
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  requestPage() {
    this.service.getPage(this.currentPage).subscribe( (notes) => (this.page = notes))
  }

  onBack(): void {
    if (this.currentPage < 1){
      return
    }
    this.currentPage = this.currentPage - 1
    this.requestPage()
  }

  onNext(): void {
    if (this.page.content?.length != 8) {
      return
    }
    this.currentPage = this.currentPage + 1
    this.requestPage()
  }

  onDeleteNote(noteDto: NoteDto) {
    this.service.deleteById(noteDto.id ?? 0).subscribe(
      (response: void) => {
        this.requestPage()
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }
}
