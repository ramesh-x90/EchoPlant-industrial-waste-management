import { Test, TestingModule } from '@nestjs/testing';
import { RecyclersController } from './recyclers.controller';
import { RecyclersService } from './recyclers.service';

describe('RecyclersController', () => {
  let controller: RecyclersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecyclersController],
      providers: [RecyclersService],
    }).compile();

    controller = module.get<RecyclersController>(RecyclersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
