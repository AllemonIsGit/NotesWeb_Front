import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public refreshListEvent: EventEmitter<void> = new EventEmitter()
  public newNoteClickEvent: EventEmitter<void> = new EventEmitter()

  constructor() { }

  emitRefreshListEvent() {
    this.refreshListEvent.emit()
  }

  emitNewNoteEvent() {
    this.newNoteClickEvent.emit()
  }
}
