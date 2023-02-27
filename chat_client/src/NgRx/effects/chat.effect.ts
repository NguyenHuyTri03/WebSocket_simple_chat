import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { ChatService } from "src/app/services/chat.service";
import { ChatModel } from "src/models/chat.model";
import * as ChatActions from '../actions/chat.action'


@Injectable()
export class ChatEffect{
    constructor( private action$: Actions, private chatService: ChatService){}

    getAllChat$ = createEffect(
        () => this.action$.pipe(
            ofType(ChatActions.getAllChat),
            switchMap( (action) => {
                return this.chatService.getAllChats();
            }),
            map( (data) => {
                return ChatActions.getAllChatSuccess({ chatData: <Array<ChatModel>>data })
            }),
            catchError( (error) => {
                return of(ChatActions.getAllChatFailure( { error: error.message}));
            })
        )
    )

    // getById$ = createEffect(
    //     () => this.action$.pipe(
    //         ofType(ChatActions.getById),
    //         mergeMap( (action) => {
    //             return this.chatService.getById(action);
    //          }),
    //         map( (data) => {
    //             return ChatActions.getByIdSuccess( { chatData: <Array<ChatModel>>data});
    //         }),
    //         catchError( (error) =>{
    //             return of(ChatActions.getByIdFailure( { error: error.message}))
    //         })
    //     )
    // )
}