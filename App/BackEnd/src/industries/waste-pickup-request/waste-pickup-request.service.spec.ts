import { Test, TestingModule } from '@nestjs/testing';
import { WastePickupRequestService } from './waste-pickup-request.service';

describe('WastePickupRequestService', () => {
  let service: WastePickupRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WastePickupRequestService],
    }).compile();

    service = module.get<WastePickupRequestService>(WastePickupRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
