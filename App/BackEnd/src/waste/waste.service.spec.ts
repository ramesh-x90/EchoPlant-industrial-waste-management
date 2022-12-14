import { Test, TestingModule } from '@nestjs/testing';
import { WasteService } from './waste.service';

describe('WasteService', () => {
  let service: WasteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WasteService],
    }).compile();

    service = module.get<WasteService>(WasteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
