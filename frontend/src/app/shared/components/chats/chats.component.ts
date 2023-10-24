import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/api/chat.service';
import { AppService } from 'src/app/core/app.service';
import { Chat } from 'src/app/core/chat/core/v1/chat.pb';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  _loading = true;

  chats: Chat[] = [];

  constructor(
    private chat: ChatService,
    private app: AppService
  ) { }

  getShortChatId(chatId: string): string {
    let tempId = chatId.split(':');
    let contactId = tempId.find(id => id !== this.app.userId);
    return contactId ?? '';
  }

  ngOnInit(): void {
    if(this.app.userId) {
      this.chat.listChats(this.app.userId)
        .subscribe(chat => {
          // console.log(chat)
          this.chats.push(chat);
          this._loading = false;
        })
    } else {
      this.app.loggedIn$.subscribe(e => {
        this.chat.listChats(e.userId)
        .subscribe(chat => {
          // console.log(chat)
          this.chats.push(chat);
          this._loading = false;
        })
      })
    }
  }

}
