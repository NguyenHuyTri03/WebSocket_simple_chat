import { createAction, props } from "@ngrx/store";
import { ChatModel } from "src/models/chat.model";


//Get All chats
export const getAllChat = createAction(
    "[Chat] Get all chat",
)

export const getAllChatSuccess = createAction(
    "[Chat] Get All chat success",
    props<{ chatData: ChatModel[]}>(),
)

export const getAllChatFailure = createAction(
    "[Chat] Get all chat failure",
    props<{ error: string}>(),
)


//Get chats by room ID
export const getById = createAction(
    "[Chat] Get chat by ID",
)

export const getByIdSuccess = createAction(
    "[Chat] Get chat by ID success",
    props<{ chatData: ChatModel[]}>()
)

export const getByIdFailure = createAction(
    "[Chat] Get chat by Id faliure",
    props<{ error: string}>()
)

