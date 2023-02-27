import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ChatModel } from 'src/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient, private socket: Socket) { }

  getAllChats(){
    return this.httpClient.get(`${environment.chatUrl}chat`);
  }

  getById(roomId: string){
    let param: any = {'roomId': roomId};
    return this.httpClient.get(`${environment.chatUrl}chat/byId?`, {params: param})
  }

  getMsgByRoomId(roomId: string){
    const channel = "message-" + roomId;
    return this.socket.fromEvent(channel);
  }

  sendMessageByRoom(data: ChatModel){
    this.socket.emit("message", data);
  }

  // createChat(chatData: ChatModel){
  //   return this.httpClient.post<ChatModel>(`${environment.chatUrl}`, {
  //     roomId: chatData.roomId,
  //     sender: chatData.sender,
  //     senderMsg: chatData.senderMsg,
  //     time: chatData.time
  //   })
  // }
}
