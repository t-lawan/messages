import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('listMessages', () => {
    it('should return 2', () => {
      expect(controller.listMessages()).toEqual(2);
    }); 
  })

  describe('createMessages', () => {
    it('should return 3', () => {
      expect(controller.createMessages()).toEqual(3);
    });
  })

  describe('getMessage', () => {
    it('should return 4', () => {
      expect(controller.getMessage()).toEqual(4);
    });
  })
});
