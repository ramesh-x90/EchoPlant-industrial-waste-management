import { Test, TestingModule } from '@nestjs/testing';
import { TransportServiceController } from './transport-service.controller';
import { TransportServiceService } from './transport-service.service';

describe('TransportServiceController', () => {
  let controller: TransportServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportServiceController],
      providers: [TransportServiceService],
    }).compile();

    controller = module.get<TransportServiceController>(TransportServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
