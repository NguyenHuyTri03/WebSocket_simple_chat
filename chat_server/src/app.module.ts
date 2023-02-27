import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://admin:root@clusterdemo.jhnygpz.mongodb.net/chat?retryWrites=true&w=majority"), ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
