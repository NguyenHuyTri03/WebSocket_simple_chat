import { Module } from '@nestjs/common';
import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controller/chat/chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from 'src/schemas/chat.schema';
import { ChatGateway } from './gateway/chat/chat.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema}])],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController]
})
export class ChatModule {}
