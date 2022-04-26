import { Injectable } from '@nestjs/common';
import {MessagesRepository} from './messages.repository';


@Injectable()
export class MessagesService {

    constructor(public messageRepo: MessagesRepository){
    }

    async findOne(id: string){
        return await this.messageRepo.findOne(id);
    }

    async findAll(){
        return await this.messageRepo.findAll();

    }

    async create(content: string){
        return await this.messageRepo.create(content);

    }
}

