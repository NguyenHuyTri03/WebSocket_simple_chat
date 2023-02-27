import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatModel } from 'src/models/chat.model';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat_client';

  constructor(private chatService: ChatService){}

  ngOnInit(){
    // this.chatService.getAllChats().subscribe((data) =>{
    //   console.log(data)
    // })
    // this.chatService.getById("room1").subscribe((data) =>{
    //   console.log(data)
    // })
  }

  chat$!: Observable<any>;
  messages :any= [];
  roomId: string = '';
  newMsg: string = '';
  sender: string = '';

  joinRoom(roomId: string){
    if(roomId || this.sender){
      console.log("Joined in room: ", roomId);
      this.chat$ = this.chatService.getMsgByRoomId(roomId);
      this.chat$.subscribe( (msg: any) => {
        this.messages.push(msg);
      });
    }else{
      window.alert("Enter the missing field");
    }
  }

  sendMessage(message: string){
    let data: ChatModel = {
      roomId: this.roomId,
      sender: this.sender,
      senderMsg: this.newMsg,
      time: Date.now().toLocaleString(),
    }
    this.chatService.sendMessageByRoom(data);
  }
}
