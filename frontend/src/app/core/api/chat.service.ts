import { Injectable } from '@angular/core';
import { ChatterClient } from '../chat/services/v1/chatter.pbsc';
import { CreateRoomRequest, ListChatsRequest, SendMessageRequest, SendMessageResponse } from '../chat/services/v1/chatter.pb';
import { Observable } from 'rxjs';
import { Chat } from '../chat/core/v1/chat.pb';
import { Metadata } from '@grpc/grpc-js';
import { AppService } from '../app.service';
import { GrpcMetadata } from '@ngx-grpc/common';
import { Message } from '../chat/core/v1/message.pb';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _metadata!: GrpcMetadata;
  constructor(
    private app: AppService,
    private chat: ChatterClient
  ) {
    this._metadata = new GrpcMetadata();
    this.updateMetadata();
  }

  private updateMetadata() {
    this._metadata.set('Authorization', `Bearer ${this.app.token}`)
  }

  sendMessage(chatId: string, message: Message): Promise<SendMessageResponse> {
    return new Promise((resolve, reject) => {
      this.chat.sendMessage(new SendMessageRequest({
        message,
        roomId: chatId
      }), this.app.metadata)
        .subscribe({
          error: (err) => {
            reject(err)
          },
          next: (value) => {
            resolve(value)
          },
        })
    })
  }

  listChats(userId: string): Observable<Chat> {
    return this.chat.listChats(new ListChatsRequest({
      userId
    }), this.app.metadata)
  }

  createChat(contactId: string): Promise<Chat> {
    return new Promise((resolve, reject) => {
      this.chat.createRoom(new CreateRoomRequest({
        // group: false,
        userId: contactId
      }), this.app.metadata).subscribe({
        error: (err) => {
          reject(err);
        },
        next: (value) => {
          resolve(value);
        },
      })
    })
  }

}
