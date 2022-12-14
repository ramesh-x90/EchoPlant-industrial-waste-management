import { Test, TestingModule } from '@nestjs/testing';
import { CarrierOwnersService } from './carrier-owners.service';

describe('CarrierOwnersService', () => {
  let service: CarrierOwnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrierOwnersService],
    }).compile();

    service = module.get<CarrierOwnersService>(CarrierOwnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
