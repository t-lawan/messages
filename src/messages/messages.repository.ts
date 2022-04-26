import {readFile, writeFile} from 'fs/promises'
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
    async findOne(id: string){
        const messages = await this.retrieveAllDataFromFile();
        return messages[id];
    }

    async findAll(){
        return await this.retrieveAllDataFromFile();
    }

    async create(content: string){
        const messages = await this.retrieveAllDataFromFile();

        const id = Math.floor(Math.random() * 999);
        const newMessage = {id,content};

        messages[id] = newMessage;

        await writeFile('messages.json', JSON.stringify(messages));
        return newMessage;
    }

    private async retrieveAllDataFromFile(){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
        // return 1;
    }
}
