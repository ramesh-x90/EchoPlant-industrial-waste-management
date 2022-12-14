import { Test, TestingModule } from '@nestjs/testing';
import { WastePickupRequestController } from './waste-pickup-request.controller';
import { WastePickupRequestService } from './waste-pickup-request.service';

describe('WastePickupRequestController', () => {
  let controller: WastePickupRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WastePickupRequestController],
      providers: [WastePickupRequestService],
    }).compile();

    controller = module.get<WastePickupRequestController>(WastePickupRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
