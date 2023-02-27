import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type ChatDocument = HydratedDocument<Chat>

@Schema()
export class Chat{
    @Prop()
    roomId: string;

    @Prop()
    sender: string;

    @Prop()
    content: string;

    @Prop()
    time: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);