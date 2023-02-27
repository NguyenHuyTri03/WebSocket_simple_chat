import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Post, Put, Query } from '@nestjs/common/decorators';
import { ChatService } from 'src/chat/services/chat/chat.service';
import { ChatModel } from 'src/model/chat.model';

@Controller('chat')
export class ChatController {
    
    constructor(private chatService: ChatService){}

    @Get()
    getAll(){
        return this.chatService.getAll();
    }

    @Get("/byId")
    getById(@Query("roomId") id: string){
        return this.chatService.getById(id);
    }

    @Post("/create")
    createNew(@Body() newChat: ChatModel){
        return this.chatService.create(newChat);
    }

    @Put("/update")
    update(@Query("id") id: string, @Body() newChat:ChatModel){
        return this.chatService.update(id, newChat);
    }

    @Delete("/delete")
    delete(@Query("id") id: string){
        return this.chatService.detete(id);
    }
}
