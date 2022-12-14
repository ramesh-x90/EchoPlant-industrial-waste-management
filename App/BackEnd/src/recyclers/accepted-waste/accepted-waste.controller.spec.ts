import { Test, TestingModule } from '@nestjs/testing';
import { AcceptedWasteController } from './accepted-waste.controller';
import { AcceptedWasteService } from './accepted-waste.service';

describe('AcceptedWasteController', () => {
  let controller: AcceptedWasteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcceptedWasteController],
      providers: [AcceptedWasteService],
    }).compile();

    controller = module.get<AcceptedWasteController>(AcceptedWasteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
