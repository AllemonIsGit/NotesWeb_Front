import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public putEvent: EventEmitter<void> = new EventEmitter()

  constructor() { }

  emitPutEvent() {
    this.putEvent.emit()
  }
}
