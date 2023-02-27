import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatModel } from 'src/model/chat.model';
import { Chat, ChatDocument } from 'src/schemas/chat.schema';

@Injectable()
export class ChatService {
    getTime(){
        const currDate = new Date();

        return currDate.toLocaleString();
    }

    constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>){}

    async getAll(){
        try{
            let chatData = await this.chatModel.find({}).exec();
            return chatData;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async getById(id: string){
        try{
            let chatData = await this.chatModel.find({roomId: id}).exec()
            return chatData;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async create(newChat: ChatModel){
        try{
            let chatData = this.chatModel.create(newChat);
            return chatData;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async update(id: string, upChat: ChatModel){
        try{
            let chatData = await this.chatModel.findOneAndUpdate({roomId: id}, {$set: {
                senderMsg: upChat.senderMsg,
                time: this.getTime()
            }}).exec()
            return chatData;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async detete(id: string){
        try{
            this.chatModel.deleteOne({roomId: id}).exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }
}
