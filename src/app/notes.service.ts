import { Note } from './note';

import { Component } from '@angular/core';

@Component({})
export class NoteService {
  getNotes() {
    return [new Note(1, 'title', 'content'), new Note(2, 'title2', 'content2')];
  }
}
