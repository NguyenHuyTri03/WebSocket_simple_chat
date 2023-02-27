import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects' 
import { ChatReducer } from 'src/NgRx/reducers/chat.reducer';
import { ChatEffect } from 'src/NgRx/effects/chat.effect';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = {url: environment.chatUrl, options: {}};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      chat: ChatReducer
    }, {}),
    EffectsModule.forRoot([
      ChatEffect
    ]),
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
