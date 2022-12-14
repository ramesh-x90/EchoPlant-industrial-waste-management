import { Test, TestingModule } from '@nestjs/testing';
import { AcceptedWasteService } from './accepted-waste.service';

describe('AcceptedWasteService', () => {
  let service: AcceptedWasteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcceptedWasteService],
    }).compile();

    service = module.get<AcceptedWasteService>(AcceptedWasteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
