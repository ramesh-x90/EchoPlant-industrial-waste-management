import { Test, TestingModule } from '@nestjs/testing';
import { WasteController } from './waste.controller';
import { WasteService } from './waste.service';

describe('WasteController', () => {
  let controller: WasteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WasteController],
      providers: [WasteService],
    }).compile();

    controller = module.get<WasteController>(WasteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
