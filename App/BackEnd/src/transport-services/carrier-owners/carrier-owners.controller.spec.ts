import { Test, TestingModule } from '@nestjs/testing';
import { CarrierOwnersController } from './carrier-owners.controller';
import { CarrierOwnersService } from './carrier-owners.service';

describe('CarrierOwnersController', () => {
  let controller: CarrierOwnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrierOwnersController],
      providers: [CarrierOwnersService],
    }).compile();

    controller = module.get<CarrierOwnersController>(CarrierOwnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
