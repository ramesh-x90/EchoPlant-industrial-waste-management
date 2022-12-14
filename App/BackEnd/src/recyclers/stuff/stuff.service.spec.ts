import { Test, TestingModule } from '@nestjs/testing';
import { StuffService } from './stuff.service';

describe('StuffService', () => {
  let service: StuffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StuffService],
    }).compile();

    service = module.get<StuffService>(StuffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
