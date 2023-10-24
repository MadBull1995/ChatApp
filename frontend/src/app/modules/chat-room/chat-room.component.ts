import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from '@ngx-grpc/well-known-types';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/core/api/chat.service';
import { AppService } from 'src/app/core/app.service';
import { Chat } from 'src/app/core/chat/core/v1/chat.pb';
import { Message } from 'src/app/core/chat/core/v1/message.pb';

export interface DisplayMessage {
  username: string,
  timestamp?: Date,
  content: string
}

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  newMessage!: string | null;
  private currentChatId!: string;
  messages: DisplayMessage[] = [
    
    // ... more messages
  ];
  private params$!: Subscription;
  chats: Chat[] = [];
  constructor(
    private app: AppService,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe((params) => {
      this.currentChatId = params['roomId'];
      if (this.currentChatId) {
        this.chatService
          .createChat(this.currentChatId)
          .then(chat => {
            this.currentChatId = chat.chatId;
            
            this.messages = chat.messages?.map(m => ({
              username: this.app.userId === m.senderId ? 'You' : m.senderId,
              content: m.content,
              timestamp: m.timestamp?.toDate()
            }))!
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.app.loggedIn$.subscribe(userInfo => {
          this.chatService.listChats(userInfo.userId)
          .subscribe({
            next: (chat) => {
              console.log(chat)
              this.chats.push(chat);
            },
            error: (err) => {
              console.log(err)
            },
            complete: () => {
              if(this.chats.length === 0) {
                console.log('not found any chat')
              }
            },
          })
        })
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.params$) {
      this.params$.unsubscribe();
    }
  }

  sendMessage() {
    if(this.newMessage) {
      const now = new Timestamp();
      now.fromDate(new Date());
      const message = new Message({
        content: this.newMessage,
        timestamp: now,
        senderId: this.app.userId
      })
      this.messages.push({
        username: 'You',
        content: message.content,
        timestamp: message.timestamp?.toDate()
      })
      this.newMessage = null
      this.chatService.sendMessage(this.currentChatId, message)
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    }
  }

}
