import { ChatModel } from "src/models/chat.model";

export interface ChatState{
    chatData: ChatModel[];
    isSuccess: boolean;
    loading: boolean
    error: string;
}