/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ChatModel } from 'src/model/chat.model';
import { Chat, ChatDocument } from 'src/schemas/chat.schema';
export declare class ChatService {
    private chatModel;
    getTime(): string;
    constructor(chatModel: Model<ChatDocument>);
    getAll(): Promise<(import("mongoose").Document<unknown, any, Chat> & Omit<Chat & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getById(id: string): Promise<(import("mongoose").Document<unknown, any, Chat> & Omit<Chat & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(newChat: ChatModel): Promise<import("mongoose").Document<unknown, any, Chat> & Omit<Chat & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, upChat: ChatModel): Promise<import("mongoose").Document<unknown, any, Chat> & Omit<Chat & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    detete(id: string): Promise<any>;
}
