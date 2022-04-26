import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import {MessagesService} from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){
    }


    @Get()
    async listMessages(){
        return await this.messagesService.findAll();
    }

    @Post()
    async createMessages(@Body() body: CreateMessageDto){
        console.log(body)
        return await this.messagesService.create(body.content);
    }

    @Get('/:id')  
    async getMessage(@Param('id') id: string){
        const message =  await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('Message not found')
        }
        return message;
    }
}
