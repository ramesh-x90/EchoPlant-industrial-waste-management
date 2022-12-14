import { Test, TestingModule } from '@nestjs/testing';
import { StuffController } from './stuff.controller';
import { StuffService } from './stuff.service';

describe('StuffController', () => {
  let controller: StuffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StuffController],
      providers: [StuffService],
    }).compile();

    controller = module.get<StuffController>(StuffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
