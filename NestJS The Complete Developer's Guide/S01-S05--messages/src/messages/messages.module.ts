import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
  controllers: [MessagesController],
  /*The main idea of a provider is that it can be injected as a dependency; 
  this means objects can create various relationships with each other,
   and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.*/
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
