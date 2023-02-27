import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPageRoutingModule } from './chat-page-routing.module';
import { ChatPageComponent } from './chat-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatPageComponent
  ],
  imports: [
    CommonModule,
    ChatPageRoutingModule,
    FormsModule,
  ]
})
export class ChatPageModule { }
