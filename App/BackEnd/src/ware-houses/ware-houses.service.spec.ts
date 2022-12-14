import { Test, TestingModule } from '@nestjs/testing';
import { WareHousesService } from './ware-houses.service';

describe('WareHousesService', () => {
  let service: WareHousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WareHousesService],
    }).compile();

    service = module.get<WareHousesService>(WareHousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
