import { createReducer, on } from "@ngrx/store";
import { ChatState } from "../states/chat.state";
import * as ChatActions from '../actions/chat.action'


const initialState: ChatState = {
    chatData: [],
    isSuccess: true,
    loading: false,
    error: ''
}

export const ChatReducer = createReducer(
    initialState,
    on(ChatActions.getAllChat, (state) => ({...state, loading: false})),
    on(ChatActions.getAllChatSuccess, (state, action) => ({
        ...state,
        chatData: action.chatData,
        isSuccess: true,
        loading: false,
    })),
    on(ChatActions.getAllChatFailure, (state, action) => ({
        ...state,
        chatData: [],
        loading: false,
        error: action.error,
    })),
    on(ChatActions.getById, (state) => ({...state, loading: false})),
    on(ChatActions.getByIdSuccess, (state, action) => ({
        ...state,
        chatData: action.chatData,
        isSuccess: true,
        loading: false
    })),
    on(ChatActions.getByIdFailure, (state, action) => ({
        ...state,
        chatData: [],
        isSuccess: false,
        loading: false,
        error: action.error
    }))
)