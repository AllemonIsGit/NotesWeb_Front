import { EventEmitter, Injectable } from '@angular/core';
import { NoteDto } from '../dto/note-dto';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public refreshListEvent: EventEmitter<void> = new EventEmitter()
  public newNoteClickEvent: EventEmitter<void> = new EventEmitter()
  public deleteNoteEvent: EventEmitter<number> = new EventEmitter()

  constructor() { }

  emitRefreshListEvent() {
    this.refreshListEvent.emit()
  }

  emitNewNoteEvent() {
    this.newNoteClickEvent.emit()
  }

  emitDeleteNoteEvent(id: number) {
    this.deleteNoteEvent.emit(id)
  }
}
