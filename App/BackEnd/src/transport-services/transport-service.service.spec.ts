import { Test, TestingModule } from '@nestjs/testing';
import { TransportServiceService } from './transport-service.service';

describe('TransportServiceService', () => {
  let service: TransportServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportServiceService],
    }).compile();

    service = module.get<TransportServiceService>(TransportServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
