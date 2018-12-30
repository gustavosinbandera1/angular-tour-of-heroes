import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private url = 'http://localhost:3000';
  private socket;
  constructor() { }

  sendMessage(message: string) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }




}
