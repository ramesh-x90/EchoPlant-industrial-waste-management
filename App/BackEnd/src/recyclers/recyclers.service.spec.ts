import { Test, TestingModule } from '@nestjs/testing';
import { RecyclersService } from './recyclers.service';

describe('RecyclersService', () => {
  let service: RecyclersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecyclersService],
    }).compile();

    service = module.get<RecyclersService>(RecyclersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
