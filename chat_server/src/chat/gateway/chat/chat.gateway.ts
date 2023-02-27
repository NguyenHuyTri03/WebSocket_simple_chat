import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway( {cors: true} )
export class ChatGateway {

  @WebSocketServer() server;

  handleConnection(client: any, ...args: any[]){
    console.log(`${client.id} has connected`);
  }

  handleDisConnect(client: any){
    console.log(`${client.id} has disconnected`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    const roomId = payload.roomId;
    console.log("message-", roomId, payload);
    this.server.emit("message-" + roomId, payload)
    return 'Hello world!';
  }
}
