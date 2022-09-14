import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable() //reigster to DI containar
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  /*
  messagesRepo:MessagesRepository 
  constructor(messagesRepo:MessagesRepository){
    this.messagesRepo=messagesRepo
  }*/

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
