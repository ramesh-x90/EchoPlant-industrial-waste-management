import { Test, TestingModule } from '@nestjs/testing';
import { RawMaterialsService } from './raw-materials.service';

describe('RawMaterialsService', () => {
  let service: RawMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RawMaterialsService],
    }).compile();

    service = module.get<RawMaterialsService>(RawMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
