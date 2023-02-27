import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { async, Observable, of } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ChatModel } from 'src/models/chat.model';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit{

  constructor(private chatService: ChatService){}

  chat$ !: Observable<any>;
  messages: any = [];
  roomId: string = '';
  newMsg: string = '';
  sender: string = '';
  isLoggedIn: boolean = false;

  ngOnInit(){

  }

  getTime(){
    const time = new Date();
    let currTime: string = time.toLocaleString();
    console.log(currTime);
    return currTime;
  }

  joinRoom(roomId: string){
    if(roomId || this.sender){
      this.isLoggedIn = true;
      this.chat$ = this.chatService.getMsgByRoomId(roomId);
      this.chat$.subscribe( (msg: any) => {
        this.messages.push(msg);
      });
    }else{
      window.alert("Enter the missing field");
    }
  }

  sendMessage(message: string){
    if(this.newMsg != ''){
      let data: ChatModel = {
        roomId: this.roomId,
        sender: this.sender,
        senderMsg: this.newMsg,
        time: this.getTime().toString(),
      }
      this.chatService.sendMessageByRoom(data);
      this.newMsg = '';
    }
  }

  // chat$: Observable<ChatState>;
  // room$: Observable<ChatState>;

  // constructor(private store: Store<{chat: ChatState}>, private chatService: ChatService){
  //   this.chat$ = this.store.select('chat');
  //   this.room$ = this.store.select('chat');
  // }

  // ngOnInit(){
  //   this.store.dispatch(ChatActions.getAllChat());
  //   this.chat$.subscribe( (data) => {
  //     // console.log(data);
  //   });
  // }

  // getChatById(roomId: string){
  //   // this.store.dispatch(ChatActions.getById());
  //   // this.chat$.subscribe( (data) => {
  //   //   // console.log(data);
  //   // })
  //   this.chatService.getById(roomId).subscribe((data) =>{
  //     console.log(data)
  //   })
  // }
}
